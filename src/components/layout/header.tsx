'use client';

import {useState, useCallback} from 'react';
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Icons } from "@/components/icons";
import { siteConfig } from "@/config/site";

export default function Header() {

    const [showMobileMenu,setShowMobileMenu] = useState<Boolean>(false);

    const mobileMenuToggle = useCallback(()=>{
        setShowMobileMenu(x=>!x)
    },[])

    return (
        <header className="sticky top-0 w-full z-50">
                <nav className="h-16 mx-auto max-w-7xl flex items-center justify-between py-12 px-6 lg:px-8" aria-label="Navigation">
                    <div className="flex lg:flex-1 items-center gap-5">
                        <Link href='/' className="text-lg sm:text-2xl font-bold" onClick={()=>{if (showMobileMenu) setShowMobileMenu(false)}}>{siteConfig.title}</Link>
                        <ul className="hidden sm:flex gap-5" aria-label="Desktop Navigation">
                            <li className='hover:opacity-60'><Link href='/' className="text-md font-medium">Home</Link></li>
                            <li className='hover:opacity-60'><Link href='/#about' className="text-md font-medium">About</Link></li>
                            <li className='hover:opacity-60'><Link href='/#projects' className="text-md font-medium">Projects</Link></li>
                            <li className='hover:opacity-60'><Link href='/contact' className="text-md font-medium">Contact</Link></li>
                        </ul>
                    </div>
                    <Button 
                        asChild
                        variant='outline'
                        className="hidden sm:flex font-bold"
                    >
                         <Link href="/blog"><Icons.file className='mr-2'/> Blog</Link>
                    </Button>
                    <Button 
                        variant='icon'
                        size='icon'
                        className="sm:hidden"
                        onClick={mobileMenuToggle}
                    >
                        {showMobileMenu? <Icons.close/>: <Icons.burgerMenu/>}
                    </Button>
                    {showMobileMenu && (
                        <div className='fixed inset-0 z-30 top-[6.5rem] h-[calc(100vh-6.5rem)] p-6 overflow-auto bg-background/70 backdrop-blur-lg shadow-md animate-in slide-in-from-bottom-80 sm:hidden'>
                            <ul className='grid grid-flow-row auto-rows-max gap-5' aria-label="Mobile Navigation">
                                <li><Link href='/' onClick={()=>setShowMobileMenu(false)}>Home</Link></li>
                                <li><Link href='/#about' onClick={()=>setShowMobileMenu(false)}>About</Link></li>
                                <li><Link href='/#projects' onClick={()=>setShowMobileMenu(false)}>Projects</Link></li>
                                <li><Link href='/contact' onClick={()=>setShowMobileMenu(false)}>Contact</Link></li>
                            </ul>
                        </div>
                    )}
                </nav>
        </header>
    );
}