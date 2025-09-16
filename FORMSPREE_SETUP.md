# Formspree Setup Instructions

## Quick Setup Steps:

1. **Sign up at [formspree.io](https://formspree.io)**
2. **Create a new form** named "Digilink IT Contact Form"
3. **Copy your form ID** (looks like `xpznvqko`)
4. **Update the contact form:**
   - Open `components/contact-section.tsx`
   - Replace `YOUR_FORM_ID` with your actual form ID
   - The URL should look like: `https://formspree.io/f/xpznvqko`

## After Setup:
- Deploy to AWS Amplify as a static site
- Test the contact form
- Check your email for submissions
- Monitor submissions in Formspree dashboard

## Free Tier Limits:
- 50 submissions per month
- Email notifications included
- Form spam protection
- Submission management dashboard
