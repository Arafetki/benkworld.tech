import Hero from "@/components/hero";

export default function Home() {

  return (
    <div className="p-6 lg:py-10">
      <Hero/>
      {/* <BackgroundLines className="flex flex-col items-center gap-y-8 py-8 lg:py-12">
          <div className="w-fit flex flex-col items-center gap-y-6">
            <div className="w-fit flex justify-center items-center">
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
          <div className="space-y-10">
            <div className="max-w-2xl italic flex flex-col items-center">
              <h2 className="uppercase tracking-wide sm:tracking-widest text-xs sm:text-base text-muted-foreground">Cloud DevSecOps Engineer</h2>
              <h1 className="font-bold text-center text-2xl sm:text-4xl md:text-5xl">Driven by curiosity, focused on innovation.</h1>
            </div>
            <div className="flex justify-center gap-4">
              <Button
                asChild
                variant="outline"
                className="rounded-md italic"
              >
                <Link href={siteConfig.owner.resumeUrl} target="blank" rel="noopener noreferrer">My Resume <Icons.download strokeWidth={2} className="size-4 ml-2"/></Link>
              </Button>
              <Button
                asChild
                className="rounded-md italic bg-foreground hover:bg-foreground/80"
              >
                <Link href={`mailto:${siteConfig.owner.emailAdresse}`}>Let&apos; Connect <Icons.mail strokeWidth={2} className="size-4 ml-2"/></Link>
              </Button>
            </div>
          </div>
      </BackgroundLines> */}
    </div>
  );
}
