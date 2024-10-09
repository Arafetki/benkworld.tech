import Image from "next/image";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import { Spotlight } from "@/components/ui/spotlight";
import { siteConfig } from "@/config/site";
import { Icons } from "./icons";
import Link from "next/link";
import MagicButton from "./magic-button";

export default function Hero() {
    return (
        <section>
            <Spotlight
                className="md:left-60 -top-20 hidden dark:flex"
                fill="white"
            />
            <Spotlight
                className="md:left-60 -top-20 dark:hidden"
                fill="#0a0a0a"
            />
            <div className="flex justify-center relative my-8">
                <div className="max-w-[89vw] md:max-w-2xl lg:max-w-3xl flex flex-col items-center justify-center">
                    <div className="relative inline-flex overflow-hidden rounded-full p-[3px] focus:outline-none">
                        <span className="absolute inset-0 -z-10 animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#F3F4F6_0%,#3B82F6_50%,#F3F4F6_100%)]" />
                        <Image
                            src={siteConfig.owner.photo}
                            alt="Me"
                            height={90}
                            width={90}
                            priority
                            className="aspect-square rounded-full object-cover"
                        />
                    </div>
                    <TextGenerateEffect
                        words="Driven by curiosity, focused on innovation."
                        className="text-center italic text-2xl sm:text-3xl md:text-5xl lg:text-6xl"
                    />
                    <p className="text-center text-pretty italic text-muted-foreground md:tracking-wider mb-4 md:text-lg lg:text-xl">
                        Hi, I&apos;m {siteConfig.owner.firstName}, a Cloud DevSecOps Engineer based in Tunisia <Icons.tunisianFlag className="inline-block ml-[1px] mb-1 size-4 sm:size-5"/>
                    </p>
                    <Link href={siteConfig.owner.resumeUrl} target="_blank">
                        <MagicButton
                            title="My Resume"
                            icon={<Icons.download className="size-5"/>}
                            position="right"
                        />
                    </Link>
                </div>
            </div>
        </section>
    );
}