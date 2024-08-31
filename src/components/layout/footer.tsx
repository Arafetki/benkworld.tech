import {SocialLinks} from "@/components/social-links";
import { ThemeSwitcher } from "@/components/theme-switcher";

export default function Footer(): JSX.Element {
    return (
        <footer className="border-t border-foreground-200 max-w-7xl w-full mx-auto">
            <div className="container flex flex-col sm:flex-row items-center sm:justify-between gap-4 py-8 md:h-24 md:py-0">
                <p className="order-2 sm:order-1 text-sm font-medium text-center">© {new Date().getFullYear()} All rights reserved.</p>
                <div className="order-1 sm:order-2 flex flex-col-reverse items-center gap-2 sm:flex-row">
                    <SocialLinks/>
                    <ThemeSwitcher/>
                </div>
            </div>
        </footer>
    )
}