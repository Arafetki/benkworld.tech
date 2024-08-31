'use client';

import {useState, useCallback, useEffect} from 'react';
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Icons } from "@/components/icons";
import { siteConfig } from "@/config/site";

export default function Header() {

    const [showMobileMenu,setShowMobileMenu] = useState<Boolean>(false);

    const mobileMenuToggle = useCallback(()=>{
        setShowMobileMenu(x=>!x)
    },[])

    useEffect(()=>{
        if (showMobileMenu) {
            document.body.style.overflow = 'hidden';
        }else {
            document.body.style.overflow = 'unset';
        }

    },[showMobileMenu])

    return (
        <header className="w-full z-50">
                <nav className="h-16 mx-auto max-w-7xl flex items-center justify-between py-12 px-6 lg:px-8" aria-label="Navigation">
                    <div className="flex lg:flex-1 items-center gap-5">
                        <Link href='/' className="text-lg sm:text-xl font-bold" onClick={()=>{if (showMobileMenu) setShowMobileMenu(false)}}>{siteConfig.title}</Link>
                        <ul className="hidden sm:flex gap-5" aria-label="Desktop Navigation">
                            <li><Link href='/' className="hover:opacity-60 font-normal text-sm">Home</Link></li>
                            <li><Link href='/#about' className="hover:opacity-60 font-normal text-sm">About</Link></li>
                            <li><Link href='/#projects' className="hover:opacity-60 font-normal text-sm">Projects</Link></li>
                            <li><Link href='/contact' className="hover:opacity-60 font-normal text-sm">Contact</Link></li>
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
                                <li><Link href='/' onClick={()=>setShowMobileMenu(false)} className='hover:opacity-60'>Home</Link></li>
                                <li><Link href='/#about' onClick={()=>setShowMobileMenu(false)} className='hover:opacity-60'>About</Link></li>
                                <li><Link href='/#projects' onClick={()=>setShowMobileMenu(false)} className='hover:opacity-60'>Projects</Link></li>
                                <li><Link href='/contact' onClick={()=>setShowMobileMenu(false)} className='hover:opacity-60'>Contact</Link></li>
                            </ul>
                        </div>
                    )}
                </nav>
        </header>
    );
}