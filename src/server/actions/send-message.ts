'use server';

import { Resend} from 'resend';
import { ContactEmailTemplate } from '@/components/templates/contact-email';
import { contactFormSchema } from '@/lib/schemas/zod';
import { siteConfig } from '@/config/site';
import { env } from '@/env.mjs';

import type { ContactFormData } from '@/lib/types';

const resend = new Resend(env.RESEND_API_KEY);

export async function SendMessage(data: ContactFormData) {

    const parsed = contactFormSchema.safeParse(data)
    if (!parsed.success) {
      return parsed.error.flatten().formErrors
    }

    const {name,subject,message} = parsed.data

    const {error} = await resend.emails.send({
      from: 'Benk Techworld <onboarding@resend.dev>',
      to: siteConfig.emailAdresses,
      subject: subject || 'Contact me form',
      react: ContactEmailTemplate({name: name, message: message})
    })

    if (error) {
      throw new Error(error.message)
    }

    return null
}