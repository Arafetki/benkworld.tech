'use client';

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";

const getHash = () => (typeof window !== "undefined" ? window.location.hash : undefined);

export function useHash() {

    const params = useParams();
    const [hash, setHash] = useState(getHash())

    useEffect(()=>{
        setHash(getHash())
    },[params])

    return hash;
}