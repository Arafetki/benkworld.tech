import { Metadata } from "next";
import ContactForm from "@/components/forms/contact-form";
import { Icons } from "@/components/icons";
import { SocialMedia } from "@/components/social-media";

export const metadata: Metadata = {
    title: "Contact me"
}

export default function Contact() {
    return (
        <div className="flex flex-col sm:flex-row gap-10 sm:gap-14- p-6 lg:py-12">
            <section className="max-w-2xl w-full space-y-8">
                <h1 className="text-4xl sm:text-5xl font- font-extrabold">Get In Touch</h1>
                {/* <p className="max-w-2xl text-sm sm:text-base tracking-tight">
                    I always welcome the opportunity to connect with new people and stay in touch with existing contacts. 
                    Whether you have a question, feedback, or a business opportunity to explore, feel free to reach out using the form below.
                </p> */}
                <ContactForm/>
            </section>
            <section className="grow flex flex-col items-center">
            </section>
        </div>
    )
}