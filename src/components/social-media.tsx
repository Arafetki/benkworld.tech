import { SOCIAL_MEDIA } from "@/config";
import Link from "next/link";
import { Icons } from "@/components/icons";
import { cn } from "@/lib/utils";

type SocialMediaProps = {
    className?: string
}

export function SocialMedia({className}: SocialMediaProps) {
    return (
        <ul className={cn("flex items-center",className)}>
            {SOCIAL_MEDIA.map(media=>(
                <li key={media.name}>
                    <Link
                        href={media.href}
                        rel="noopener noreferrer"
                        target="_blank"
                        aria-label={media.name}
                        className="text-blue-500 hover:underline flex items-center gap-x-1"
                    >
                        {media.name}
                        <Icons.externLink className="size-5"/>
                    </Link>
                </li>
            ))}
        </ul>
    )
}