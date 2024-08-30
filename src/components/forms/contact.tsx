'use client';

import { Card, CardHeader, CardBody, CardFooter, Button, Input, Textarea, Spinner } from "@nextui-org/react";
import { useIsMounted } from "@/hooks/useIsMounted";
import {useForm,SubmitHandler} from 'react-hook-form';
import { zodResolver } from "@hookform/resolvers/zod";
import type { ContactFormData } from "@/types";
import { contactFormSchema } from "@/zod";
import { useToast } from "@/components/ui/use-toast"
import { ToastAction } from "@/components/ui/toast"
import { wait } from "@/lib/utils";

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
        try {
            await wait(2000);
            console.log(data);
            throw new Error()
            toast({
                description: "Message sent successfully!",
                variant: 'success'
            })
        } catch (err) {
            if (err instanceof Error) {
                toast({
                    title: "Uh oh! Something went wrong.",
                    description: "There was a problem with your request",
                    variant: 'destructive',
                    action: <ToastAction altText="Try again">Try again</ToastAction>,
                })
            }
        }
    }

    if (!mounted) return <Spinner color="default" size="lg"/>;

    return (
        <Card 
            className="w-full max-w-xl px-4 py-6 sm:px-6 sm:py-8 bg-card/10" 
            shadow='lg'
            radius="sm"
        >
            <CardHeader>
                <h1 className="font-bold text-2xl sm:text-3xl text-card-foreground">Get In Touch</h1>
            </CardHeader>
            <CardBody>
                <form
                    id={formId}
                    onSubmit={handleSubmit(onSubmit)}
                    className="space-y-4"
                >
                    <Input
                        {...register('name')}
                        label='Your Name'
                        radius="sm"
                        variant="bordered"
                        isClearable
                        isRequired
                        isInvalid={!!errors.name}
                        errorMessage={errors.name?.message}
                    />
                    <Input
                        {...register('email')}
                        label='Your Email'
                        type="email"
                        radius="sm"
                        variant="bordered"
                        isClearable
                        isRequired
                        isInvalid={!!errors.email}
                        errorMessage={errors.email?.message}
                    />
                    <Input
                        {...register('subject')}
                        label='Subject'
                        radius="sm"
                        variant="bordered"
                        isClearable
                        isInvalid={!!errors.subject}
                        errorMessage={errors.subject?.message}
                    />
                    <Textarea
                        {...register('message')}
                        placeholder="Your message..."
                        variant="bordered"
                        radius="sm"
                        isRequired
                        minRows={5}
                        maxRows={8}
                        isInvalid={!!errors.message}
                        errorMessage={errors.message?.message}
                    />
                </form>
            </CardBody>
            <CardFooter>
                <Button 
                    type="submit" 
                    form={formId}
                    color="primary"
                    radius="sm"
                    disabled={isSubmitting}
                >
                    {isSubmitting? 'Sending...': 'Send Message'}
                </Button>
            </CardFooter>
        </Card>
    );
}