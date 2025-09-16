import type { APIGatewayProxyEvent, APIGatewayProxyResult } from "aws-lambda"
import { DynamoDBClient } from "@aws-sdk/client-dynamodb"
import { DynamoDBDocumentClient, PutCommand, ScanCommand } from "@aws-sdk/lib-dynamodb"
import { Resend } from "resend"

const dynamoClient = new DynamoDBClient({ region: process.env.AWS_REGION })
const docClient = DynamoDBDocumentClient.from(dynamoClient)
const resend = new Resend(process.env.RESEND_API_KEY)

export const handler = async (event: APIGatewayProxyEvent): Promise<APIGatewayProxyResult> => {
  const headers = {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Headers": "Content-Type",
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

      await docClient.send(
        new PutCommand({
          TableName: process.env.AWS_DYNAMODB_TABLE_NAME,
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
      const result = await docClient.send(
        new ScanCommand({
          TableName: process.env.AWS_DYNAMODB_TABLE_NAME,
        }),
      )

      return {
        statusCode: 200,
        headers,
        body: JSON.stringify({ submissions: result.Items || [] }),
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
