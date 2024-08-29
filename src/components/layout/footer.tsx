import { ThemeSwitcher } from "@/components/theme-switcher";
import {Socials} from "@/components/navigation/socials";

export default function Footer(): JSX.Element {
    return (
        <footer className="border-t border-foreground-200 max-w-7xl w-full mx-auto">
            <div className="container flex flex-col items-center justify-between gap-4 py-8 md:h-24 md:py-0 md:flex-row">
                <p className="text-sm font-medium text-center">© {new Date().getFullYear()} All rights reserved.</p>
                <div className="flex flex-col items-center gap-4 md:flex-row">
                    <Socials/>
                    <ThemeSwitcher/>
                </div>
            </div>
        </footer>
    )
}