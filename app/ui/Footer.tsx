// components/Footer.tsx
"use client";
import { motion } from "motion/react";
export default function Footer() {
  return (
    <motion.footer
      className="bg-zinc-950 text-gray-400 py-6 px-4 text-center text-sm border-t border-zinc-800"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, delay: 0.2 }}
    >
      <p>
        © {new Date().getFullYear()}{" "}
        <span className="text-white font-semibold">Sahan Thiwanka</span>. All rights
        reserved.
      </p>
    </motion.footer>
  );
}
