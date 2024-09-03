import {z} from 'zod';
import { contactFormSchema } from "@/lib/schemas/zod";

export type SiteConfig = {
    title: string
    description: string
    url: string
    emailAdresses: string[]
}

export type NavItem = {
    name: string
    href: string
}

export type MobileMenuContextState = {
    isMobileMenuOpen: boolean
    setTrue: () => void
    setFalse: () => void
    toggle: ()=>void    
}

export type ContactFormData = z.infer<typeof contactFormSchema>

export type MobileMenuStore = {
    isMobileMenuOpen: boolean
    setTrue: () => void
    setFalse: () => void
    toggle: ()=>void
}
