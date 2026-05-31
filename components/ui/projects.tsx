"use client";
import React from "react";
import { PinContainer } from "@/components/ui/3d-pin";
import { cn } from "@/lib/utils";

// Define a type for project data
interface Project {
  title: string;
  href: string;
  description: string;
  tagline?: string;
  tech?: string[];
  image?: string;
  gradient?: string; // optional custom gradient class
}

// Sample data for six projects
const projects: Project[] = [
  {
    title: "AlgoScope",
    href: "https://github.com/adityapaul002/AlgoScope",
    description: "A modern, high-fidelity algorithm visualizer designed to demystify complex data structures through real-time canvas abstractions.",
    tagline: "Interactive Algorithm Visualization Engine",
    tech: ["JavaScript", "HTML5 Canvas", "Algorithms"],
    image: "/images/AlgoScope.png",
    gradient: "from-pink-500 via-purple-500 to-indigo-500",
  },
  {
    title: "mythSh",
    href: "https://github.com/adityapaul002/mythSh",
    description: "A lightweight, lightning-fast custom terminal shell built entirely in low-level C. Designed for clean command-line executions.",
    tagline: "POSIX-Compliant Minimal Systems Shell",
    tech: ["C", "Systems Programming", "POSIX"],
    image: "/images/mythSh.png",
    gradient: "from-emerald-500 via-green-500 to-teal-500",
  },
  {
    title: "Bimagic",
    href: "https://github.com/adityapaul002/bimagic",
    description: "A powerful Bash-based Git automation helper engineered to simplify local repository pipelines and stage complex branch sequences.",
    tagline: "POSIX Shell Version Control Orchestrator",
    tech: ["Shell", "Bash", "Git Automation"],
    image: "/images/Bimagic.png",
    gradient: "from-yellow-500 via-orange-500 to-red-500",
  },
  {
    title: "CPBuddy",
    href: "https://github.com/adityapaul002/CPBuddy",
    description: "A native Android hub written in Kotlin for algorithmic developers. Features continuous telemetry streams to aggregate contest calendars.",
    tagline: "Analytical Competitive Programming Portal",
    tech: ["Kotlin", "Android", "API Integration"],
    image: "/images/CPBuddy.png",
    gradient: "from-blue-500 via-indigo-500 to-purple-500",
  },
  {
    title: "Portfolio",
    href: "https://github.com/adityapaul002/portfolio-v1",
    description: "A high-contrast, linear developer canvas built with Next.js, TypeScript, and Tailwind CSS. Uses strict vertical scroll snap mechanisms.",
    tagline: "Full-Screen Telemetry Dashboard Frame",
    tech: ["TypeScript", "Next.js", "Tailwind CSS", "Framer Motion"],
    image: "/images/Portfolio.png",
    gradient: "from-gray-500 via-slate-500 to-zinc-500",
  },
  {
    title: "Inkspire",
    href: "https://github.com/adityapaul002/Inkspire",
    description: "A secure, server-rendered blogging framework built using the Node.js ecosystem. Implements MongoDB for structural persistence.",
    tagline: "Full-Stack MVC Content Portal",
    tech: ["Node.js", "Express", "MongoDB", "EJS"],
    image: "/images/Inkspire.png",
    gradient: "from-rose-500 via-pink-500 to-fuchsia-500",
  },
];

export default function ProjectsSection() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-24 gap-x-8 w-full py-12">
      {projects.map((project, index) => (
        <div
          key={index}
          className="flex flex-col items-center justify-center w-full group"
        >
          <PinContainer
            title={project.title}
            href={project.href}
            containerClassName="h-[24rem] w-full flex items-center justify-center"
            className="w-[20rem] h-[12rem]"
            image={project.image}
          >
            <div className="w-[20rem] h-[12rem]" />
          </PinContainer>

          
          <div className="mt-12 text-center max-w-xs px-4">
            <h3 className="font-bold text-xl text-slate-100 mb-1 group-hover:text-purple-400 transition-colors">
              {project.title}
            </h3>
            <p className="text-xs text-purple-500/80 font-mono mb-2 uppercase tracking-widest">
              {project.tagline}
            </p>
            <p className="text-sm text-slate-400 line-clamp-2 mb-4 h-10">
              {project.description}
            </p>
            <div className="flex flex-wrap justify-center gap-1.5">
              {project.tech?.map((t, i) => (
                <span
                  key={i}
                  className="text-[10px] font-mono bg-white/5 border border-white/10 px-2 py-0.5 rounded text-slate-300"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}


