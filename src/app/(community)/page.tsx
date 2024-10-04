"use client";

import Image from "next/image";
import { siteConfig } from "@/config/site";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Icons } from "@/components/icons";
import { FlipWords } from "@/components/ui/flip-words";
import { useMemo } from "react";
import { BackgroundLines } from "@/components/ui/background-lines";

export default function Home() {

  const words = useMemo(()=>['Cloud Computing', 'DevSecOps', 'Software Development'],[]) 

  return (
    <div className="grow max-w-7xl w-full mx-auto px-6 flex flex-col">
      <section id="hero" className="py-10 my-auto relative">
        <BackgroundLines className="flex flex-col items-center gap-8">
          <div className="relative flex justify-center items-center">
            <div className="absolute size-32 rounded-full shadow-[0_10px_15px_#3182ce] animate-spin"/>
            <Image
              src={siteConfig.owner.photo}
              alt="Me"
              height={132}
              width={132}
              priority
              className="rounded-full aspect-square object-cover border-2 border-primary"
            />
          </div>
          <div className="text-center flex flex-col items-center gap-3">
            <h1 className="font-bold text-lg sm:text-xl uppercase">{siteConfig.owner.firstName} <span className="block md:inline-block">{siteConfig.owner.lastName}</span></h1>
            <h2 className="font-extrabold text-xl sm:text-2xl md:text-4xl uppercase">Cloud DevSecOps <span className="text-primary">Engineer</span></h2>
            <div className="text-base text-muted-foreground text-pretty max-w-[50ch] leading-relaxed">
              <span className="block sm:inline-block">I&apos;m passionate about,</span>
              <FlipWords words={words} className="font-medium"/> <br />
              <p>I&apos;m dedicated to continuous learning to enhance my expertise.</p>
            </div>
            <div className="flex gap-2">
              <Button asChild className="rounded-lg" size="sm">
                <Link href={siteConfig.owner.resumeUrl} target="blank">Resume <Icons.externLink strokeWidth={2} className="ml-2 h-4 w-4"/></Link>
              </Button>
              <Button asChild className="rounded-lg" size="sm">
                <Link href={`mailto:${siteConfig.owner.emailAdresse}`}><Icons.mail strokeWidth={2} className="mr-2 h-4 w-4"/> Get In Touch</Link>
              </Button>
            </div>            
          </div>
          <div className="flex items-center sm:mt-8">
            <div className="w-[20px] h-[45px] bg-transparent border-[3px] border-foreground rounded-full relative">
              <div className="absolute size-2 m-auto rounded-full inset-0 bg-foreground animate-scrollDown"/>
            </div>
          </div>
        </BackgroundLines>
      </section>
    </div>
  );
}
