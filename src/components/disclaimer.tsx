"use client";

import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogClose
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { useMediaQuery } from "usehooks-ts";

export function Disclaimer() {

    const isDesktop = useMediaQuery("(min-width: 768px)")

    if (isDesktop) return (
        <Dialog>
            <DialogTrigger className="text-muted-foreground text-sm text-center sm:text-start hover:text-accent-foreground">Disclaimer</DialogTrigger>
            <DialogContent className="max-w-2xl">
                <DialogHeader>
                    <DialogTitle className="font-bold text-4xl">Disclaimer</DialogTitle>
                    <br/>
                    <DialogDescription className="text-base text-muted-foreground tracking-tight">
                        The information provided on this website is for general informational purposes only.
                        <br/>
                        <br/>
                        The author strives to ensure the accuracy and reliability of the information provided but makes no guarantees regarding its completeness, suitability, or availability. Use of this information is at your own risk, and the author is not liable for any decisions or actions taken based on it, nor for any consequential or special damages, even if warned of potential risks.
                    </DialogDescription>
                </DialogHeader>
                <DialogFooter>
                    <DialogClose asChild>
                        <Button type="button">
                            Continue
                        </Button>
                    </DialogClose>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    );

    return (
        <Drawer>
            <DrawerTrigger className="text-muted-foreground text-sm text-center sm:text-start hover:text-accent-foreground">Disclaimer</DrawerTrigger>
            <DrawerContent>
                <DrawerHeader className="text-start">
                    <DrawerTitle className="font-bold text-3xl">Disclaimer</DrawerTitle>
                    <DrawerDescription className="text-muted-foreground tracking-tight mt-4">
                        The information provided on this website is for general informational purposes only.
                        <br/>
                        <br/>
                        The author strives to ensure the accuracy and reliability of the information provided but makes no guarantees regarding its completeness, suitability, or availability. Use of this information is at your own risk, and the author is not liable for any decisions or actions taken based on it, nor for any consequential or special damages, even if warned of potential risks.                    </DrawerDescription>
                </DrawerHeader>
                <DrawerFooter>
                    <DrawerClose>
                        <Button type="button">Continue</Button>
                    </DrawerClose>
                </DrawerFooter>
            </DrawerContent>
        </Drawer>
    );
}