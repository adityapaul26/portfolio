"use client";

import { Marquee } from "@/components/ui/marquee";
import React from "react";

const skills = [
  "typescript",
  "javascript",
  "nextjs",
  "react",
  "nodejs",
  "express",
  "mongodb",
  "tailwind",
  "framer",
  "c",
  "kotlin",
  "android",
  "bash",
  "linux",
  "git",
  "github",
  "docker",
  "figma",
  "vercel",
  "html",
  "css",
  "postman",
  "vscode",
  "ubuntu",
  "arch",
];

export default function SkillMarquee() {
  return (
    <div className="relative flex h-full w-full flex-col items-center justify-center overflow-hidden py-4">
      <Marquee pauseOnHover className="[--duration:40s] [--gap:2rem]">
        {skills.map((skill) => (
          <div
            key={skill}
            className="flex items-center gap-3 px-2 py-1 transition-all duration-300 cursor-default group"
          >
            <img
              src={`https://skillicons.dev/icons?i=${skill}`}
              alt={skill}
              className="h-6 w-6 grayscale group-hover:grayscale-0 transition-all duration-500 opacity-70 group-hover:opacity-100"
            />
            <span className="text-[10px] font-mono font-bold uppercase tracking-[0.2em] text-zinc-500 group-hover:text-purple-400 transition-colors">
              {skill === "nodedotjs" ? "Node.js" : skill === "nextdotjs" ? "Next.js" : skill}
            </span>
          </div>
        ))}
      </Marquee>
      
      <Marquee reverse pauseOnHover className="[--duration:45s] [--gap:2rem] mt-2">
        {skills.slice().reverse().map((skill) => (
          <div
            key={skill}
            className="flex items-center gap-3 px-2 py-1 transition-all duration-300 cursor-default group"
          >
            <img
              src={`https://skillicons.dev/icons?i=${skill}`}
              alt={skill}
              className="h-6 w-6 grayscale group-hover:grayscale-0 transition-all duration-500 opacity-70 group-hover:opacity-100"
            />
            <span className="text-[10px] font-mono font-bold uppercase tracking-[0.2em] text-zinc-500 group-hover:text-purple-400 transition-colors">
              {skill === "nodedotjs" ? "Node.js" : skill === "nextdotjs" ? "Next.js" : skill}
            </span>
          </div>
        ))}
      </Marquee>

      {/* Modern gradient masks */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-black via-black/50 to-transparent"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-black via-black/50 to-transparent"></div>
    </div>
  );
}
