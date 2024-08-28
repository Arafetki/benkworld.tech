'use client'

import { useState } from "react";
import {Navbar as NavbarNextUI, NavbarContent, NavbarItem, NavbarMenuToggle, NavbarMenu, NavbarMenuItem, Link} from "@nextui-org/react";
import { ThemeSwitcher  } from "@/components/theme-switcher";

export default function Navbar() {

    const [isMenuOpen, setIsMenuOpen] = useState(false)

    return (

        <NavbarNextUI 
            isMenuOpen={isMenuOpen}
            onMenuOpenChange={setIsMenuOpen}
            isBlurred
        >
            <NavbarItem>
                <Link onPress={()=>{if (isMenuOpen) setIsMenuOpen(false)}} href="/" className="text-lg text-foreground font-bold">
                    BenK World
                </Link>
            </NavbarItem>
            <NavbarContent className="hidden sm:flex gap-3">
                <NavbarItem >
                    <Link className="text-sm text-foreground/80" href="/">Home</Link>
                </NavbarItem>
                <NavbarItem>
                    <Link className="text-sm text-foreground/80" href="/#about">About</Link>
                </NavbarItem>
                <NavbarItem>
                    <Link className="text-sm text-foreground/80" href="/#projects">Projects</Link>
                </NavbarItem>
                <NavbarItem>
                    <Link className="text-sm text-foreground/80" href="/#testimonials">Testimonials</Link>
                </NavbarItem>
            </NavbarContent>

            <NavbarContent justify="end" className="hidden sm:flex">
                <NavbarItem>
                    <Link className="text-sm text-foreground/80" href="/contact">Contact</Link>
                </NavbarItem>
                <NavbarItem>
                    <Link className="text-sm text-foreground/80" href="/blog">Blog</Link>
                </NavbarItem>
                <NavbarItem>
                    <ThemeSwitcher/>
                </NavbarItem>
            </NavbarContent>

            {/* Mobile Menu */}
            <NavbarMenuToggle aria-label={isMenuOpen ? "Close menu" : "Open menu"} className="text-foreground sm:hidden"/>            
            <NavbarMenu>                      
                <NavbarMenuItem>
                    <Link onPress={()=>setIsMenuOpen(false)} color="foreground" href="/">Home</Link>
                </NavbarMenuItem>
                <NavbarMenuItem>
                    <Link onPress={()=>setIsMenuOpen(false)} color="foreground" href="/#about">About</Link>
                </NavbarMenuItem>   
                <NavbarMenuItem>
                    <Link onPress={()=>setIsMenuOpen(false)} color="foreground" href="/#projects">Projects</Link>
                </NavbarMenuItem>
                <NavbarMenuItem>
                    <Link onPress={()=>setIsMenuOpen(false)} color="foreground" href="/#testimonials">Testimonials</Link>
                </NavbarMenuItem> 
                <NavbarMenuItem>
                    <Link onPress={()=>setIsMenuOpen(false)} color="foreground" href="/contact">Contact</Link>
                </NavbarMenuItem>
                <NavbarMenuItem>
                    <Link onPress={()=>setIsMenuOpen(false)} color="foreground" href="/blog">Blog</Link>
                </NavbarMenuItem>                                                                                                                                                                                                                      
            </NavbarMenu>  

        </NavbarNextUI>
    )
}