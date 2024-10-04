import { MobileMenuProvider } from '@/contexts/mobile-context';
import Header from "@/components/layout/header";
import Footer from '@/components/layout/footer';

export default function Layout({children}: Readonly<{children: React.ReactNode}>) {
    return (
        <main className='flex flex-col h-screen'>
            <MobileMenuProvider><Header/></MobileMenuProvider>
            <div className="flex-1">
                {children}
            </div>
            <Footer/>
        </main>
    );
}