import {z} from 'zod';
import { contactFormSchema } from "@/schemas/zod";

export type SiteConfig = {
    title: string
    description: string
    url: string
}

export type ContactFormData = z.infer<typeof contactFormSchema>