# Digilink IT Solutions Website

A professional AI-themed website for Digilink IT Solutions with integrated contact form, AWS DynamoDB storage, and email notifications.

## 🚀 Features

- **Professional AI-themed design** with neural network animations
- **Responsive layout** optimized for all devices
- **Contact form** with real-time validation
- **AWS DynamoDB integration** for data storage
- **Email notifications** via Resend API
- **Smooth scroll navigation** between sections
- **WhatsApp integration** for instant messaging
- **Clickable email links** for direct contact

## 🛠 Technology Stack

- **Framework**: Next.js 14 with Pages Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **UI Components**: shadcn/ui
- **Database**: AWS DynamoDB
- **Email Service**: Resend
- **Hosting**: AWS Amplify + Route53
- **Authentication**: AWS IAM

## 📁 Project Structure

\`\`\`
├── pages/
│   ├── api/send-email.ts        # Contact form API endpoint
│   ├── _app.tsx                 # App wrapper with providers
│   ├── _document.tsx            # HTML document structure
│   └── index.tsx                # Main homepage
├── styles/
│   └── globals.css              # Global styles and AI theme
├── components/
│   ├── header.tsx               # Navigation with logo
│   ├── hero-section.tsx         # Hero with CTA buttons
│   ├── services-section.tsx     # Services showcase
│   ├── about-section.tsx        # Company information
│   ├── contact-section.tsx      # Contact form
│   └── footer.tsx               # Footer with social links
├── lib/
│   └── aws-config.ts            # AWS DynamoDB configuration
├── amplify/
│   └── functions/send-email/    # Lambda function for email
├── public/images/
│   └── fulllogo.png             # Company logo
└── README.md                    # This documentation
\`\`\`

## 🔧 Environment Variables

Create `.env.local` for local development:

\`\`\`env
# AWS DynamoDB Configuration
AWS_REGION=us-east-1
AWS_ACCESS_KEY_ID=your_access_key
AWS_SECRET_ACCESS_KEY=your_secret_key
AWS_DYNAMODB_TABLE_NAME=digilink-contact-submissions

# Email Notifications
RESEND_API_KEY=re_your_resend_api_key
\`\`\`

For production (AWS Amplify), add these same variables in the Amplify Console under **App Settings > Environment Variables**.

## 🗄 AWS Setup

### 1. DynamoDB Table
\`\`\`bash
Table Name: digilink-contact-submissions
Partition Key: id (String)
Region: us-east-1
\`\`\`

### 2. IAM User Permissions
Create IAM user with these policies:
- `AmazonDynamoDBFullAccess`
- `AmazonDynamoDBReadOnlyAccess`

### 3. Amplify Environment Variables
1. Go to AWS Amplify Console
2. Select your app → **App Settings** → **Environment Variables**
3. Add all environment variables listed above

## 📧 Email Integration

### Resend Setup
1. Sign up at [resend.com](https://resend.com)
2. Create API key in dashboard
3. Add `RESEND_API_KEY` to environment variables
4. Email notifications sent to: `apmkhwanazi@gmail.com`

### Email Features
- Instant notifications on form submission
- Detailed submission information
- Graceful error handling
- Fallback to DynamoDB storage if email fails

## 🚀 Local Development

\`\`\`bash
# Install dependencies
npm install

# Start development server
npm run dev

# Open browser
http://localhost:3000
\`\`\`

### Testing Contact Form
1. Fill out contact form
2. Check terminal for debug logs
3. Verify email notification received
4. Check DynamoDB table for stored data

## 📱 Interactive Features

### Navigation
- **"Discover Our Services"** → Scrolls to services section
- **"Get Free Consultation"** → Scrolls to contact form

### Contact Methods
- **Email**: `info@digilinkict.co.za` → Opens email client
- **Phone**: `+27 (0) 11 234 5678` → Opens WhatsApp
- **Contact Form** → Saves to database + sends email

## 🎨 Design System

### Colors
- **Primary**: Professional blue (`hsl(210 100% 50%)`)
- **Background**: Warm off-white (`oklch(98% 0.02 45)`)
- **Accent**: Neural blue (`hsl(220 100% 60%)`)
- **Text**: High contrast grays

### Typography
- **Headings**: Geist Sans (multiple weights)
- **Body**: Geist Sans (regular)
- **Code**: Geist Mono

### Animations
- Neural network patterns
- Floating circuit elements
- Smooth hover transitions
- Glow effects on interactive elements

## 🔍 Monitoring & Analytics

### Form Submissions
- **Storage**: AWS DynamoDB table
- **Notifications**: Email via Resend
- **Logging**: Console debug logs
- **Validation**: Client & server-side

### Performance
- Next.js Image optimization
- Tailwind CSS purging
- Component lazy loading
- Responsive images

## 🚀 Deployment

### AWS Amplify
1. Connect GitHub repository
2. Configure build settings
3. Add environment variables
4. Deploy automatically on push

### Domain Setup
- **Primary**: Route53 DNS management
- **SSL**: Automatic via Amplify
- **CDN**: CloudFront distribution

## 🛡 Security

- **Environment variables** for sensitive data
- **Server-side validation** on all inputs
- **AWS IAM** for database access
- **HTTPS** enforced in production
- **Input sanitization** on form submissions

## 📞 Support

For technical support or modifications:
- **Email**: apmkhwanazi@gmail.com
- **Company**: Digilink IT Solutions
- **Slogan**: "Connecting You to the Digital World"

---

**Last Updated**: January 2025  
**Version**: 1.0.0  
**Status**: Production Ready ✅
