// AWS Configuration for Digilink IT Solutions
// This file contains the AWS setup configuration for storing contact form submissions

export interface ContactSubmission {
  id: string
  name: string
  email: string
  message: string
  timestamp: string
  status: "new" | "contacted" | "resolved"
}

// AWS DynamoDB configuration
export const AWS_CONFIG = {
  region: process.env.AWS_REGION || "us-east-1",
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  tableName: process.env.AWS_DYNAMODB_TABLE_NAME || "digilink-contact-submissions",
}

// Validate AWS configuration
export function validateAWSConfig(): boolean {
  return !!(AWS_CONFIG.accessKeyId && AWS_CONFIG.secretAccessKey && AWS_CONFIG.region && AWS_CONFIG.tableName)
}

import { DynamoDBClient } from "@aws-sdk/client-dynamodb"
import { DynamoDBDocumentClient, PutCommand, ScanCommand } from "@aws-sdk/lib-dynamodb"

// AWS DynamoDB service functions
export class ContactFormService {
  private isConfigured: boolean
  private docClient: DynamoDBDocumentClient | null = null

  constructor() {
    this.isConfigured = validateAWSConfig()

    if (this.isConfigured) {
      const client = new DynamoDBClient({
        region: AWS_CONFIG.region,
        credentials: {
          accessKeyId: AWS_CONFIG.accessKeyId!,
          secretAccessKey: AWS_CONFIG.secretAccessKey!,
        },
      })
      this.docClient = DynamoDBDocumentClient.from(client)
    }
  }

  async saveSubmission(submission: Omit<ContactSubmission, "id" | "timestamp" | "status">): Promise<ContactSubmission> {
    const contactSubmission: ContactSubmission = {
      id: `contact_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
      ...submission,
      timestamp: new Date().toISOString(),
      status: "new",
    }

    if (!this.isConfigured || !this.docClient) {
      // Fallback: Log to console when AWS is not configured
      console.log("[v0] Contact form submission (AWS not configured):", contactSubmission)
      return contactSubmission
    }

    try {
      await this.docClient.send(
        new PutCommand({
          TableName: AWS_CONFIG.tableName,
          Item: contactSubmission,
        }),
      )

      console.log("[v0] Contact submission saved to AWS DynamoDB:", contactSubmission.id)
      return contactSubmission
    } catch (error) {
      console.error("[v0] AWS DynamoDB error:", error)
      throw new Error("Failed to save contact submission to AWS")
    }
  }

  async getSubmissions(): Promise<ContactSubmission[]> {
    if (!this.isConfigured || !this.docClient) {
      console.log("[v0] AWS not configured - returning empty submissions list")
      return []
    }

    try {
      const result = await this.docClient.send(
        new ScanCommand({
          TableName: AWS_CONFIG.tableName,
        }),
      )

      return (result.Items as ContactSubmission[]) || []
    } catch (error) {
      console.error("[v0] AWS DynamoDB error:", error)
      throw new Error("Failed to retrieve contact submissions from AWS")
    }
  }
}
