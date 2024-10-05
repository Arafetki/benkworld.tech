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

  const words = useMemo(()=>['Cloud Computing', 'DevSecOps', 'Web Development'],[]) 

  return (
    <div className="max-w-7xl w-full mx-auto">
      <section id="hero" className="relative py-8 lg:py-12">
        <BackgroundLines className="flex flex-col sm:items-center gap-y-4 sm:gap-y-6 md:gap-y-8">
          <div className="flex flex-col sm:items-center gap-y-5">
            <div className="w-fit flex justify-center items-center pl-3 sm:pl-0">
              <div className="absolute size-[86px] sm:size-[94.6] lg:size-[107.5] rounded-full border-4 border-primary border-double animate-spin" style={{animationDuration: "3s"}}/>
              <Image
                src={siteConfig.owner.photo}
                alt="Me"
                height={66}
                width={66}
                priority
                className="rounded-full aspect-square object-cover border-2 border-primary sm:size-[72.6] lg:size-[82.5]"
              />
            </div>
            <div className="flex gap-2 items-center rounded-lg border-1 bg-muted w-fit px-4 py-1">
              <div className="bg-green-700 rounded-full size-2"/>
              <span className="italic text-sm text-muted-foreground">Available for Work</span>
            </div>
          </div>
          <div className="flex flex-col sm:items-center gap-y-4">
            <h1 className="uppercase italic font-bold text-[1.6rem] sm:text-center sm:text-4xl md:text-5xl sm:tracking-wide leading-[1.5]">
              <span className="block sm:mb-2">Cloud</span> DevSecOps <span className="text-primary">Engineer</span>
            </h1>
            <div className="italic text-muted-foreground sm:text-center max-w-[60ch] space-y-1 xl:text-xl">
              <div>
                <span>I&apos;m passionate about,</span> <FlipWords words={words} className="p-0 text-sm xl:text-lg font-medium"/>
              </div>
              <p>Driven by curiosity, focused on innovation.</p>
            </div>
            <div className="flex gap-3 items-center mt-4">
              <Button
                asChild
                variant="expandIcon"
                Icon={Icons.download} iconPlacement="right"
                className="rounded-xl w-fit"
              >
                <Link href={siteConfig.owner.resumeUrl} target="blank">Resume</Link>
              </Button>            
              <div className="flex items-center gap-3">
                <div className="w-[20px] h-[45px] bg-transparent border-[3px] border-foreground rounded-full relative">
                  <div className="absolute size-2 m-auto rounded-full inset-0 bg-foreground animate-scrollDown"/>
                </div>
                <p className="text-xs">Scroll down</p>
              </div>            
            </div>
          </div>
        </BackgroundLines>
      </section>
    </div>
  );
}
