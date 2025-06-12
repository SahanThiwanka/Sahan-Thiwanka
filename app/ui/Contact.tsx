import { FloatingDock } from "@/components/ui/floating-dock";
import { cn } from "@/lib/utils";
import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconMail,
} from "@tabler/icons-react";
import React from "react";

export function Contact() {
  const links = [
    {
      title: "GitHub",
      icon: (
        <IconBrandGithub className="h-full w-full text-neutral-600 dark:text-neutral-300" />
      ),
      href: "https://github.com/yourusername",
    },
    {
      title: "LinkedIn",
      icon: (
        <IconBrandLinkedin className="h-full w-full text-blue-700 dark:text-blue-400" />
      ),
      href: "https://linkedin.com/in/yourusername",
    },
    {
      title: "Email",
      icon: (
        <IconMail className="h-full w-full text-red-600 dark:text-red-400" />
      ),
      href: "mailto:youremail@example.com",
    },
  ];

  return (
    <section
      id="Contact"
      className="relative flex flex-col items-center justify-center w-full bg-white dark:bg-black px-6 md:px-20 py-20"
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
      {/* Radial gradient for soft center focus */}
      <div className="pointer-events-none absolute inset-0 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] dark:bg-black" />

      {/* Heading and Subtext */}
      <div className="relative text-center mb-12">
        <h2 className="text-3xl font-bold text-black dark:text-white">📬 Contact Me</h2>
        <p className="mt-2 text-gray-600 dark:text-gray-400 text-sm max-w-md">
          Feel free to reach out for collaborations, project ideas, or just to say hello.
        </p>
      </div>

      {/* Floating Dock */}
      <div className="relative flex items-center justify-center h-auto w-full">
        <FloatingDock
          mobileClassName="translate-y-20"
          items={links}
        />
      </div>
    </section>
  );
}
