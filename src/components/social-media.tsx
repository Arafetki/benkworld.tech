import { siteConfig } from "@/config/site";
import Link from "next/link";
import { Icons } from "@/components/icons";

export function SocialMedia() {
    return (
        <ul className="flex items-center gap-8">
            {siteConfig.owner.socialLinks.map(link=>(
                <li key={link.name}>
                    <Link
                        href={link.href}
                        rel="noopener noreferrer"
                        target="_blank"
                        aria-label={link.name}
                        className="text-primary hover:underline flex items-center gap-x-1"
                    >
                        {link.name}
                        <Icons.externLink className="size-5"/>
                    </Link>
                </li>
            ))}
        </ul>
    )
}