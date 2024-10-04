import Image from "next/image";
import { siteConfig } from "@/config/site";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Icons } from "@/components/icons";
import { FlipWords } from "@/components/ui/flip-words";
import { SocialMedia } from "@/components/social-media";

const words = ['Cloud Computing', 'DevSecOps', 'Software Development'];

export default function Home() {

  return (
    <div className="flex flex-col px-6">
      <section id="hero" className="flex flex-col items-center gap-6 py-12 lg:py-20">
        <Image
          src={siteConfig.owner.photo}
          alt="Me"
          height={125}
          width={125}
          priority
          className="rounded-full aspect-square object-cover hover:scale-110 sm:hover:scale-125 transition-all ease-in-out"
        />
        <div className="text-center space-y-4">
          <h1 className="font-extrabold text-2xl uppercase">{siteConfig.owner.firstName}<br/>{siteConfig.owner.lastName}</h1>
          <h2 className="font-bold text-lg sm:text-2xl lg:text-4xl uppercase">Cloud DevSecOps Engineer</h2>
          <div className="text-sm text-muted-foreground text-pretty max-w-[50ch] leading-relaxed sm:text-base md:text-lg">
            <span className="block sm:inline-block">I&apos;m passionate about,</span>
            <FlipWords words={words} className="text-base sm:text-lg md:text-xl"/> <br />
            constantly pushing boundaries to build innovative, secure, and future-ready solutions.
          </div>
          <div className="flex items-center justify-center gap-4">
            <Button asChild>
              <Link href={siteConfig.owner.resumeUrl} target="blank">Resume <Icons.externLink strokeWidth={2} className="ml-2 h-4 w-4"/></Link>
            </Button>
            <Button asChild>
              <Link href={`mailto:${siteConfig.owner.emailAdresse}`}>Get In Touch <Icons.mail strokeWidth={2} className="ml-2 h-4 w-4"/></Link>
            </Button>            
          </div>
        </div>
      </section>
    </div>
  );
}
