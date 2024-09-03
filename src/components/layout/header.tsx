"use client";

import MainNavbar from '@/components/navigation/main-nav';
import { navItems } from '@/config/nav';
import { MobileMenuProvider } from '@/contexts/mobile-context';

export default function Header() {

    return (
        <MobileMenuProvider>
            <header className="sticky top-0 w-full z-50">
                    <MainNavbar items={navItems}/>
            </header>
        </MobileMenuProvider>
    );
}