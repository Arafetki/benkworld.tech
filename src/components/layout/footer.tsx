import {SocialMedia} from "@/components/social-media";

export default function Footer() {
    return (
        <footer className="h-24 border-t">
            <div className="max-w-7xl mx-auto flex flex-col gap-6 items-center sm:flex-row sm:justify-between p-6 h-24">
                <p className="order-1 font-medium">© {new Date().getFullYear()} All rights reserved.</p>
                <div className="order-2">
                    <SocialMedia/>
                </div>
            </div>
        </footer>
    )
}