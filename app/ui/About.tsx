import { BackgroundLines } from "@/components/ui/background-lines";
import { cn } from "@/lib/utils";
import React from "react";

export function About() {
  return (
    <div id="About" className="relative flex h-screen w-full items-center justify-center bg-white px-6 dark:bg-black md:px-20">
      {/* Background grid pattern */}
      <div
        className={cn(
          "absolute inset-0",
          "[background-size:20px_20px]",
          "[background-image:radial-gradient(#d4d4d4_1px,transparent_1px)]",
          "dark:[background-image:radial-gradient(#404040_1px,transparent_1px)]"
        )}
      />

      {/* Radial gradient for fade effect */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] dark:bg-black"></div>
      <BackgroundLines className="flex items-center justify-center w-full flex-col px-4">
        <h2 className="bg-clip-text text-transparent text-center bg-gradient-to-b from-neutral-900 to-neutral-700 dark:from-neutral-600 dark:to-white text-2xl md:text-4xl lg:text-7xl font-sans py-2 md:py-10 relative z-20 font-bold tracking-tight">
          About Me
        </h2>
        <p className="max-w-xl mx-auto text-sm md:text-lg text-neutral-700 dark:text-neutral-400 text-center relative z-20">
          I&apos;m a web & mobile developer with experience in Flutter, React, and
          Next.js. Currently pursuing my MSc in IT at NSBM Green University. I
          love building clean, responsive UIs and exploring new technologies
          like Three.js and blockchain.
        </p>
      </BackgroundLines>
    </div>
  );
}
