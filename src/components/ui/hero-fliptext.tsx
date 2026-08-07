"use client";

import { motion } from "motion/react";
import { TextFlip } from "./text-flip";

const phrases = [
  "production-grade distributed systems.",
  "real-time applications.",
  "developer tools.",
  "from zero.",
];

export default function HeroFlipText() {
  return (
    <span className="text-sm text-muted-foreground">
      Building{" "}
      <TextFlip
        as={motion.span}
        className="font-medium text-foreground"
        interval={2.8}
        transition={{ duration: 0.3 }}
      >
        {phrases.map((p) => (
          <span key={p}>{p}</span>
        ))}
      </TextFlip>
    </span>
  );
}
