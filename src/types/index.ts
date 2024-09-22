export type SiteConfig = {
    title: string
    description: string
    url: string
    emailAdresse: string
    socialLinks: SocialLink[]
}

export type SocialLink = {
    name :string
    href: string
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

export type SearchParams = Record<string,string | string[] | undefined>
