import { db } from "@/server/db";

export async function getPublishedPosts() {
    try {
        const posts = await db.query.posts.findMany({
            orderBy: (posts,{desc}) => [desc(posts.created)],
            where: (posts,{eq}) => eq(posts.isPublished,true),
            columns: {
                updated: false
            },
            extras: (posts,{sql}) => ({
                contentLength: (sql<number>`length(${posts.content})`).as('content_length'),
            })
        })
        return {posts}

    } catch (error) {
        console.error(error)
        if (error instanceof Error) return {error}
        return {error: new Error('an unkown error occured')}
    }
}