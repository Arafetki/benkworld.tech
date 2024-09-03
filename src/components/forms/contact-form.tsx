'use client';

import {useForm, SubmitHandler} from 'react-hook-form';
import { zodResolver } from "@hookform/resolvers/zod";
import { contactFormSchema } from "@/lib/schemas/zod";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Icons } from '@/components/icons';
import { SendMessage } from '@/server/actions/send-message';
import { Button } from '@/components/ui/button';
import { useToast } from "@/components/ui/use-toast";
import { ToastAction } from "@/components/ui/toast";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

import type { ContactFormData } from '@/lib/types';

export default function ContactForm() {

    const {toast} = useToast()
    const form = useForm({
        resolver: zodResolver(contactFormSchema),
        defaultValues: {
            name: "",
            email: "",
            subject: "",
            message: "",
        }
    })

    const onSubmit: SubmitHandler<ContactFormData> = async (data) => {
        try {
            const formErrors = await SendMessage(data)
            if (formErrors) {
                formErrors.forEach(errMsg=>{
                    form.setError('root',{
                        message: errMsg
                    })
                })
                return
            }
            toast({
                variant: 'success',
                description: 'Message sent sucessfully!',
            })
        } catch (error) {
            toast({
                variant: 'destructive',
                title: 'Uh oh! Something went wrong.',
                description: 'There was a problem with your request.',
                action: <ToastAction altText="Try again">Try again</ToastAction>
            })
        }
    }

    return (
        <Form {...form}>
            <form
                id="contact-form"
                onSubmit={form.handleSubmit(onSubmit)}
                className="max-w-2xl w-full px-6 py-8 space-y-5 rounded-lg border-2 border-border shadow-xl backdrop-blur-lg"
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
                <Button
                    type="submit"
                    form="contact-form"
                    disabled={form.formState.isSubmitting}
                    className="flex items-center gap-2"
                >
                    <Icons.send className='w-5 h-5'/>
                    <span>{form.formState.isSubmitting? "Sending...": "Send Message"}</span>
                </Button>
            </form>
        </Form>
    );
}