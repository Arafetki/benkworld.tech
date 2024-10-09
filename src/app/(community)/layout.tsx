import { MobileMenuProvider } from '@/contexts/mobile-context';
import Header from "@/components/layout/header";
import Footer from '@/components/layout/footer';

export default function Layout({children}: Readonly<{children: React.ReactNode}>) {
    return (
        <main className='relative overflow-hidden flex flex-col min-h-screen'>
            <MobileMenuProvider><Header/></MobileMenuProvider>
            <div className="grow max-w-7xl w-full mx-auto">
                {children}
            </div>
            <Footer/>
        </main>
    );
}