import {SocialLinks} from "@/components/social-links";
import { ThemeSwitcher } from "@/components/theme-switcher";

export default function Footer(): JSX.Element {
    return (
        <footer className="border-t border-foreground-200 max-w-7xl w-full mx-auto">
            <div className="container flex items-center justify-between gap-4 py-8 md:h-24 md:py-0">
                <p className="text-sm font-medium text-center">© {new Date().getFullYear()} All rights reserved.</p>
                <div className="flex items-center gap-2">
                    <SocialLinks/>
                    <ThemeSwitcher/>
                </div>
            </div>
        </footer>
    )
}