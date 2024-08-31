'use client';

import {useForm} from 'react-hook-form';
import { useFormState } from 'react-dom';
import { zodResolver } from "@hookform/resolvers/zod";
import { contactFormSchema } from "@/schemas/zod";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { SubmitButton } from '@/components/submit-button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Icons } from '@/components/icons';
import { SendMessage } from '@/app/actions/send-message';
import { useToastMessage } from '@/hooks/useToastMessage';

export default function ContactForm() {

    const [formState,formAction] = useFormState(SendMessage,{success: false})

    const form = useForm({
        mode: 'all',
        resolver: zodResolver(contactFormSchema),
        defaultValues: {
            name: "",
            email: "",
            subject: "",
            message: "",
        }
    })

    useToastMessage(formState)

    return (
        <Form {...form}>
            <form
                id="contact-form"
                action={formAction}
                className="max-w-2xl w-full px-6 py-8 space-y-6 rounded-lg border-2 border-border shadow-xl bg-card/5 backdrop-blur-lg"
            >
                <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                        <FormItem>
                        <FormLabel className="text-base font-medium text-foreground">Your Name</FormLabel>
                        <FormControl>
                            <Input
                            required
                            placeholder="Your name"
                            {...field}
                            />
                        </FormControl>
                        <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                        <FormItem>
                        <FormLabel className="text-base font-medium text-foreground">Your Email</FormLabel>
                        <FormControl>
                            <Input
                            required
                            type="email"
                            placeholder="Your email"
                            {...field}
                            />
                        </FormControl>
                        <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="subject"
                    render={({ field }) => (
                        <FormItem>
                        <FormLabel className="text-base font-medium text-foreground">Subject</FormLabel>
                        <FormControl>
                            <Input
                            placeholder="Subject"
                            {...field}
                            />
                        </FormControl>
                        <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                        <FormItem>
                        <FormLabel className="text-base font-medium text-foreground">Your Message</FormLabel>
                        <FormControl>
                            <Textarea
                            rows={5}
                            placeholder="Type your message here."
                            {...field}
                            />
                        </FormControl>
                        <FormMessage/>
                        </FormItem>
                    )}
                />
                <SubmitButton 
                    formId="contact-form"
                    label='Send Message'
                    pendingLabel='Sending...'
                    formIsValid={form.formState.isValid}
                    startContent={<Icons.send  className='w-4 h-4'/>}
                />
            </form>
        </Form>
    );
}