"use client";

import MainNavbar from '@/components/navigation/main-nav';
import MobileNavMenu from '../navigation/mobile-nav';
import { navItems } from '@/config/nav';
import { useMobileMenu } from '@/hooks/useMobileMenu';

export default function Header() {

    const {isMobileMenuOpen} = useMobileMenu()

    return (
        <header className="sticky top-0 z-50 border-b">
                <MainNavbar items={navItems}/>
                {isMobileMenuOpen && (<MobileNavMenu items={navItems}/>)}
        </header>
    );
}