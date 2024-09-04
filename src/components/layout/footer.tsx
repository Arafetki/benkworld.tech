import {SocialLinks} from "@/components/social-links";

export default function Footer() {
    return (
        <footer className="max-w-7xl mx-auto border-t">
            <div className="flex flex-col gap-4 items-center sm:flex-row sm:justify-between p-6 h-24">
                <p className="order-1 text-sm font-medium text-center">© {new Date().getFullYear()} All rights reserved.</p>
                <div className="order-2">
                    <SocialLinks/>
                </div>
            </div>
        </footer>
    )
}