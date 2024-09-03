import Link from "next/link";
import type { NavItem } from "@/lib/types"
import { useMobileMenu } from "@/hooks/useMobileMenu";

type MobileNavMenuProps = {
    items: Readonly<NavItem[]>
}
export default function MobileNavMenu({items}: MobileNavMenuProps) {

    const {setFalse} = useMobileMenu()

    return (
        <div className='fixed inset-0 z-30 top-[6.5rem] h-[calc(100vh-6.5rem)] p-6 overflow-auto bg-background/70 backdrop-blur-lg shadow-md animate-in slide-in-from-bottom-80 sm:hidden'>
            <ul className='flex flex-col gap-5'>
                {
                    items.map(item=>{
                        return (
                            <li key={item.name}>
                                <Link href={item.href} onClick={setFalse} className='hover:opacity-60'>{item.name}</Link>
                            </li>
                        );
                    })
                }
            </ul>
        </div>
    );
}