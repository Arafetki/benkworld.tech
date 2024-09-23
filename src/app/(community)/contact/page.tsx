import { Metadata } from "next";
import ContactForm from "@/components/forms/contact-form";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
    title: "Contact me"
}

export default function Contact() {
    return (
        <div className="flex justify-center p-6 lg:py-12">
            <section className="max-w-2xl w-full space-y-8">
                <h1 className="font-bold text-4xl sm:text-5xl tracking-wide">Get In Touch</h1>
                <p className="max-w-2xl text-muted-foreground text-sm sm:text-base tracking-tight">
                If you&apos;ve got any questions, suggestions, or would like to discuss a project then please email me <a href={`mailto:${siteConfig.emailAdresse}`} className="text-primary hover:underline">{siteConfig.emailAdresse}</a> or get in touch using the form below. I&apos;d be happy to hear from you.
                </p>
                <ContactForm/>
            </section>
        </div>
    )
}