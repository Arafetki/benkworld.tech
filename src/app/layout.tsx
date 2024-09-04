import type { Metadata, Viewport } from "next";
import { Poppins } from "next/font/google";
import { siteConfig } from "@/config/site";
import { Toaster } from "@/components/ui/toaster";
import { Providers } from "@/components/providers";
import { MobileMenuProvider } from '@/contexts/mobile-context';
import { SpeedInsights } from "@vercel/speed-insights/next";

import "./globals.css";

import Footer from "@/components/layout/footer";
import Header from "@/components/layout/header";

const poppins = Poppins({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-poppins',
  weight: ['100', '200', '300', '400', '500','600','700','800','900']  
})


export const metadata: Metadata = {
  title: {
    default: siteConfig.title,
    template: `%s | ${siteConfig.title}`,
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
      <body className={`${poppins.variable} font-poppins h-screen`}>
          <Providers>
            <MobileMenuProvider><Header/></MobileMenuProvider>
            <main>
              <div className="max-w-7xl mx-auto px-6">
                {children}
              </div>
            </main>
            <Footer/>
            <Toaster/>
            <SpeedInsights/>
          </Providers>
      </body>
    </html>
  );
}
