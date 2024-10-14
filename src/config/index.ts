import type { NavItem, SiteMetaData, Me, Address, SocialMedia } from "@/types";

export const RESUME_URL = "https://utfs.io/f/mJiezb2UwDPc5BIr7hani9kclsWJHSGbvBEjNeUm0Ix73M8Y"

export const NAV_ITEMS: Readonly<NavItem[]> = [
    {
        label: "Blog",
        href: "/blog"
    }
];

export const SITE_METADATA: Readonly<SiteMetaData> = {
    title: "Benk Techworld",
    description: "Personal portfolio and blog showcasing my offered services and writeups.",
    url: "https://benkworld.tech/",
};

export const ME: Readonly<Me> = {
    name: "Arafet BenKilani",
    email: "mr.arafetk@gmail.com",
    phone: "+21620714894",
    photo: "/me.jpg",
    title: "Cloud DevSecOps Engineer"
};

export const ADDRESS: Readonly<Address> = {
    city: "Haouaria",
    country: "Tunisia"
};


export const SOCIAL_MEDIA : Readonly<SocialMedia[]> = [
    {
        name: "GitHub",
        href: "https://github.com/arafetki"
    },
    {
        name: "LinkedIn",
        href: "https://www.linkedin.com/in/arafet-ben-kilani"
    },
    {
        name: "Medium",
        href: "https://medium.com/@mr.arafetk"
    },
];

