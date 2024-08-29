import { Icon } from '@iconify/react';

const socials = [
    {
        name: 'Linkedin',
        href: 'https://www.linkedin.com/in/arafet-ben-kilani/',
        icon: <Icon icon='mdi:linkedin' height={22} width={22}/>
    },
    {
        name: 'Github',
        href: 'https://github.com/arafetki',
        icon: <Icon icon='mdi:github' height={22} width={22}/>
    },
    {
        name: 'Medium',
        href: 'https://medium.com/@mr.arafetk',
        icon: <Icon icon='basil:medium-solid' height={22} width={22}/>
    }
]

export function Socials() {
    return (
        <ul className="flex items-center gap-2">
            {socials.map(sm=>(
                <li key={sm.name}>
                    <a
                        href={sm.href}
                        rel="noopener noreferrer"
                        target="_blank"
                    >
                        {sm.icon}
                    </a>
                </li>
            ))}
        </ul>
    )
}