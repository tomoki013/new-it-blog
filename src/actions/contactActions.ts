'use server';

import { z } from 'zod';
// Resendはダミーなので、実際の送信処理はコメントアウトします
// import { Resend } from 'resend';

// const resend = new Resend(process.env.RESEND_API_KEY);

const contactSchema = z.object({
  name: z.string().min(1, 'Name is required'),
  email: z.string().email('Invalid email address'),
  subject: z.string().optional(),
  message: z.string().min(1, 'Message is required'),
});

export type FormState = {
  message: string;
  success: boolean;
  errors?: {
    name?: string[];
    email?: string[];
    subject?: string[];
    message?: string[];
  };
};

export async function submitContactForm(
  prevState: FormState,
  formData: FormData
): Promise<FormState> {
  const validatedFields = contactSchema.safeParse({
    name: formData.get('name'),
    email: formData.get('email'),
    subject: formData.get('subject'),
    message: formData.get('message'),
  });

  if (!validatedFields.success) {
    const errorMap = validatedFields.error.flatten().fieldErrors;
    return {
      message: 'Validation failed. Please check your inputs.',
      success: false,
      errors: {
        name: errorMap.name,
        email: errorMap.email,
        subject: errorMap.subject,
        message: errorMap.message,
      },
    };
  }

  const { name, email, subject, message } = validatedFields.data;

  try {
    // console.log('Sending email with Resend...');
    // await resend.emails.send({
    //   from: 'onboarding@resend.dev',
    //   to: 'your-email@example.com', // Replace with your actual email
    //   subject: `New Contact Form Submission: ${subject || '(No Subject)'}`,
    //   html: `<p>Name: ${name}</p><p>Email: ${email}</p><p>Message: ${message}</p>`,
    // });

    console.log("Form data is valid:", { name, email, subject, message });
    // Simulate a delay
    await new Promise(resolve => setTimeout(resolve, 1500));

    return {
      message: 'Your message has been sent successfully!',
      success: true,
    };
  } catch (error) {
    console.error('Error sending email:', error);
    return {
      message: 'An unexpected error occurred. Please try again later.',
      success: false,
    };
  }
}
