import type { Metadata, Viewport } from "next";
import { Rubik } from "next/font/google";
import { siteConfig } from "@/config/site";
import { Toaster } from "@/components/ui/toaster";
import { Providers } from "@/components/providers";
import { SpeedInsights } from "@vercel/speed-insights/next";
import grainImage from "@/assets/grain.jpg";

import "./globals.css";

const rubik = Rubik({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-rubik',
  weight: ['300', '400', '500','600','700','800','900']  
})


export const metadata: Metadata = {
  title: {
    default: siteConfig.title,
    template: `%s – ${siteConfig.title}`,
  },
  description: siteConfig.description,
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${rubik.variable} font-rubik antialiased min-h-screen relative`}>
        <div className="absolute inset-0 opacity-10 pointer-events-none" style={{backgroundImage: `url(${grainImage.src})`}}/>
        <Providers>
          {children}
          <Toaster/>
          <SpeedInsights/>
        </Providers>
      </body>
    </html>
  );
}
