import { Metadata } from "next";

export const metadata: Metadata = {
    title: `Arafet's Blog`
}

export default function BlogLayout({children}: Readonly<{children: React.ReactNode}>) {

    return (
        <div className="py-6 lg:py-10">
            <div className="space-y-6">
            <h1 className="inline-block font-bold font-heading text-4xl tracking-tight lg:text-5xl">
                Arafet&apos;s Blog
            </h1>
            <p className="text-xl text-muted-foreground">
                The latest IT trends, tips, and more right here!
            </p>
            </div>
            <hr className="my-8" />
            {children}
        </div>
    );
}