import { Metadata } from "next"

export const metadata: Metadata = {
    title: 'Blog'
}

export default function BlogPage() {
    return (
        <div className="max-w-7xl w-full mx-auto px-6 lg:px-8">
            <h1>Blog Page</h1>
        </div>
    );
}