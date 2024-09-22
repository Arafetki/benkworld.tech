import { SocialMedia } from "@/components/social-media";

export default function Footer() {
    return (
        <footer className="">
            <div className="max-w-7xl mx-auto p-6 lg:py-10 flex flex-col items-center gap-y-4 sm:flex-row sm:justify-between border-t-2">
                <p className="text-nowrap">© {new Date().getFullYear()}. All rights reserved</p>
                <SocialMedia/>
            </div>
        </footer>
    );
}