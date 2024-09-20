import { Metadata } from "next";
import ContactForm from "@/components/forms/contact-form";

export const metadata: Metadata = {
    title: "Contact me"
}

export default function Contact() {
    return (
        <div className="flex justify-center p-6 lg:py-10">
            <div className="inline-block space-y-5 prose dark:prose-invert">
                <h1 className="text-4xl">Contact Me</h1>
                <p className="max-w-3xl text-sm sm:text-base text-muted-foreground break-words tracking-tight">
                    I always welcome the opportunity to connect with new people and stay in touch with existing contacts. 
                    Whether you have a question, feedback, or a business opportunity to explore, feel free to reach out using the form below.
                </p>
                <ContactForm/>
            </div>
        </div>
    )
}