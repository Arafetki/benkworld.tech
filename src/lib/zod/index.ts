import {z} from 'zod';

export const contactFormSchema = z.object({
  name: z.string().min(1, "Name is required."),
  email: z.string().email("Invalid email address"),
  subject: z.string().min(1,"Subject is required."),
  message: z.string().min(1, "Message is required.").max(1000,"Message cannot exceed 1000 characters."),
});

export type ContactFormData = z.infer<typeof contactFormSchema>;

export const filtersSchema = z.object({
  page: z.coerce.number().gt(0,"page must be greater than zero").lte(1000,"page must be a maximum of 1 thousand").optional(),
  page_size: z.coerce.number().gt(0,"page_size must be greater than zero").lte(100,"page_size must be a maximum of 100").optional(),
  sort: z.enum(["id","created","updated","-id","-created","-updated"],{invalid_type_error: "invalid sort value"}).optional(),
});