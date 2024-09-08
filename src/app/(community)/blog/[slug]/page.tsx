import { allPosts } from "content-collections";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import { buttonVariants } from "@/components/ui/button"
import { Icons } from "@/components/icons"
import { cn } from "@/lib/utils";
import { formatDate } from "@/utils";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Mdx } from "@/components/mdx/mdx-components";

type PostPageProps = {
  params: {
    slug: string
  }
}

const getPostFromParams = async (params: PostPageProps['params']) => {
    const post = allPosts.find((post)=>post.slug===params.slug)
    if (!post) return null
    return post
}

export async function generateMetadata({params}: PostPageProps): Promise<Metadata> {

    const post = await getPostFromParams(params)

    if (!post) {
        return {}
    }

    return {
        title: post.title,
        description: post.summary,
        authors: post.authors.map((author)=>({name: author})),
        openGraph: {
            title: post.title,
            description: post.summary,
            type: "article",
        }
    }

}


export async function generateStaticParams(): Promise<
  PostPageProps["params"][]
> {
  return allPosts.map((post) => ({
    slug: post.slug,
  }))
}

export default async function PostPage({params}: PostPageProps) {

    const post = await getPostFromParams(params)

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
                    dateTime={post.date.toISOString()} 
                    className="block text-sm text-muted-foreground" 
                >
                    Published on {formatDate(post.date)}
                </time>
                <h1 className="mt-6 inline-block font-heading text-3xl leading-tight lg:text-5xl">
                    {post.title}
                </h1>
                {post.authors.length? (
                        <div className="mt-4 flex gap-4">
                        {post.authors.map((author)=>{
                            return (
                                <div key={author} className="flex items-center gap-2">
                                    <Avatar className="size-8">
                                        <AvatarImage src="https://github.com/shadcn.png" />
                                        <AvatarFallback>CN</AvatarFallback>
                                    </Avatar>
                                    <p className="text-left text-muted-foreground text-sm leading-tight font-medium italic">{author}</p>
                                </div>
                            );
                        })}
                        </div>
                ): null}
                {post.thumbnail && (
                    <Image
                        src={post.thumbnail}
                        alt={post.title}
                        width={720}
                        height={405}
                        className="my-8 rounded-md border bg-muted transition-colors"
                        priority
                    />
                )}                
            </div>
            <Mdx code={post.mdx}/>
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