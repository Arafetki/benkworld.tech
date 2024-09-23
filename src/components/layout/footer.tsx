import Link from "next/link";
import { SocialMedia } from "@/components/social-media";
import { Disclaimer } from "@/components/disclaimer";

export default function Footer() {
    return (
        <footer className="">
            <div className="max-w-7xl mx-auto p-6 lg:py-10 flex flex-col items-center gap-y-4 sm:flex-row sm:justify-between border-t-2">
                <div className="flex flex-col gap-y-1 text-center sm:text-start">
                    <p className="text-sm text-nowrap text-muted-foreground">© Copyright {new Date().getFullYear()}. Arafet BenKilani</p>
                    <p className="text-sm text-nowrap text-muted-foreground">Code snippets are <Link href="https://opensource.org/license/MIT" target="_blank" rel="noopener noreferrer" className="underline hover:text-accent-foreground">MIT licensed</Link></p>
                    <Disclaimer/>
                </div>
                <SocialMedia/>
            </div>
        </footer>
    );
}