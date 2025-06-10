import { PinContainer } from "@/components/ui/3d-pin";
import { cn } from "@/lib/utils";
import React from "react";

const demoItems = [
  {
    title: "Aceternity UI",
    description: "Customizable Tailwind CSS and Framer Motion Components.",
    href: "https://twitter.com/mannupaaji",
    gradient:
      "from-violet-500 via-purple-500 to-blue-500",
  },
  {
    title: "Next.js Boilerplate",
    description: "Production-ready starter template for modern web apps.",
    href: "https://github.com/vercel/next.js",
    gradient:
      "from-green-400 via-teal-500 to-cyan-500",
  },
];

export function Project() {
  return (
    <div className="relative flex h-screen w-full items-center justify-center bg-white px-6 dark:bg-black md:px-20">
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
    <div className="flex flex-wrap justify-center gap-8 py-12">
      {demoItems.map((item, index) => (
        <PinContainer key={index} title={item.title} href={item.href}>
          <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[20rem]">
            <h3 className="max-w-xs !pb-2 !m-0 font-bold text-base text-slate-100">
              {item.title}
            </h3>
            <div className="text-base !m-0 !p-0 font-normal">
              <span className="text-slate-500">{item.description}</span>
            </div>
            <div
              className={`flex flex-1 w-full rounded-lg mt-4 bg-gradient-to-br ${item.gradient}`}
            />
          </div>
        </PinContainer>
      ))}
    </div>
    </div>
  );
}
