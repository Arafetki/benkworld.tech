'use client';

import { Tab, Tabs, Tooltip, Spinner } from "@nextui-org/react";
import { useTheme } from "next-themes";
import { useIsMounted } from "@/hooks/useIsMounted";
import {Sun,Moon,Monitor} from 'lucide-react';


export function ThemeSwitcher() {

    const mounted = useIsMounted()
    const {theme,setTheme} = useTheme()

    if (!mounted) return <Spinner color="default" size="sm"/>

    return (
        <Tabs 
            selectedKey={theme} 
            onSelectionChange={(key)=>setTheme(key as string)}
            variant="bordered" 
            aria-label="Themes Tab" 
            size="sm"
            radius="lg"
        >
            <Tab
                key="light"
                title={
                    <Tooltip content='Light' size="sm">
                        <Sun size={15}/>
                    </Tooltip>
                }
                className="px-[5px]"
            />
            <Tab
                key="system"
                title={
                    <Tooltip content='System' size="sm">
                        <Monitor size={15}/>
                    </Tooltip>
                }
                className="px-[5px]"
            />
            <Tab
                key="dark"
                title={
                    <Tooltip content='Dark' size="sm">
                        <Moon size={15}/>
                    </Tooltip>
                }
                className="px-[5px]"
            />
        </Tabs>
    )


}