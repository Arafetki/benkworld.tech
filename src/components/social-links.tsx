import { Icons } from "@/components/icons";

const SOCIAL_LINKS = [
    {
        name: "Github",
        href: "https://github.com/arafetki",
        icon: <Icons.github height={22} width={22}/>
    },
    {
        name: "Linkedin",
        href: "https://www.linkedin.com/in/arafet-ben-kilani/",
        icon: <Icons.linkedin height={22} width={22}/>
    },
    {
        name: "Medium",
        href: "https://medium.com/@mr.arafetk",
        icon: <Icons.medium height={22} width={22}/>
    },        
]

export function SocialLinks() {
    return (
        <ul className="flex items-center gap-2">
            {SOCIAL_LINKS.map(sl=>(
                <li key={sl.name}>
                    <a
                        href={sl.href}
                        rel="noopener noreferrer"
                        target="_blank"
                        aria-label={sl.name}
                    >
                        {sl.icon}
                    </a>
                </li>
            ))}
        </ul>
    )
}