"use client";
import { AsciiArt } from "@/components/ui/ascii-art";

export default function AsciiArtDemo() {
  return (
    <AsciiArt
      src="/images/IMG-20251031-WA0018.jpg"
      resolution={120}
      color="#FFFFFF"
      animationStyle="fade"
      animationDuration={1.5}
      animateOnView={false}
      className="mx-auto aspect-square w-full max-w-lg bg-transparent drop-shadow-[0_0_15px_rgba(255,255,255,0.3)] rounded-4xl"
    />
  );
}
