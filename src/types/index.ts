import {z} from 'zod';
import { contactFormSchema } from "@/zod";

export type ContactFormData = z.infer<typeof contactFormSchema>