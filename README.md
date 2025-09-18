# 🌐 Digilink IT Solutions Website

Official website for **Digilink IT Solutions**, a managed IT services provider.  
The site is built with **Next.js** and deployed on **AWS Amplify**, integrating **Lambda**, **API Gateway**, and **Resend** to provide a modern, secure, and automated contact workflow.

---

## 🚀 Tech Stack

- **Frontend Framework**: [Next.js](https://nextjs.org/) (React + App Router)
- **UI Components**: [shadcn/ui](https://ui.shadcn.com/), [Tailwind CSS](https://tailwindcss.com/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Forms & Email Delivery**: [Resend](https://resend.com/)
- **Hosting & CI/CD**: [AWS Amplify](https://aws.amazon.com/amplify/)
- **Serverless Backend**:
  - **AWS Lambda** → Handles backend logic
  - **Amazon API Gateway** → Exposes secure REST API endpoints
- **Secrets Management**: AWS SSM Parameter Store
- **Version Control**: GitHub (Amplify auto-deploy on `main` branch)

---

## 📦 Features

- ✅ Responsive modern UI (mobile + desktop)
- ✅ Hero section with call-to-action buttons
- ✅ Services, About, and Contact sections
- ✅ Contact form integrated with **AWS Lambda + API Gateway + Resend**
- ✅ Secure secrets management with **SSM Parameter Store**
- ✅ Fully automated CI/CD via **AWS Amplify**
- ✅ Dark mode & light mode support

---

## 📂 Project Structure

\`\`\`bash
Digilink-Website/
├── app/                         # Next.js App Router pages
│   ├── page.tsx                 # Homepage
│   ├── services/                # Services page
│   ├── contact/                 # Contact page
│   └── api/
│       └── sendContactEmail.ts  # API route (calls API Gateway/Lambda)
├── components/                  # Reusable UI components
│   ├── ui/                      # shadcn/ui components
│   ├── Hero.tsx                 # Hero section
│   └── Header.tsx               # Navigation header
├── public/                      # Static assets (logo, images, icons)
├── styles/                      # Global styles
├── package.json
└── README.md
\`\`\`

---

## ⚙️ Setup & Installation

### Clone the repo
\`\`\`bash
git clone git@github.com:Albert3059/Digilink-Website.git
cd Digilink-Website
\`\`\`

### Install dependencies
\`\`\`bash
npm install
\`\`\`

### Set up environment variables
Create a `.env.local` file:
\`\`\`bash
RESEND_API_KEY=your_resend_api_key
CONTACT_FORM_TO=your_email@domain.com
API_GATEWAY_URL=https://your-api-gateway-id.execute-api.region.amazonaws.com/prod/sendContact
\`\`\`

### Run locally
\`\`\`bash
npm run dev
\`\`\`
Then open 👉 http://localhost:3000

---

## ☁️ Deployment (AWS Amplify + Lambda + API Gateway)

1. Push changes to GitHub (`main` branch).

2. Amplify automatically:
   - Clones repo & installs dependencies
   - Builds Next.js frontend
   - Deploys to global CDN

3. Contact form flow:
   - Frontend calls API Gateway endpoint
   - API Gateway triggers Lambda function
   - Lambda uses Resend API to send email
   - Success/error response returned to frontend

---

## 🔐 Environment Variables

| Variable | Purpose |
|----------|---------|
| `RESEND_API_KEY` | API key for Resend email delivery |
| `CONTACT_FORM_TO` | Email address that receives contact form data |
| `API_GATEWAY_URL` | API Gateway endpoint for the Lambda function |

---

## 📬 Contact Form Workflow

1. User submits the form on the website.
2. Next.js frontend sends a request to API Gateway (`API_GATEWAY_URL`).
3. API Gateway invokes AWS Lambda.
4. Lambda calls Resend API to deliver the email.
5. Lambda returns a success/error response → displayed on frontend.

---

## 🛠️ Development Notes

- **Frontend**: Next.js App Router + shadcn/ui + Tailwind CSS
- **Backend**: AWS Lambda (Node.js runtime) + API Gateway
- **Email Service**: Resend
- **Hosting**: AWS Amplify (CI/CD connected to GitHub)
- **Secrets**: AWS SSM Parameter Store for production

---

## 📄 License

This project is private and proprietary to Digilink IT Solutions.  
All rights reserved © 2025 Digilink IT Solutions.
