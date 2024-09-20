'use server';

import { contactFormSchema, ContactFormData } from '@/lib/zod';
import { env } from '@/env.mjs';


export async function ContactFormToEmailAction(data: ContactFormData) {

  const parsed = contactFormSchema.parse(data)
  const {captchaToken,...formDate} = parsed

  const verifyCaptchtaResponse = await ( await fetch(`https://www.google.com/recaptcha/api/siteverify?secret=${env.RECAPTCHA_SECRET_KEY}&response=${captchaToken}`,
    {
      method:"POST"
    }
  )).json()
  if (!verifyCaptchtaResponse.success) throw new Error("reCAPTCHA verification failed.")

  const formToEmailResponse = await fetch("https://www.form-to-email.com/api/s/azFrkIqvp-B3",{
    method: "POST",
    headers: {
    "Content-Type": "application/json",
    },
    body: JSON.stringify(formDate)
  })

  if (!formToEmailResponse.ok) throw new Error("failed to send the email.")

}