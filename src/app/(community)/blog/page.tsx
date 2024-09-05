import { Metadata } from "next";
import Image from "next/image";
import Link from 'next/link';
import { formatDate } from "@/lib/utils";
import { db } from "@/server/db";
import { unstable_cache } from 'next/cache';


export const metadata: Metadata = {
    title: 'Blog'
}

const getPosts = unstable_cache(
  async () => {
    return await db.query.posts.findMany()
  },
  ['posts'],
  { revalidate: 3600, tags: ['posts'] }
)

export default async function Blog() {

    const posts = await getPosts()

    return (
        <div className="py-6 lg:py-10">
            <div className="space-y-6">
            <h1 className="inline-block font-bold font-heading text-4xl tracking-tight lg:text-5xl">
                Blog
            </h1>
            <p className="text-xl text-muted-foreground">
                Get the latest on IT trends, tips, and more right here!
            </p>
            </div>
            <hr className="my-8" />
            {posts.length? (
                <div className="grid gap-10 sm:grid-cols-3">
                    {posts.map((post,index)=>{
                        return (
                            <article key={post.id} className="group relative flex flex-col space-y-2">
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
                                <p className="text-muted-foreground">{post.description}</p>
                                <p className="text-sm text-muted-foreground">
                                    {formatDate(post.created as unknown as string)}
                                </p>
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