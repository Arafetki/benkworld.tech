import { Metadata } from "next";

export const metadata: Metadata = {
    title: "About"
}

export default function About() {
    return (
        <div className="max-w-7xl w-full h-full mx-auto p-6 lg:py-10">
            <h1>About page</h1>
        </div>
    );
}