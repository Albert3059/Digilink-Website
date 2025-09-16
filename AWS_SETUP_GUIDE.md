# AWS Integration Setup Guide for Digilink IT Solutions

This guide explains how to set up AWS integration for the contact form submissions.

## Prerequisites

1. AWS Account with appropriate permissions
2. AWS CLI installed and configured
3. Access to AWS DynamoDB service

## Step 1: Create DynamoDB Table

Create a DynamoDB table to store contact form submissions:

\`\`\`bash
aws dynamodb create-table \
    --table-name digilink-contact-submissions \
    --attribute-definitions \
        AttributeName=id,AttributeType=S \
    --key-schema \
        AttributeName=id,KeyType=HASH \
    --provisioned-throughput \
        ReadCapacityUnits=5,WriteCapacityUnits=5 \
    --region us-east-1
\`\`\`

## Step 2: Create IAM User and Policy

1. Create an IAM user for the application:
\`\`\`bash
aws iam create-user --user-name digilink-contact-form-user
\`\`\`

2. Create a policy for DynamoDB access:
\`\`\`json
{
    "Version": "2012-10-17",
    "Statement": [
        {
            "Effect": "Allow",
            "Action": [
                "dynamodb:PutItem",
                "dynamodb:GetItem",
                "dynamodb:Scan",
                "dynamodb:Query",
                "dynamodb:UpdateItem"
            ],
            "Resource": "arn:aws:dynamodb:us-east-1:*:table/digilink-contact-submissions"
        }
    ]
}
\`\`\`

3. Attach the policy to the user and create access keys.

## Step 3: Environment Variables

Add these environment variables to your Vercel project:

\`\`\`env
AWS_REGION=us-east-1
AWS_ACCESS_KEY_ID=your_access_key_here
AWS_SECRET_ACCESS_KEY=your_secret_key_here
AWS_DYNAMODB_TABLE_NAME=digilink-contact-submissions
\`\`\`

## Step 4: Install AWS SDK (if needed)

If you want to use the full AWS SDK, add it to your project:

\`\`\`bash
npm install aws-sdk
\`\`\`

## Step 5: Verify Setup

1. Deploy your application to Vercel
2. Test the contact form
3. Check the DynamoDB table for new entries
4. Monitor CloudWatch logs for any errors

## Security Best Practices

1. Use IAM roles instead of access keys when possible
2. Implement least privilege access policies
3. Enable CloudTrail for audit logging
4. Use VPC endpoints for enhanced security
5. Regularly rotate access keys

## Monitoring and Maintenance

1. Set up CloudWatch alarms for DynamoDB metrics
2. Monitor application logs for AWS-related errors
3. Implement backup strategies for the DynamoDB table
4. Review and update IAM policies regularly

## Troubleshooting

Common issues and solutions:

1. **Access Denied**: Check IAM permissions and policies
2. **Table Not Found**: Verify table name and region
3. **Rate Limiting**: Adjust DynamoDB capacity or implement exponential backoff
4. **Network Issues**: Check VPC configuration and security groups

For additional support, contact the Digilink IT Solutions development team.
