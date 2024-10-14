"use client";

import MainNavbar from '@/components/navigation/main-nav';
import MobileNavMenu from '../navigation/mobile-nav';
import { NAV_ITEMS } from '@/config';
import { useMobileMenu } from '@/hooks/useMobileMenu';

export default function Header() {

    const {isMobileMenuOpen} = useMobileMenu()

    return (
        <header>
                <MainNavbar items={NAV_ITEMS}/>
                {isMobileMenuOpen && (<MobileNavMenu items={NAV_ITEMS}/>)}
        </header>
    );
}