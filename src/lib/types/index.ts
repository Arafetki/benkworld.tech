import {z} from 'zod';
import { contactFormSchema } from "@/lib/schemas/zod";

export type SiteConfig = {
    title: string
    description: string
    url: string
    emailAdresses: string[]
}

export type ContactFormData = z.infer<typeof contactFormSchema>