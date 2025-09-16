const { DynamoDBClient } = require("@aws-sdk/client-dynamodb")
const { DynamoDBDocumentClient, PutCommand, ScanCommand } = require("@aws-sdk/lib-dynamodb")
const { Resend } = require("resend")

const dynamoClient = new DynamoDBClient({ region: process.env.AWS_REGION })
const docClient = DynamoDBDocumentClient.from(dynamoClient)
const resend = new Resend(process.env.RESEND_API_KEY)

exports.handler = async (event) => {
  const headers = {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Headers": "Content-Type, Authorization",
    "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
    "Content-Type": "application/json",
  }

  // Handle preflight requests
  if (event.httpMethod === "OPTIONS") {
    return {
      statusCode: 200,
      headers,
      body: "",
    }
  }

  try {
    if (event.httpMethod === "POST") {
      const body = JSON.parse(event.body || "{}")
      const { name, email, message } = body

      console.log("Contact form submission received:", { name, email, messageLength: message?.length })

      // Validate required fields
      if (!name || !email || !message) {
        return {
          statusCode: 400,
          headers,
          body: JSON.stringify({ error: "All fields are required" }),
        }
      }

      // Validate email format
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
      if (!emailRegex.test(email)) {
        return {
          statusCode: 400,
          headers,
          body: JSON.stringify({ error: "Please enter a valid email address" }),
        }
      }

      const submissionId = `contact_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`
      const timestamp = new Date().toISOString()

      try {
        await docClient.send(
          new PutCommand({
            TableName: process.env.STORAGE_CONTACTSUBMISSIONS_NAME,
            Item: {
              id: submissionId,
              name,
              email,
              message,
              timestamp,
              createdAt: timestamp,
            },
          }),
        )

        console.log("Contact submission saved to DynamoDB:", submissionId)
      } catch (dynamoError) {
        console.error("DynamoDB save error:", dynamoError)
        // Continue with email notification even if DynamoDB fails
      }

      try {
        await resend.emails.send({
          from: "Digilink Contact Form <noreply@digilinkict.co.za>",
          to: ["apmkhwanazi@gmail.com"],
          subject: `New Contact Form Submission from ${name}`,
          html: `
            <h2>New Contact Form Submission</h2>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Message:</strong></p>
            <p>${message.replace(/\n/g, "<br>")}</p>
            <p><strong>Submission ID:</strong> ${submissionId}</p>
            <p><strong>Submitted at:</strong> ${new Date().toLocaleString()}</p>
          `,
        })
        console.log("Email notification sent successfully")
      } catch (emailError) {
        console.error("Email notification failed:", emailError)
        // Don't fail the entire request if email fails
      }

      return {
        statusCode: 200,
        headers,
        body: JSON.stringify({
          message: "Thank you for your message! We will get back to you within 24 hours.",
          submissionId,
        }),
      }
    }

    if (event.httpMethod === "GET") {
      try {
        const result = await docClient.send(
          new ScanCommand({
            TableName: process.env.STORAGE_CONTACTSUBMISSIONS_NAME,
          }),
        )

        return {
          statusCode: 200,
          headers,
          body: JSON.stringify({ submissions: result.Items || [] }),
        }
      } catch (error) {
        console.error("Error retrieving submissions:", error)
        return {
          statusCode: 500,
          headers,
          body: JSON.stringify({ error: "Failed to retrieve submissions" }),
        }
      }
    }

    return {
      statusCode: 405,
      headers,
      body: JSON.stringify({ error: "Method not allowed" }),
    }
  } catch (error) {
    console.error("Lambda function error:", error)
    return {
      statusCode: 500,
      headers,
      body: JSON.stringify({ error: "Internal server error" }),
    }
  }
}
