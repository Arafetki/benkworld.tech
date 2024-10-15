import Link from "next/link";
import { ME, ADDRESS, RESUME_URL } from "@/config";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import { Icons } from "@/components/icons";
import MagicButton from "@/components/magic-button";

export default function Hero() {
    return (
        <section id="hero">
            <div className="flex justify-center relative pt-8 pb-20">
                <div className="max-w-[89vw] md:max-w-2xl lg:max-w-3xl flex flex-col items-center justify-center">
                    <div className="bg-[url('/me.jpg')] bg-no-repeat bg-cover bg-center size-[120px] sm:size-[160px] lg:size-[200px] animate-avatar shadow-[inset_0_0_0_7px] shadow-charcoal/70"/>
                    <TextGenerateEffect
                        words="Driven by curiosity, focused on innovation."
                        className="text-center italic text-2xl sm:text-3xl md:text-5xl"
                    />
                    <p className="text-center text-pretty italic text-muted-foreground md:tracking-wider mb-4 md:text-lg lg:text-xl">
                        Hi, I&apos;m {ME.name}, a {ME.title} based in {`${ADDRESS.city}, ${ADDRESS.country}`}
                    </p>
                    <Link href={RESUME_URL} target="_blank">
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