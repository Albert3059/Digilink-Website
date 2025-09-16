/* Amplify Params - DO NOT EDIT
	ENV
	REGION
	RESEND_API_KEY
Amplify Params - DO NOT EDIT */

const { Resend } = require('resend');

const resend = new Resend(process.env.RESEND_API_KEY);

/**
 * @type {import('@types/aws-lambda').APIGatewayProxyHandler}
 */
exports.handler = async (event) => {
    try {
        // Parse body if coming from API Gateway (POST request)
        const body = event.body ? JSON.parse(event.body) : {};

        const { to, subject, html } = body;

        if (!to || !subject || !html) {
            return {
                statusCode: 400,
                body: JSON.stringify({ error: 'Missing to, subject, or html in request body' }),
            };
        }

        // Send email using Resend
        const response = await resend.emails.send({
            from: 'info@digilinkict.co.za', // replace with your verified sender
            to,
            subject,
            html,
        });

        console.log('Email sent:', response);

        return {
            statusCode: 200,
            body: JSON.stringify({ message: 'Email sent successfully', response }),
        };
    } catch (error) {
        console.error('Error sending email:', error);
        return {
            statusCode: 500,
            body: JSON.stringify({ error: 'Failed to send email', details: error.message }),
        };
    }
};
