import Link from "next/link";
import type { NavItem } from "@/lib/types"
import { Icons } from "@/components/icons";
import { Separator } from "@/components/ui/separator";
import {SocialLinks} from "@/components/social-links";
import { ThemeSwitcher } from "@/components/theme-switcher";

import MobileNavMenu from "@/components/navigation/mobile-nav";
import { useMobileMenu } from "@/hooks/useMobileMenu";

type MainNavbarProps = {
    items?: Readonly<NavItem[]>
}

export default function  MainNavbar({items}: MainNavbarProps) {

    const {isMobileMenuOpen,toggle} = useMobileMenu()

    return (
        <nav className="h-16 max-w-7xl mx-auto py-12 px-6 lg:px-8 flex items-center justify-between">
            <div className="flex items-center gap-5">
                <div className="hidden sm:flex">                  
                    <Link href='/' >
                        <h1 className='text-md lg:text-lg  font-bold flex gap-2 items-baseline'>Benk <span className="text-primary">Techworld</span></h1>
                    </Link>
                </div>
                <button
                    className="sm:hidden cursor-pointer"
                    onClick={toggle}
                >
                    {isMobileMenuOpen? <Icons.close className='size-6'/>: <Icons.burgerMenu className='size-6'/>}
                </button>
                <ul className="hidden sm:flex sm:gap-3 lg:gap-5">
                    {items?.map(item=>{
                        return (
                            <li key={item.name}>
                                <Link href={item.href} className="hover:opacity-60 font-medium text-sm">{item.name}</Link>
                            </li>
                        );
                    })}
                </ul>
            </div>
            <div className="flex items-center gap-1 h-8">
                <SocialLinks/>
                <Separator orientation="vertical"/>
                <ThemeSwitcher/>
            </div>
            {isMobileMenuOpen && items && (<MobileNavMenu items={items}/>)}
        </nav>
    );
}