'use client'

import { useRouter } from "next/navigation";
import {NextUIProvider} from "@nextui-org/react";
import {ThemeProvider} from 'next-themes';

export default function Providers({children}:{children: React.ReactNode}) {

    const router = useRouter()

    return (
        <NextUIProvider 
            navigate={router.push} 
            className="flex flex-col min-h-screen"
        >
            <ThemeProvider
                defaultTheme="system"
                attribute="class"
                enableSystem
                disableTransitionOnChange
            >
                {children}
            </ThemeProvider>
        </NextUIProvider>
    )
}