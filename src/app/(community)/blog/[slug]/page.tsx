type PageProps = {
    params: {
        slug: string
    }
}

export default function PostPage({params}: PageProps) {

    return <h1>Post: {params.slug}</h1>
}