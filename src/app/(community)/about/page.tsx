import { Metadata } from "next";

export const metadata: Metadata = {
    title: "About me"
}

export default function About() {
    return (
        <div className="p-6 lg:py-10">
            <h1>About page</h1>
        </div>
    );
}