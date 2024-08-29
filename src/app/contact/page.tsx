import ContactForm from "@/components/forms/contact";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Contact Me | Benk World"
}

export default function ContactPage() {
    return (
        <section className="grow py-10 flex items-center">
            <div className="container flex justify-center items-center">
                <ContactForm formId="contact-form"/>
            </div>
        </section>
    )
}