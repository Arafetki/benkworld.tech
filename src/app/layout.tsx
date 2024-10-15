import type { Metadata, Viewport } from "next";
import { Rubik } from "next/font/google";
import { SITE_METADATA } from "@/config";
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
    default: SITE_METADATA.title,
    template: `%s – ${SITE_METADATA.title}`,
  },
  description: SITE_METADATA.description,
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
        <div className="absolute inset-0 opacity-[0.06] pointer-events-none" style={{backgroundImage: `url(${grainImage.src})`}}/>
        <Providers>
          {children}
          <SpeedInsights/>
        </Providers>
      </body>
    </html>
  );
}
