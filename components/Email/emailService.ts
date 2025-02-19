import { FormData } from '../types/form';

const SENDGRID_API_KEY = import.meta.env.VITE_SENDGRID_API_KEY;
const TO_EMAIL = import.meta.env.VITE_TO_EMAIL;
const FROM_EMAIL = import.meta.env.VITE_FROM_EMAIL;

export async function sendFormData(formData: FormData): Promise<boolean> {
  try {
    const response = await fetch('https://api.sendgrid.com/v3/mail/send', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${SENDGRID_API_KEY}`,
      },
      body: JSON.stringify({
        personalizations: [
          {
            to: [{ email: TO_EMAIL }],
            subject: 'New Brochure Download Request',
          },
        ],
        from: { email: FROM_EMAIL },
        content: [
          {
            type: 'text/plain',
            value: generateEmailContent(formData),
          },
        ],
      }),
    });

    if (!response.ok) {
      throw new Error('Failed to send email');
    }

    return true;
  } catch (error) {
    console.error('Error sending email:', error);
    return false;
  }
}

export function generateEmailContent(formData: FormData): string {
  return `
    New Brochure Download Request

    Contact Information:
    -------------------
    Name: ${formData.firstName} ${formData.lastName}
    Email: ${formData.email}
    
    Company Details:
    ---------------
    Company: ${formData.companyName}
    Job Title: ${formData.jobTitle}
    Industry: ${formData.industry}
    Country: ${formData.country}
    
    Marketing Consent: ${formData.marketingConsent ? 'Yes' : 'No'}
    
    Submitted on: ${new Date().toLocaleString()}
  `;
}