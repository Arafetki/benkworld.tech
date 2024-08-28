'use client';

import { useParams } from "next/navigation";

export default function BlogPost() {

    const {id} = useParams()

    return <h1>Blog Post Id : {id} </h1>
}