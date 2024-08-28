import type { Metadata } from "next";
import { Roboto_Mono } from "next/font/google";
import "./globals.css";

import Providers from "@/components/providers";
import Navbar from "@/components/navigation/navbar";
import Footer from "@/components/layout/footer";


const robotoMono = Roboto_Mono({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-roboto-mono',
  weight: ['100', '300', '400', '500', '700']
});

export const metadata: Metadata = {
  title: "Benk | Techworld",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${robotoMono.variable} font-mono`}>
        <Providers>
          <Navbar/>
          <main className="grow">{children}</main>
          <Footer/>
        </Providers>
      </body>
    </html>
  );
}
