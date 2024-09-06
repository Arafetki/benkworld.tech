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
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

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
        <nav className="h-20 max-w-7xl mx-auto px-6 flex items-center justify-between bg-background/80 backdrop-blur-md">
            <div className="flex items-center gap-5">
                <div className="flex items-center gap-3">
                    <Link 
                        href='/' 
                        className="order-2 text-primary-foreground dark:text-foreground/80 text-sm sm:text-md uppercase font-bold py-1 px-2 bg-stone-800 dark:bg-stone-600 hover:-rotate-6 transition-all ease-in-out"
                        onClick={()=>{if (isMobileMenuOpen) setFalse()}}
                    >
                        {siteConfig.title}
                    </Link>
                    <button
                        className="sm:hidden cursor-pointer order-1"
                        onClick={toggle}
                    >
                        {isMobileMenuOpen? <Icons.close className='size-5'/>: <Icons.burgerMenu className='size-5'/>}
                    </button>
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
            <div className="flex items-center">
                <TooltipProvider>
                    <Tooltip>
                        <TooltipTrigger asChild>
                            <Button variant='icon' size='icon' asChild>
                                <Link href='/anouncements' onClick={()=>{if (isMobileMenuOpen) setFalse()}}>
                                    <Icons.bell className="h-[1.2rem] w-[1.2rem]"/>
                                </Link>
                            </Button>
                        </TooltipTrigger>
                        <TooltipContent>
                            <p>Anouncements</p>
                        </TooltipContent>
                    </Tooltip>
                </TooltipProvider>
                <ThemeSwitcher/>
            </div>
        </nav>
    );
}