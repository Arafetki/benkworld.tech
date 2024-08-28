import { Link } from "@nextui-org/react";

import LinkedinIcon from "@/components/icons/linkedin";
import GithubIcon from "@/components/icons/github";

const socials = [
    {
        name: 'Linkedin',
        href: 'https://www.linkedin.com/in/arafet-ben-kilani/',
        icon: <LinkedinIcon className="size-5"/>
    },
    {
        name: 'Github',
        href: 'https://github.com/arafetki',
        icon: <GithubIcon className="size-5"/>
    },
]

export default function Socials() {
    return (
        <ul className="flex gap-2">
            {socials.map(sm=>(
                <li key={sm.name}>
                    <Link
                        isExternal
                        href={sm.href}
                        rel="noopener noreferrer"
                        target="_blank"
                        color="foreground"
                    >
                        {sm.icon}
                    </Link>
                </li>
            ))}
        </ul>
    )
}