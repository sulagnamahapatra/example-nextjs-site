"use client";

import { motion } from "framer-motion";
import React from "react";
import { AuroraBackground } from "../components/ui/aurora-background";

interface AuroraBackgroundDemoProps {
    children: React.ReactNode;
}

export default function AuroraBackgroundDemo({ children }: AuroraBackgroundDemoProps) {
  return (
    <AuroraBackground>
      <motion.div
        initial={{ opacity: 0.0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="relative flex flex-col gap-4 items-center justify-center px-4"
      >
        {children}
      </motion.div>
    </AuroraBackground>
  );
}
