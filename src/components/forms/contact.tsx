'use client';

import { Card, CardHeader, CardBody, CardFooter, Button, Input, Textarea } from "@nextui-org/react";
import { useIsMounted } from "@/hooks/useIsMounted";
import {useForm,SubmitHandler} from 'react-hook-form';
import { zodResolver } from "@hookform/resolvers/zod";
import type { ContactFormData } from "@/types";
import { contactFormSchema } from "@/zod";

export default function ContactForm({formId}:{formId: string}) {

    const mounted = useIsMounted()
    const {
        register,
        handleSubmit,
        formState: {errors}
    } = useForm({
        resolver: zodResolver(contactFormSchema),
        defaultValues: {
            name: "",
            email: "",
            subject: "",
            message: "",
        }
    })

    const onSubmit: SubmitHandler<ContactFormData> = (data) => {
        console.log(data);
    }

    if (!mounted) return null;

    return (
        <Card 
            className="w-full max-w-xl px-4 py-6 sm:px-6 sm:py-8 bg-foreground-50/50" 
            shadow='lg'
            radius="sm"
        >
            <CardHeader>
                <h1 className="font-bold text-2xl sm:text-3xl">Get In Touch</h1>
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
                        isInvalid={errors.name? true: false}
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
                        isInvalid={errors.email? true: false}
                        errorMessage={errors.email?.message}                        
                    />
                    <Input
                        {...register('subject')}
                        label='Subject'
                        radius="sm"
                        variant="bordered"
                        isClearable
                        isInvalid={errors.subject? true: false}
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
                        isInvalid={errors.message? true: false}
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
                >
                    Send Message
                </Button>                
            </CardFooter>
        </Card>
    );
}