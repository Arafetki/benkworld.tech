"use client";

import Link from "next/link";
import { Icons } from "@/components/icons";
import { useRouter } from "next/navigation";

export default function Failure() {

    const router = useRouter()

    return (
        <div className="flex flex-col items-center mx-auto text-center py-[100px]">
            <Icons.circleX strokeWidth={1} className="size-16 text-red-600"/>
            <h1 className="text-2xl font-bold mt-8">Uh oh! Something went wrong!</h1>
            <p className="mt-4 text-lg text-muted-foreground tracking-wide">Error with form submission.</p>
            <br/>
            <br/>
            <br/>
            <Link href="#" onClick={()=>router.back()} className="font-medium hover:text-primary flex items-center gap-1">
                <Icons.chevronLeft className="size-5"/>
                Back to Previous Page
            </Link>
        </div>
    );
}