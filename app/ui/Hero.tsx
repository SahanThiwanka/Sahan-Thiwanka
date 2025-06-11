import { cn } from "@/lib/utils";
import React from "react";
import { motion } from "motion/react";
import { ContainerTextFlip } from "@/components/ui/container-text-flip";
import { Hero3DModel } from "@/components/ui/3D";

export function Hero() {
  const words = ["better", "modern", "beautiful", "awesome"];
  const words_main = [
    "Sahan Thiwanka",
    "A Web Developer",
    "A Mobile Developer",
  ];

  return (
    <div
      id="Home"
      className="relative flex h-screen w-full items-center justify-center bg-white px-6 dark:bg-black md:px-20"
    >
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

      {/* Main content */}
      <div className="relative z-20 flex w-full max-w-7xl flex-col items-start justify-center space-y-8 md:flex-row md:items-center md:space-x-8 md:space-y-0">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 max-w-3xl text-left"
          layout
        >
          <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 md:text-6xl lg:text-7xl">
            Hello, I&apos;m <ContainerTextFlip words={words_main} />
          </h1>
          <div className="mt-4 text-lg font-medium text-zinc-600 dark:text-zinc-400 md:text-xl">
            <span>Make your websites look 10x </span>
            <ContainerTextFlip
              className="mt-4 text-lg font-medium md:text-xl"
              words={words}
            />
          </div>

          {/* New content aligned to left */}
          <div className="mt-2 space-y-6">
            <div className="text-neutral-500 dark:text-neutral-400 text-lg md:text-xl">
              I build modern websites & apps with React,Flutter, and emerging
              tech like Three.js.
            </div>
          </div>
          <div className="mt-6 flex items-center space-x-4">
            <button className="relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
              <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
              <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl">
                Hire Me
              </span>
            </button>

            <button className="relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
              <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#FFB6B9_0%,#FF6F61_50%,#FFB6B9_100%)]" />
              <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl">
                Download CV
              </span>
            </button>
          </div>
        </motion.div>
        <div className="hidden md:block w-1/2 h-[500px]">
          <Hero3DModel />
        </div>
      </div>
    </div>
  );
}
