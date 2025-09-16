# AWS Amplify Deployment Guide

## Overview
This Next.js application is configured for static export and can be deployed to AWS Amplify without SSR issues.

## Prerequisites
1. AWS Account with Amplify access
2. GitHub repository with your code
3. Formspree account for contact form handling

## Setup Steps

### 1. Contact Form Configuration
The contact form uses Formspree for static hosting compatibility:
1. Sign up at [formspree.io](https://formspree.io)
2. Create a new form and get your form ID
3. Replace `YOUR_FORM_ID` in `components/contact-section.tsx` with your actual form ID

### 2. AWS Amplify Deployment
1. Go to AWS Amplify Console
2. Click "New app" → "Host web app"
3. Connect your GitHub repository
4. Configure build settings:
   \`\`\`yaml
   version: 1
   frontend:
     phases:
       preBuild:
         commands:
           - npm ci
       build:
         commands:
           - npm run build
     artifacts:
       baseDirectory: out
       files:
         - '**/*'
     cache:
       paths:
         - node_modules/**/*
   \`\`\`

### 3. Environment Variables (Optional)
If you want to keep AWS integration for future server-side features:
- `AWS_REGION`
- `AWS_ACCESS_KEY_ID` 
- `AWS_SECRET_ACCESS_KEY`
- `AWS_DYNAMODB_TABLE_NAME`
- `RESEND_API_KEY`

### 4. Custom Domain (Optional)
1. In Amplify console, go to "Domain management"
2. Add your custom domain
3. Configure DNS settings as instructed

## Build Configuration
The app uses static export with these settings:
- `output: 'export'` - Generates static files
- `trailingSlash: true` - Ensures proper routing
- `images.unoptimized: true` - Required for static export
- `distDir: 'out'` - Output directory for static files

## Contact Form Alternatives
If you prefer other static form solutions:
- **Netlify Forms** (if using Netlify)
- **Getform.io**
- **FormKeep**
- **EmailJS** (client-side email sending)

## Troubleshooting
- Ensure all pages are statically exportable
- Check that no server-side features are used
- Verify build completes successfully locally with `npm run build`
