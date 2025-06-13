import { BackgroundLines } from "@/components/ui/background-lines";
import { cn } from "@/lib/utils";
import { motion } from "motion/react";
import React from "react";

export function About() {
  return (
    <section
      id="About"
      className="relative flex  w-full items-center justify-center bg-white px-6 dark:bg-black md:px-20"
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
      <BackgroundLines className="flex items-center justify-center w-full flex-col px-4 ">
        {/* Heading and Subtext */}
        <div className="absolute top-[40%] left-1/2 -translate-x-1/2 w-1/2 h-[1px] bg-gradient-to-r from-transparent via-neutral-400 to-transparent dark:via-neutral-600 z-10" />

        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-clip-text text-transparent text-center bg-gradient-to-b from-neutral-900 to-neutral-700 dark:from-neutral-600 dark:to-white text-2xl md:text-4xl lg:text-7xl font-sans py-2 md:py-10 relative z-20 font-bold tracking-tight"
        >
          About Me
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="max-w-xl mx-auto text-sm md:text-lg text-neutral-700 dark:text-neutral-400 text-center relative z-20"
        >
          I&apos;m a web & mobile developer with experience in Flutter, React,
          and Next.js. Currently pursuing my MSc in IT at NSBM Green University.
          I love building clean, responsive UIs and exploring new technologies
          like Three.js and blockchain.
        </motion.p>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-6 grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-4 text-sm text-neutral-600 dark:text-neutral-300"
        >
          {[
            "React",
            "Next.js",
            "Flutter",
            "Tailwind CSS",
            "Three.js",
            "Blockchain",
          ].map((tech) => (
            <div
              key={tech}
              className="rounded-md border border-neutral-300 dark:border-neutral-700 px-2 py-1 text-center"
            >
              {tech}
            </div>
          ))}
        </motion.div>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-4 text-xs text-neutral-500 dark:text-neutral-500 italic z-20 text-center"
        >
          Currently exploring AI tools, building 3D web apps, and learning
          advanced animations.
        </motion.p>
      </BackgroundLines>
    </section>
  );
}
