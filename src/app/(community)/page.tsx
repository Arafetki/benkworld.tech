"use client";

import Image from "next/image";
import { siteConfig } from "@/config/site";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Icons } from "@/components/icons";
import { FlipWords } from "@/components/ui/flip-words";
import { useMemo } from "react";

export default function Home() {

  const words = useMemo(()=>['Cloud Computing', 'DevSecOps', 'Web Development'],[]) 

  return (
    <div className="max-w-7xl w-full mx-auto">
      <section id="hero" className="flex flex-col py-10 sm:p-20">
        <div className="w-fit relative flex justify-center items-center pl-1 pb-8">
          <div className="absolute size-[86px] rounded-full border-4 border-secondary border-double animate-spin" style={{animationDuration: "3s"}}/>
          <Image
            src={siteConfig.owner.photo}
            alt="Me"
            height={76}
            width={76}
            priority
            className="rounded-full aspect-square object-cover border-2 border-secondary"
          />
        </div>
        <div className="space-y-4">
          <h2 className="font-semibold text-base lg:text-2xl text-pretty leading-[1.5]">
            Hey, I&apos;m {`${siteConfig.owner.firstName} ${siteConfig.owner.lastName}`}
          </h2>
          <h1 className="font-bold text-[1.75rem] sm:text-3xl lg:text-6xl leading-[1.5]">
            Cloud <br/> DevSecOps <span className="text-secondary">Engineer</span>
          </h1>
          <div className="text-muted-foreground xl:text-xl max-w-[60ch] space-y-1">
            <div>
              <span>I&apos;m passionate about,</span> <FlipWords words={words} className="p-0 text-sm xl:text-lg font-medium"/>
            </div>
            <p>Driven by curiosity, focused on innovation.</p>
          </div>
        </div>
        <div className="flex gap-3 mt-6">
          <Button asChild className="rounded-lg">
            <Link href={siteConfig.owner.resumeUrl} target="blank">Resume <Icons.externLink strokeWidth={2} className="ml-2 h-4 w-4"/></Link>
          </Button>
          <Button asChild className="rounded-lg">
            <Link href={`mailto:${siteConfig.owner.emailAdresse}`}><Icons.mail strokeWidth={2} className="mr-2 h-4 w-4"/> Get In Touch</Link>
          </Button>
        </div>
        <div className="flex items-center gap-3 mt-16">
          <div className="w-[20px] h-[45px] bg-transparent border-[3px] border-foreground rounded-full relative">
            <div className="absolute size-2 m-auto rounded-full inset-0 bg-foreground animate-scrollDown"/>
          </div>
          <p className="text-xs">Scroll down</p>
        </div>         
                    {/* <div className="text-center sm:text-left flex flex-col items-center sm:items-start gap-3">
            <h1 className="font-bold text-lg sm:text-xl md:text-2xl uppercase">{siteConfig.owner.firstName} <span className="block md:inline-block">{siteConfig.owner.lastName}</span></h1>
            <h2 className="font-extrabold text-2xl sm:text-3xl md:text-4xl lg:text-5xl uppercase">Cloud DevSecOps <span className="text-secondary">Engineer</span></h2>
            <div className="text-base text-muted-foreground text-pretty max-w-[50ch] leading-relaxed">
              <span className="block sm:inline-block">I&apos;m passionate about,</span>
              <FlipWords words={words} className="font-medium"/> <br />
            </div>
            <div className="flex justify-center gap-3">
              <Button asChild className="rounded-lg">
                <Link href={siteConfig.owner.resumeUrl} target="blank">Resume <Icons.externLink strokeWidth={2} className="ml-2 h-4 w-4"/></Link>
              </Button>
              <Button asChild className="rounded-lg">
                <Link href={`mailto:${siteConfig.owner.emailAdresse}`}><Icons.mail strokeWidth={2} className="mr-2 h-4 w-4"/> Get In Touch</Link>
              </Button>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-[20px] h-[45px] bg-transparent border-[3px] border-foreground rounded-full relative">
              <div className="absolute size-2 m-auto rounded-full inset-0 bg-foreground animate-scrollDown"/>
            </div>
            <p className="text-xs">Scroll down</p>
          </div> 
          */}
      </section>
    </div>
  );
}
