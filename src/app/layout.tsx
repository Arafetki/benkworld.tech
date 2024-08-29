import type { Metadata } from "next";
import { Roboto_Mono, Poppins } from "next/font/google";
import "./globals.css";

import Providers from "@/components/providers";
import Navbar from "@/components/navigation/navbar";
import Footer from "@/components/layout/footer";

const poppins = Poppins({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-poppins',
  weight: ['100', '200', '300', '400', '500','600','700','800','900']  
})

const robotoMono = Roboto_Mono({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-roboto-mono',
  weight: ['100', '300', '400', '500', '700']
});

export const metadata: Metadata = {
  title: "Home | Benk World",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${poppins.variable} font-sans`}>
        <Providers>
          <div  className="invisible w-full h-2 bg-primary z-50 sm:visible"></div>
          <Navbar/>
          <main className="grow flex flex-col">{children}</main>
          <Footer/>
        </Providers>
      </body>
    </html>
  );
}
