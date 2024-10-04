"use client";

import Image from "next/image";
import { siteConfig } from "@/config/site";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Icons } from "@/components/icons";
import { FlipWords } from "@/components/ui/flip-words";
import { StarsBackground } from "@/components/ui/stars-background";
import { ShootingStars } from "@/components/ui/shooting-stars";

const words = ['Cloud Computing', 'DevSecOps', 'Software Development'];

export default function Home() {

  return (
    <div className="relative flex flex-col px-6">
      <section className="relative flex flex-col items-center gap-6 py-12 lg:py-20">
        <Image
          src={siteConfig.owner.photo}
          alt="Me"
          height={125}
          width={125}
          priority
          className="rounded-full aspect-square object-cover hover:scale-110 sm:hover:scale-125 transition-all ease-in-out"
        />
        <div className="text-center space-y-4 flex flex-col items-center">
          <h1 className="font-extrabold text-xl sm:text-2xl uppercase">{siteConfig.owner.firstName}<br/>{siteConfig.owner.lastName}</h1>
          <h2 className="font-bold text-xl sm:text-3xl lg:text-4xl uppercase">Cloud DevSecOps <span className="text-primary">Engineer</span></h2>
          <div className="text-sm md:text-base text-muted-foreground text-pretty max-w-[50ch] leading-relaxed">
            <span className="block sm:inline-block">I&apos;m passionate about,</span>
            <FlipWords words={words} className="text-base font-medium sm:text-lg md:text-xl"/> <br />
            constantly pushing boundaries to build innovative, secure, and future-ready solutions.
          </div>
          <div className="flex items-center justify-center gap-4 py-2">
            <Button asChild>
              <Link href={siteConfig.owner.resumeUrl} target="blank">Resume <Icons.externLink strokeWidth={2} className="ml-2 h-4 w-4"/></Link>
            </Button>
            <Button asChild>
              <Link href={`mailto:${siteConfig.owner.emailAdresse}`}>Get In Touch <Icons.mail strokeWidth={2} className="ml-2 h-4 w-4"/></Link>
            </Button>
          </div>
        </div>
        <ShootingStars />
        <StarsBackground />
      </section>
    </div>
  );
}
