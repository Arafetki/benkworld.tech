'use client';

import {useForm, SubmitHandler} from 'react-hook-form';
import { zodResolver } from "@hookform/resolvers/zod";
import { contactFormSchema, ContactFormData } from "@/lib/zod";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Icons } from '@/components/icons';
import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { safeAsync } from '@/utils';
import ReCAPTCHA, { ReCAPTCHA as ReCAPTCHA2 } from "react-google-recaptcha";
import { useCallback, useRef } from 'react';
import { env } from '@/env.mjs';
import { ContactFormToEmailAction } from '@/server/actions';
import { useRouter } from 'next/navigation';

export default function ContactForm() {

    const form = useForm({
        resolver: zodResolver(contactFormSchema),
        defaultValues: {
            name: "",
            email: "",
            subject: "",
            message: "",
        }
    })
    const router = useRouter()
    const recaptchaRef = useRef<ReCAPTCHA2>(null);

    const onValidSubmit: SubmitHandler<ContactFormData> = useCallback(async (data) => {
        
        const token = await recaptchaRef.current?.executeAsync()
        if (!token) {
            return form.setError('root',{
                message: "reCAPTCHA verification failed. Please try again.",
            },{shouldFocus: true})
        }
        const [error] = await safeAsync(ContactFormToEmailAction(data,token))
        if (error) {
            router.push("/s/failure")
        }
        router.push("/s/success")
    },[form,router])

    return (
        <Card className='py-8 shadow-xl border-2 rounded-sm'>
            <CardContent>
                <Form {...form}>
                    <form
                        id="contact"
                        className="space-y-5"
                        onSubmit={form.handleSubmit(onValidSubmit)}
                    >
                        <FormField
                            control={form.control}
                            name="name"
                            render={({ field }) => (
                            <FormItem>
                                <FormLabel>Your Name</FormLabel>
                                <FormControl>
                                    <Input
                                        required
                                        placeholder="Your name"
                                        className='rounded-lg border-muted-foreground'
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
                                <FormLabel>Your Email</FormLabel>
                                <FormControl>
                                    <Input
                                        required
                                        type="email"
                                        placeholder="Your email"
                                        className='rounded-lg border-muted-foreground'
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
                                <FormLabel>Subject</FormLabel>
                                <FormControl>
                                    <Input
                                        placeholder="Subject"
                                        className='rounded-lg border-muted-foreground'
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
                                <FormLabel>Your Message</FormLabel>
                                <FormControl>
                                    <Textarea
                                        rows={6}
                                        placeholder="Type your message here."
                                        className='rounded-lg border-muted-foreground'
                                        {...field}
                                    />
                                </FormControl>
                                <FormMessage/>
                            </FormItem>
                            )}
                        />
                        <ReCAPTCHA
                            size="invisible"
                            sitekey={env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}
                            ref={recaptchaRef}
                        />
                    </form>
                </Form>
            </CardContent>
            <CardFooter className='py-0'>
                <Button
                    type="submit"
                    form="contact"
                    disabled={form.formState.isSubmitting}
                    className="w-full"
                >
                    {form.formState.isSubmitting? (<><Icons.reload className='w-[1.1rem] h-[1.1rem] animate-spin mr-2'/> Sending...</>)
                    :<><Icons.send className='size-4 mr-2'/> Send Message</>}
                </Button>
            </CardFooter>
        </Card>
    );
}