# AWS Amplify Deployment Guide

This guide will help you deploy your Digilink IT Solutions website to AWS Amplify with full functionality.

## 🚀 Quick Start

### Prerequisites
- AWS Account with appropriate permissions
- AWS CLI installed and configured
- Node.js 18+ installed

### 1. Initialize Amplify Project

\`\`\`bash
# Install Amplify CLI
npm install -g @aws-amplify/cli

# Initialize Amplify in your project
amplify init

# Follow the prompts:
# - Project name: digilink-it-solutions
# - Environment: dev
# - Default editor: Visual Studio Code
# - App type: javascript
# - Framework: react
# - Source directory: .
# - Build directory: out
# - Build command: npm run amplify:build
# - Start command: npm run start
\`\`\`

### 2. Add Backend Services

\`\`\`bash
# Add API Gateway + Lambda
amplify add api
# Choose: REST
# Provide friendly name: contactapi
# Provide path: /contact
# Choose existing Lambda or create new: Create a new Lambda function
# Function name: contactfunction
# Choose template: Hello World

# Add DynamoDB storage
amplify add storage
# Choose: NoSQL Database
# Table name: contactsubmissions
# Partition key: id (string)
\`\`\`

### 3. Configure Environment Variables

Create `.env.local` for local development:
\`\`\`env
NEXT_PUBLIC_API_URL=https://your-api-id.execute-api.your-region.amazonaws.com/dev
AWS_REGION=us-east-1
STORAGE_CONTACTSUBMISSIONS_NAME=contactsubmissions-dev
RESEND_API_KEY=re_your_resend_api_key_here
\`\`\`

### 4. Deploy Backend

\`\`\`bash
# Deploy all backend resources
amplify push

# This will create:
# - API Gateway endpoint
# - Lambda function
# - DynamoDB table
# - IAM roles and policies
\`\`\`

### 5. Deploy Frontend

\`\`\`bash
# Add hosting
amplify add hosting
# Choose: Amazon CloudFront and S3
# Select the bucket to use: Create a new bucket

# Publish the app
amplify publish
\`\`\`

## 📁 Project Structure

\`\`\`
digilink-it-solutions/
├── amplify/
│   ├── backend/
│   │   ├── api/contactapi/
│   │   ├── function/contactfunction/
│   │   └── storage/contactsubmissions/
│   └── team-provider-info.json
├── components/
│   └── contact-section.tsx          # Updated for Lambda API
├── lib/
│   └── api-config.ts               # API configuration
├── next.config.mjs                 # Static export config
├── amplify.yml                     # Build configuration
└── package.json                    # Updated scripts
\`\`\`

## 🔧 Configuration Details

### Next.js Configuration
- **Output**: Static export (`output: 'export'`)
- **Build Directory**: `out/` for Amplify hosting
- **Images**: Unoptimized for static hosting
- **Trailing Slash**: Enabled for better routing

### Lambda Function Features
- **DynamoDB Integration**: Saves contact submissions
- **Email Notifications**: Uses Resend API
- **CORS Support**: Configured for frontend communication
- **Error Handling**: Graceful fallbacks
- **Environment Variables**: Secure configuration

### API Gateway Setup
- **Endpoint**: `/contact`
- **Methods**: GET, POST, OPTIONS
- **CORS**: Enabled for all origins
- **Authentication**: Open (no auth required)

## 🌍 Environment Variables

### Frontend (Next.js)
\`\`\`env
NEXT_PUBLIC_API_URL=https://your-api-id.execute-api.region.amazonaws.com/dev
\`\`\`

### Backend (Lambda)
\`\`\`env
AWS_REGION=us-east-1
STORAGE_CONTACTSUBMISSIONS_NAME=contactsubmissions-dev
RESEND_API_KEY=re_your_resend_api_key_here
\`\`\`

## 🧪 Testing

### Local Testing
\`\`\`bash
# Test static build
npm run build
npm run start

# Test Lambda functions locally
amplify mock api
\`\`\`

### Production Testing
1. Submit contact form
2. Check DynamoDB for saved submission
3. Verify email notification received
4. Test form validation and error handling

## 🚀 Deployment Commands

\`\`\`bash
# Deploy backend changes only
amplify push

# Deploy frontend changes only
amplify publish

# Deploy everything
amplify push && amplify publish

# Check deployment status
amplify status
\`\`\`

## 🔍 Troubleshooting

### Common Issues

1. **API Gateway CORS Errors**
   - Ensure CORS is enabled in Lambda function
   - Check API Gateway CORS configuration

2. **DynamoDB Permission Errors**
   - Verify Lambda execution role has DynamoDB permissions
   - Check table name environment variable

3. **Email Notifications Not Working**
   - Verify Resend API key is set
   - Check Lambda function logs in CloudWatch

4. **Static Export Issues**
   - Ensure no server-side features are used
   - Check `next.config.mjs` configuration

### Monitoring
- **CloudWatch Logs**: Monitor Lambda function execution
- **API Gateway Metrics**: Track API usage and errors
- **DynamoDB Metrics**: Monitor database performance

## 📊 Cost Optimization

- **Lambda**: Pay per request (generous free tier)
- **API Gateway**: Pay per API call
- **DynamoDB**: On-demand pricing for low traffic
- **S3 + CloudFront**: Static hosting costs
- **Estimated Monthly Cost**: $5-15 for typical usage

## 🔒 Security Best Practices

1. **Environment Variables**: Never commit secrets to git
2. **IAM Roles**: Use least privilege principle
3. **API Rate Limiting**: Configure in API Gateway
4. **Input Validation**: Implemented in Lambda function
5. **HTTPS Only**: Enforced by CloudFront

## 📈 Scaling Considerations

- **Lambda**: Auto-scales with traffic
- **DynamoDB**: On-demand scaling enabled
- **CloudFront**: Global CDN for fast delivery
- **API Gateway**: Handles high request volumes

Your Digilink IT Solutions website is now fully configured for AWS Amplify deployment with serverless backend functionality!
