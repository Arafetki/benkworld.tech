import { siteConfig } from "@/config/site";
import Link from "next/link";
import { Icons } from "@/components/icons";
import { cn } from "@/lib/utils";

type SocialMediaProps = {
    className?: string
}

export function SocialMedia({className}: SocialMediaProps) {
    return (
        <ul className={cn("flex items-center",className)}>
            {siteConfig.owner.socialLinks.map(link=>(
                <li key={link.name}>
                    <Link
                        href={link.href}
                        rel="noopener noreferrer"
                        target="_blank"
                        aria-label={link.name}
                        className="text-blue-500 hover:underline flex items-center gap-x-1"
                    >
                        {link.name}
                        <Icons.externLink className="size-5"/>
                    </Link>
                </li>
            ))}
        </ul>
    )
}