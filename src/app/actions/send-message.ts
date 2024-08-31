'use server';

import { Resend} from 'resend';
import { ContactEmailTemplate } from '@/components/templates/contact-email';
import { contactFormSchema } from '@/schemas/zod';
import { siteConfig } from '@/config/site';

const resend = new Resend(process.env.RESEND_API_KEY);

export type FormState = {
  success: boolean
  error: Error | null
}

export async function SendMessage(prevState: FormState , payload: FormData): Promise<FormState> {

    const formData = Object.fromEntries(payload)
    const parsed = contactFormSchema.safeParse(formData)

    if (!parsed.success) {
      return {success: false, error: new Error("Validation error")}
    }

    const {name,subject,message} = parsed.data

    try {

      const {error} = await resend.emails.send({
        from: 'Benk Techworld <onboarding@resend.dev>',
        to: siteConfig.emails,
        subject: subject || 'Contact Me Form',
        react: ContactEmailTemplate({name: name, message: message})
      });


      return {success: !error, error: error}

    } catch (error) {

      if (error instanceof Error) return {success: false, error}
      return {success: false, error: new Error("An unkown error occured")}
    }

}