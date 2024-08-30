'use client'

import { useRouter } from "next/navigation";
import {ThemeProvider} from 'next-themes';

export function Providers({children}:{children: React.ReactNode}) {

    const router = useRouter()

    return (
        <ThemeProvider
            defaultTheme="system"
            attribute="class"
            enableSystem
            disableTransitionOnChange
        >
            {children}
        </ThemeProvider>
    )
}