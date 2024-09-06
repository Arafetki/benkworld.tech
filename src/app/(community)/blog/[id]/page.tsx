import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import { getPostById } from "@/server/db/data/posts";
import {z} from "zod";
import { buttonVariants } from "@/components/ui/button"
import { Icons } from "@/components/icons"
import { cn } from "@/lib/utils";
import { formatDate, cache } from "@/utils";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

type PostPageProps = {
  params: {
    id: string
  }
}

const idParam = z.coerce.number().gt(1,"id must be greater than zero")

async function getPostFromParams(params: PostPageProps['params']) {

    const {id} = params
    const parsedId = idParam.safeParse(id)
    if (!parsedId.success) {
        return {error: parsedId.error}
    }
    const postId = parsedId.data

    const {post,error} = await getPostById(postId)
    if (error) {
        return {error}
    }

    return {post}
}

export async function generateMetadata({params}: PostPageProps): Promise<Metadata> {

    const {post,error} = await getPostFromParams(params)
    if (!post || error) {
        return {}
    }

    return {
        title: post.title,
        description: post.description,
        authors: [{name: post.author}],
        openGraph: {
            title: post.title,
            description: post.description,
            type: "article",
        }
    }

}

export default async function PostPage({params}: PostPageProps) {

    const getCachedPost = cache(async () => {

        return await getPostFromParams(params)

    },[params.id],{revalidate: 120, tags: ["post"]})

    const {post,error} = await getCachedPost()
    if (!post) {
        notFound()
    }

    if (error) return (<p className="text-xl text-red-500 font-medium tracking-tight">An error occured!</p>);

    return (
        <article className="container relative max-w-4xl py-6 lg:py-10">
            <Link
                href="/blog"
                className={cn(
                buttonVariants({ variant: "ghost" }),
                "absolute left-[-200px] top-14 hidden xl:inline-flex"
                )}
            >
                <Icons.chevronLeft className="mr-2 h-4 w-4" />
                See all posts
            </Link>
            <div>
                <time 
                    dateTime={ post.updated? post.updated.toISOString() : post.created.toISOString()} 
                    className="block text-sm text-muted-foreground" 
                >
                    {post.updated? `Last update on ${formatDate(post.updated)}` : `Published on ${formatDate(post.created)}`}
                </time>
                <h1 className="mt-6 inline-block font-heading text-3xl leading-tight lg:text-5xl">
                    {post.title}
                </h1>
                <div className="mt-6 flex items-center gap-2">
                    <Avatar>
                        <AvatarImage src="https://github.com/shadcn.png" />
                        <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                    <p className="text-left text-muted-foreground text-sm leading-tight font-medium italic">{post.author}</p>
                </div>
                {post.thumbnailURL && (
                    <Image
                        src={post.thumbnailURL}
                        alt={post.title}
                        width={720}
                        height={405}
                        className="my-8 rounded-md border bg-muted transition-colors"
                        priority
                    />
                )}                
            </div>
            <hr className="mt-12" />
            <div className="flex justify-center py-6 lg:py-10">
                <Link href="/blog" className={cn(buttonVariants({ variant: "ghost" }))}>
                <Icons.chevronLeft className="mr-2 h-4 w-4" />
                See all posts
                </Link>
            </div>            
        </article>
    );
}