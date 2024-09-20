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
import { useToast } from '@/components/ui/use-toast';
import { ToastAction } from "@/components/ui/toast";
import ReCAPTCHA, { ReCAPTCHA as ReCAPTCHA2 } from "react-google-recaptcha";
import { useCallback, useRef } from 'react';
import { env } from '@/env.mjs';
import { ContactFormToEmailAction } from '@/server/actions';


export default function ContactForm() {

    const form = useForm({
        resolver: zodResolver(contactFormSchema),
        defaultValues: {
            name: "",
            email: "",
            subject: "",
            message: "",
            captchaToken: "",
        }
    })

    const {toast} = useToast()
    const recaptchaRef = useRef<ReCAPTCHA2>(null);

    const onCaptchaChange = useCallback((token: string | null)=>{
        if (token) {
            form.setValue("captchaToken",token)
        }
    },[form])

    const onValidSubmit: SubmitHandler<ContactFormData> = async (data) => {

        const [_,error] = await safeAsync(ContactFormToEmailAction(data))

        if (error) {
            console.error(error)
            return toast({
                variant: "destructive",
                title: "Uh oh! Something went wrong.",
                description: error?.message || "There was a problem with your request.",
                action: <ToastAction altText="Try again">Try again</ToastAction>,
            })
        }

        toast({
            variant: "success",
            description: "Your message has been sent.",
        })
        recaptchaRef?.current?.reset();
        form.setValue("captchaToken","")
    }

    return (
        <Card className='max-w-3xl w-full py-5 shadow-xl rounded-lg'>
            <CardContent>
                <Form {...form}>
                    <form
                        id="contact"
                        className="space-y-6"
                        onSubmit={form.handleSubmit(onValidSubmit)}
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
                        <ReCAPTCHA
                            size="normal"
                            sitekey={env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}
                            onChange={onCaptchaChange}
                            ref={recaptchaRef}
                            className='transform scale-[0.8] md:scale-100 origin-top-left w-0'
                        />
                        {form.formState.errors.captchaToken && <span className='text-xs text-red-500'>{form.formState.errors.captchaToken.message}</span> }
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
                    :<><Icons.send className='w-[1.1rem] h-[1.1rem] mr-2'/> Send Message</>}
                </Button>
            </CardFooter>
        </Card>
    );
}