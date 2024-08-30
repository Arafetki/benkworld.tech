'use client';

import { useTheme } from "next-themes";
import { useIsMounted } from "@/hooks/useIsMounted";
import { Icons } from "@/components/icons";


export function ThemeSwitcher() {

    const mounted = useIsMounted()
    const {theme,setTheme} = useTheme()

    if (!mounted) return null

    return (
        <div>Theme Switch</div>
    )


}