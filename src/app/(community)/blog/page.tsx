import { Metadata } from "next";
import Image from "next/image";
import Link from 'next/link';
import { getPublishedPosts } from "@/server/db/data/posts";
import { formatDate, estimateReadTimeMinutes, pluralize, cache } from "@/utils";

export const metadata: Metadata = {
    title: `Arafet's Blog`
}

const getCachedPublishedPosts = cache(
    async () => await getPublishedPosts(),
    [],
    {revalidate: 3600, tags: ['posts']}
)

export default async function Blog() {

    const {posts,error} = await getCachedPublishedPosts()
    
    if (error) {
        console.error(error)
        return <span>Error: {error.message}</span>
    }

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
            {posts.length? (
                <div className="grid gap-10 sm:grid-cols-2">
                    {posts.map((post,index)=>{
                        return (
                            <article key={post.id} className="group relative flex flex-col gap-3">
                                <h2 className="capitalize font-medium absolute p-2 rounded-sm bg-stone-400 dark:bg-stone-500 backdrop-blur-lg">{post.level}</h2>
                                {post.thumbnailURL && (
                                    <Image
                                        src={post.thumbnailURL}
                                        alt={post.title}
                                        width={804}
                                        height={452}
                                        className="rounded-md border bg-muted transition-colors"
                                        priority={index <= 1}
                                    />
                                )}
                                <h2 className="text-2xl font-extrabold">{post.title}</h2>
                                <p className="text-muted-foreground tracking-tight break-words leading-relaxed">{post.description}</p>
                                <div className="flex items-center justify-between">
                                    <p className="text-sm text-muted-foreground">
                                        {formatDate(post.created)}
                                    </p>
                                    <p className="text-sm text-muted-foreground">{pluralize(estimateReadTimeMinutes(post.contentLength),'min')} read</p>
                                </div>
                                <Link href={`/blog/${post.id}`} className="absolute inset-0">
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