import { Icons } from "@/components/icons";
import { Button } from "@/components/ui/button";

const SOCIAL_LINKS = [
    {
        name: "Github",
        href: "https://github.com/arafetki",
        icon: <Icons.github className="size-7"/>
    },
    {
        name: "Linkedin",
        href: "https://www.linkedin.com/in/arafet-ben-kilani/",
        icon: <Icons.linkedin className="size-7"/>
    },
    {
        name: "Medium",
        href: "https://medium.com/@mr.arafetk",
        icon: <Icons.medium className="size-7"/>
    },        
]

export function SocialMedia() {
    return (
        <ul className="flex items-center gap-2">
            {SOCIAL_LINKS.map(sl=>(
                <li key={sl.name}>
                    <Button asChild variant='icon' size='icon'>
                        <a
                            href={sl.href}
                            rel="noopener noreferrer"
                            target="_blank"
                            aria-label={sl.name}
                        >
                            {sl.icon}
                        </a>
                    </Button>
                </li>
            ))}
        </ul>
    )
}