import Image from "next/image";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import { Spotlight } from "@/components/ui/spotlight";
import { siteConfig } from "@/config/site";
import { Icons } from "./icons";

export default function Hero() {
    return (
        <section>
            <div>
                <Spotlight
                    className="md:left-60 -top-20 hidden dark:flex"
                    fill="white"
                />
                <Spotlight
                    className="md:left-60 -top-20 dark:hidden"
                    fill="black"
                />                
            </div>            
            <div className="flex justify-center relative my-20">
                <div className="max-w-[89vw] md:max-w-2xl lg:max-w-3xl flex flex-col items-center justify-center">
                    <div className="flex flex-col items-center gap-y-6">
                        <Image
                            src={siteConfig.owner.photo}
                            alt="Me"
                            height={85}
                            width={85}
                            priority
                            className="rounded-full aspect-square object-cover border-[3px] border-blue-400"
                        />
                        <div className="flex gap-2 items-center">
                            <div className="bg-green-600 rounded-full size-2"/>
                            <span className="uppercase text-xs font-medium">Available for Work</span>
                        </div>
                    </div>
                    <TextGenerateEffect
                        words="Driven by curiosity, focused on innovation."
                        className="text-center text-2xl sm:text-3xl md:text-5xl lg:text-6xl"
                    />
                    <p className="font-medium text-center text-pretty text-muted-foreground md:tracking-wider mb-4 md:text-lg lg:text-xl">
                        Hi, I&apos;m {siteConfig.owner.firstName}, a Cloud DevSecOps Engineer based in Tunisia <Icons.tunisianFlag className="inline-block size-3 sm:size-4"/>
                    </p>
                </div>
            </div>
        </section>
    );
}