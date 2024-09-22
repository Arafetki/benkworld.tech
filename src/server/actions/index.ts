'use server';

import { contactFormSchema, ContactFormData } from '@/lib/zod';
import { env } from '@/env.mjs';
import { retryFetch } from '@/utils';

export async function ContactFormToEmailAction(data: ContactFormData, captchaToken: string) {

  const parsed = contactFormSchema.parse(data)

  try {
    const verifyCaptchtaResponse = await retryFetch(`https://www.google.com/recaptcha/api/siteverify?secret=${env.RECAPTCHA_SECRET_KEY}&response=${captchaToken}`,
      {
        method:"POST",
      }
    )
    const verifyCaptchtaResponseBody = await verifyCaptchtaResponse.json()
    if (!verifyCaptchtaResponseBody.success) throw new Error("reCAPTCHA verification failed.")
  } catch (error) {
    throw new Error("Verify reCAPTCHA request failed")
  }

  try {
    const formToEmailResponse = await retryFetch(`https://www.form-to-email.com/api/s/${env.FORM_TO_EMAIL_ID}`,{
      method: "POST",
      headers: {
      "Content-Type": "application/json",
      },
      body: JSON.stringify(parsed),
    })

    if (!formToEmailResponse.ok) {
      const errorBody = await formToEmailResponse.text()
      throw new Error(`Failed to send the email. Status: ${formToEmailResponse.status}, Response: ${errorBody}`)
    }
  } catch (error) {
    throw new Error("Form to email request failed");
  }

}