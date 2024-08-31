'use client';

import {useForm,SubmitHandler} from 'react-hook-form';
import { zodResolver } from "@hookform/resolvers/zod";
import { contactFormSchema } from "@/schemas/zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useToast } from "@/components/ui/use-toast";
import {ToastAction} from '@/components/ui/toast';
import type { ContactFormData } from "@/types";


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
            await new Promise(resolve=>setTimeout(resolve,2000))
            throw new Error()
            console.log(data)
        } catch (err) {
            if (err instanceof Error) {
                console.error(err)
                toast({
                    variant: "destructive",
                    title: "Uh oh! Something went wrong.",
                    description: "There was a problem with your request.",
                    action: <ToastAction altText="Try again">Try again</ToastAction>,                
                })
            }
        }
    }

    return (
        <Form {...form}>
        <form
            id="contact-form"
            onSubmit={form.handleSubmit(onSubmit)}
            className="max-w-lg px-6 py-8 space-y-6 rounded-lg border border-border/30 shadow-xl bg-card/5 backdrop-blur-lg"
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
                <FormMessage />
                </FormItem>
            )}
            />
            <Button
            disabled={form.formState.isSubmitting}
            type="submit"
            form="contact-form"
            >
            {form.formState.isSubmitting ? "Sending..." : "Send Message"}
            </Button>
        </form>
        </Form>
    );
}