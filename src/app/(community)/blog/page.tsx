import { Metadata } from "next";
import Image from "next/image";
import Link from 'next/link';
import { allPosts } from "content-collections";
import { formatDate } from "@/utils";

export const metadata: Metadata = {
    title: `Arafet's Blog`
}

export default async function Blog() {

    return (
        <div className="p-6 lg:py-10">
            <div className="space-y-6">
            <h1 className="inline-block font-bold font-heading text-4xl tracking-tight lg:text-5xl">
                Arafet&apos;s Blog
            </h1>
            <p className="text-xl text-muted-foreground">
                The latest IT trends, tips, and more right here!
            </p>
            </div>
            <hr className="my-8" />
            {allPosts.length? (
                <div className="grid gap-10 sm:grid-cols-2">
                    {allPosts.map((post,index)=>{
                        return (
                            <article key={post.slug} className="group relative flex flex-col gap-3">
                                <h2 className="capitalize font-medium absolute p-2 rounded-sm bg-stone-400 dark:bg-stone-500 backdrop-blur-lg">{post.level}</h2>
                                {post.thumbnail && (
                                    <Image
                                        src={post.thumbnail}
                                        alt={post.title}
                                        width={804}
                                        height={452}
                                        className="rounded-md border bg-muted transition-colors"
                                        priority={index <= 1}
                                    />
                                )}
                                <h2 className="text-2xl font-extrabold">{post.title}</h2>
                                <p className="text-muted-foreground tracking-tight break-words leading-relaxed">{post.summary}</p>
                                <div className="flex items-center justify-between">
                                    <p className="text-sm text-muted-foreground">
                                        {formatDate(post.date)}
                                    </p>
                                    <p className="text-sm text-muted-foreground">{post.readMinutes}</p>
                                </div>
                                <Link href={`/blog/${post.slug}`} className="absolute inset-0">
                                    <span className="sr-only">View Article</span>
                                </Link>
                            </article>
                        );
                    })}
                </div>
            ) : <p className="text-xl font-medium tracking-tight">No posts published.</p>}
        </div>
    );
}