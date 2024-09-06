import { Metadata } from "next";
import ContactForm from "@/components/forms/contact-form";

export const metadata: Metadata = {
    title: "Contact me"
}

export default function Contact() {
    return (
        <div className="flex justify-center py-8">
            <div className="inline-block space-y-10">
                <h1 className="text-4xl font-semibold">Contact Me</h1>
                <p 
                    className="max-w-2xl text-sm text-muted-foreground break-words leading-relaxed"
                >
                    I&apos;m always interested in talking to new people or existing contacts. 
                    If you have a question, want to provide feedback or have a business opportunity to discuss then please use the form below. 
                    Include as much information as possible, and I&apos;ll get back to you as soon as I can.
                </p>
                <ContactForm/>
            </div>
        </div>
    )
}