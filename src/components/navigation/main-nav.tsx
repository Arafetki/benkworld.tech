'use client';

import { useEffect } from "react";
import Link from "next/link";
import { usePathname } from 'next/navigation';
import type { NavItem } from "@/lib/types"
import { Icons } from "@/components/icons";
import { ThemeSwitcher } from "@/components/theme-switcher";
import { siteConfig } from "@/config/site";
import { useMobileMenu } from "@/hooks/useMobileMenu";
import { cn } from "@/lib/utils";
import { useHash } from "@/hooks/useHash";

type MainNavbarProps = {
    items?: Readonly<NavItem[]>
}

export default function  MainNavbar({items}: MainNavbarProps) {

    const {isMobileMenuOpen,toggle} = useMobileMenu();
    const pathname = usePathname();
    const hash = useHash();
    const hashPath = hash && hash.length ? `/${hash}`: pathname;

    useEffect(()=>{

        if (isMobileMenuOpen) {
            document.body.style.overflow = "hidden";
        }else{
            document.body.style.overflow = "unset";
        }

    },[isMobileMenuOpen]);


    return (
        <nav className="h-24 max-w-7xl mx-auto px-6 lg:px-8 flex items-center justify-between">
            <div className="flex items-center gap-5">
                <div className="flex items-center gap-2">
                    <Link href='/' className="order-2 text-primary text-nowrap font-bold tracking-tight" >
                        {siteConfig.title}
                    </Link>
                    <button
                        className="sm:hidden cursor-pointer order-1"
                        onClick={toggle}
                    >
                        {isMobileMenuOpen? <Icons.close className='size-6'/>: <Icons.burgerMenu className='size-6'/>}
                    </button>
                </div>
                <ul className="hidden sm:flex gap-5">
                    {items?.map(item=>{
                        return (
                            <li key={item.name}>
                                <Link href={item.href} className={cn("hover:text-foreground text-sm", hashPath === item.href? 'text-foreground': 'text-foreground/60 ')}>{item.name}</Link>
                            </li>
                        );
                    })}
                </ul>
            </div>
            <div>
                
                <ThemeSwitcher/>
            </div>
        </nav>
    );
}