'use client';

import { useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import type { NavItem } from "@/types"
import { Icons } from "@/components/icons";
import { ThemeSwitcher } from "@/components/theme-switcher";
import { siteConfig } from "@/config/site";
import { useMobileMenu } from "@/hooks/useMobileMenu";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

type MainNavbarProps = {
    items?: Readonly<NavItem[]>
}

export default function  MainNavbar({items}: MainNavbarProps) {

    const {isMobileMenuOpen, toggle, setFalse} = useMobileMenu();
    const pathname = usePathname();

    useEffect(()=>{

        if (isMobileMenuOpen) {
            document.body.style.overflow = 'hidden'
        } else {
            document.body.style.overflow = 'unset'
        }

    },[isMobileMenuOpen])

    return (
        <nav className="h-20 max-w-7xl mx-auto px-6 rounded-2xl flex items-center justify-between">
            <div className="flex items-center gap-5 z-50">
                <div className="flex items-center gap-2">
                    <button
                        className="sm:hidden cursor-pointer"
                        onClick={toggle}
                    >
                        {isMobileMenuOpen? <Icons.close strokeWidth={3} className='size-5 text-foreground'/>: <Icons.burgerMenu strokeWidth={3} className='size-5 text-foreground'/>}
                    </button>                    
                    <Link 
                        href='/' 
                        className="bg-charcoal-400 dark:bg-charcoal-100/95 text-white text-nowrap text-base sm:text-lg font-bold uppercase tracking-tight px-2 py-1 hover:bg-blue-500 dark:hover:bg-blue-500 hover:-rotate-6 transition-all ease-in-out"
                        onClick={()=>{if (isMobileMenuOpen) setFalse()}}
                    >
                        {siteConfig.title}
                    </Link>
                </div>
                <ul className="hidden sm:flex gap-5">
                    {items?.map(item=>{
                        return (
                            <li key={item.name}>
                                <Link href={item.href} className={cn("text-foreground/70 hover:text-foreground font-medium text-sm", pathname===item.href && "text-foreground")}>{item.name}</Link>
                            </li>
                        );
                    })}
                </ul>
            </div>
            <div className="flex items-center z-50">
                <ThemeSwitcher/>
                <Button variant='ghost' size='icon' asChild>
                    <Link href='/rss.xml' onClick={()=>{if (isMobileMenuOpen) setFalse()}}>
                        <Icons.rss strokeWidth={3} className="h-[1.2rem] w-[1.2rem]"/>
                    </Link>
                </Button>
            </div>
        </nav>
    );
}