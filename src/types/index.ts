export type SiteMetaData = {
    title: string
    description: string
    url?: string

}

export type Me = {
    name: string
    email: string
    phone?: string
    photo: string
    title: string
}

export type Address = {
    street?: string
    city: string
    country: string
}

export type SocialMedia = {
    name :string
    href: string
}

export type NavItem = {
    label: string
    href: string
}

export type MobileMenuContextState = {
    isMobileMenuOpen: boolean
    setTrue: () => void
    setFalse: () => void
    toggle: ()=>void
}

export type SearchParams = Record<string,string | string[] | undefined>
