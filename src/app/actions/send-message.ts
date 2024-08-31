'use server';

import { Resend} from 'resend';
import { ContactEmailTemplate } from '@/components/templates/contact-email';
import { contactFormSchema } from '@/schemas/zod';
import { siteConfig } from '@/config/site';

const resend = new Resend(process.env.RESEND_API_KEY);

export type FormState = {
  success: boolean
  error: {message: string} | null
}

export async function SendMessage(prevState: FormState , payload: FormData): Promise<FormState> {

    const formData = Object.fromEntries(payload)
    const parsed = contactFormSchema.safeParse(formData)

    if (!parsed.success) {
      return {success: false, error: {message: "validation error"}}
    }

    const {name,subject,message} = parsed.data

    try {

      const {error} = await resend.emails.send({
        from: 'Benk Techworld <onboarding@resend.dev>',
        to: siteConfig.emails,
        subject: subject || 'Contact Me Form',
        react: ContactEmailTemplate({name: name, message: message})
      });


      return {success: !error, error: error && {message: error.message} }

    } catch (error) {

      if (error instanceof Error) return {success: false, error: {message: error.message}}
      return {success: false, error: {message: "an unkown error occured!"}}
    }

}