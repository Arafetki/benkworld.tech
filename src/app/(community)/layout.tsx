import { MobileMenuProvider } from '@/contexts/mobile-context';
import Footer from "@/components/layout/footer";
import Header from "@/components/layout/header";

export default function Layout({children}: Readonly<{children: React.ReactNode}>) {
    return (
        <>
            <MobileMenuProvider><Header/></MobileMenuProvider>
            <div className="max-w-7xl mx-auto px-6">
                {children}
            </div>
            <Footer/>
        </>
    );
}