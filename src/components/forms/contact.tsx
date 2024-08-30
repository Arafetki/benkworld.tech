'use client';

import { useIsMounted } from "@/hooks/useIsMounted";
import {useForm,SubmitHandler} from 'react-hook-form';
import { zodResolver } from "@hookform/resolvers/zod";
import type { ContactFormData } from "@/types";
import { contactFormSchema } from "@/schemas/zod";
import { useToast } from "@/components/ui/use-toast"
import { ToastAction } from "@/components/ui/toast"

export default function ContactForm({formId}:{formId: string}) {

    const mounted = useIsMounted()
    const {toast} = useToast()
    
    const {
        register,
        handleSubmit,
        formState: {errors, isSubmitting}
    } = useForm({
        resolver: zodResolver(contactFormSchema),
        defaultValues: {
            name: "",
            email: "",
            subject: "",
            message: "",
        }
    })

    const onSubmit: SubmitHandler<ContactFormData> = async (data) => {
        console.log(data)
    }

    if (!mounted) return null;

    return (
        <div>Contact Form</div>
    );
}