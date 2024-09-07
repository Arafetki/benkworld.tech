import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import { getPostById } from "@/server/db/data/posts";
import { idParamSchema } from "@/lib/zod";
import { buttonVariants } from "@/components/ui/button"
import { Icons } from "@/components/icons"
import { cn } from "@/lib/utils";
import { formatDate, cache } from "@/utils";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Mdx } from "@/components/markdown/mdx-components";

type PostPageProps = {
  params: {
    id: string
  }
}

const getCachedPostFromParams = cache(async (params: PostPageProps['params']) => {

    const {id} = params
    const parsedId = idParamSchema.safeParse(id)
    if (!parsedId.success) {
        console.error(parsedId.error)
        return {error: parsedId.error}
    }
    const postId = parsedId.data

    const {post,error} = await getPostById(postId)
    if (error) {
        console.error(parsedId.error)
        return {error}
    }

    return {post, error: null}

},[],{revalidate: 3600, tags: ["post"]})

export async function generateMetadata({params}: PostPageProps): Promise<Metadata> {

    const {post,error} = await getCachedPostFromParams(params)

    if (!post) {
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

    const {post,error} = await getCachedPostFromParams(params)

    if (error) return (<p className="text-xl text-red-500 font-medium tracking-tight">An internal error occured!</p>);

    if (!post) notFound();
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
            <Mdx code={post.content}/>
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