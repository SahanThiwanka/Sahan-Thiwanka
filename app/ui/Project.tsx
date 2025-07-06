import { PinContainer } from "@/components/ui/3d-pin";
import { cn } from "@/lib/utils";
import Image from "next/image";
import React from "react";

const demoItems = [
  {
    title: "Blockchain-based-healthcare-application",
    description: "A decentralized healthcare application using blockchain technology for secure patient data management.",
    href: "https://medical-records-flame.vercel.app/",
    image: "/images/med.png",
    techStack: [ "Blockchain", "Smart Contracts", "Ethereum", "Solidity", "Ethers.js", "IPFS", "Next.js", "Tailwind CSS"],
  },
  {
    title: "Solar Monitoring System",
    description: "Creating solar monitoring system using tcp/ip model and raspberry pi for university iot project",
    href: "https://github.com/SahanThiwanka/solar-monitoring-system?tab=readme-ov-file",
    image: "https://user-images.githubusercontent.com/73154273/192801439-bc606b06-782d-47f9-84a6-1f0333d3ae91.png",
    techStack: [ "HTML", "JavaScript","PHP", "Raspberry Pi", "TCP/IP", "IoT"," CSS","Bootstrap","Sensor Integration"],
  },
  
];

export function Project() {
  return (
    <section id="Projects" className="relative w-full bg-white dark:bg-black px-6 md:px-20 py-20">
      {/* Background Pattern */}
      <div
        className={cn(
          "absolute inset-0",
          "[background-size:20px_20px]",
          "[background-image:radial-gradient(#d4d4d4_1px,transparent_1px)]",
          "dark:[background-image:radial-gradient(#404040_1px,transparent_1px)]"
        )}
      />
      {/* Radial Gradient */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] dark:bg-black"></div>

      {/* Section Heading */}
      <div className="text-center mb-20 relative">
        <h2 className="text-3xl font-bold text-black dark:text-white">🚀 Projects</h2>
        <p className="mt-2 text-gray-600 dark:text-gray-400 text-sm">
          Some of the coolest things I&apos;ve built recently — using cutting-edge tools and tech.
        </p>
      </div>

      {/* Project Cards */}
      <div className="flex flex-wrap justify-center gap-18 gap-y-25">
        {demoItems.map((item, index) => (
          <PinContainer key={index} title={item.title} href={item.href}>
            <div className="flex basis-full flex-col p-4 text-slate-100/50 sm:basis-1/2 w-[20rem] h-[25rem] rounded-xl bg-white dark:bg-neutral-900 shadow-md">
              <Image
                src={item.image}
                alt={item.title}
                width={320}
                height={200}
                className="rounded-lg object-cover"
              />
              <h3 className="mt-4 font-bold text-base text-black dark:text-white">
                {item.title}
              </h3>
              <p className="text-sm mt-1 text-gray-600 dark:text-gray-400">
                {item.description}
              </p>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-2 mt-3">
                {item.techStack.map((tech, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </PinContainer>
        ))}
      </div>
    </section>
  );
}
