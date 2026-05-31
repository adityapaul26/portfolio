"use client";
import { type ReactNode } from "react";

// -------------------------------------------------------------------
// Project type – enforces strict shape for each entry.
// -------------------------------------------------------------------
export type Project = {
  title: string;
  tagline: string;
  description: string;
  repoUrl: string;
  tech: readonly string[];
  gradient?: string; // optional Tailwind gradient class for the card background
};

// -------------------------------------------------------------------
// Typed data array – exactly the six projects you specified.
// -------------------------------------------------------------------
export const projects: readonly Project[] = [
  {
    title: "AlgoScope",
    tagline: "Interactive Algorithm Visualization Engine",
    description:
      "A modern, high-fidelity algorithm visualizer designed to demystify complex data structures, state-machine mutations, and sorting mechanics through real-time canvas abstractions and fluid interactive transitions.",
    repoUrl: "https://github.com/your-org/algoscope",
    tech: ["JavaScript", "HTML5 Canvas", "Algorithms"],
    gradient: "bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-600",
  },
  {
    title: "mythSh",
    tagline: "POSIX‑Compliant Minimal Systems Shell",
    description:
      "A lightweight, lightning‑fast custom terminal shell built entirely in low‑level C. Designed to handle clean command‑line executions, child process management, and rapid environmental token piping.",
    repoUrl: "https://github.com/your-org/mythsh",
    tech: ["C", "Systems Programming", "POSIX"],
    gradient: "bg-gradient-to-br from-gray-700 via-gray-500 to-gray-800",
  },
  {
    title: "bimagic",
    tagline: "POSIX Shell Version Control Orchestrator",
    description:
      "A powerful Bash‑based Git automation helper engineered to simplify local repository pipelines and stage complex branch deployment sequences through a streamlined terminal interactive menu system.",
    repoUrl: "https://github.com/your-org/bimagic",
    tech: ["Shell", "Bash", "Git Automation"],
    gradient: "bg-gradient-to-br from-emerald-600 via-green-600 to-teal-600",
  },
  {
    title: "CPBuddy",
    tagline: "Analytical Competitive Programming Portal",
    description:
      "A native Android hub written in Kotlin for algorithmic developers. Features continuous telemetry streams to aggregate upcoming global contest calendars and perform deep analytics tracking on Codeforces rating histories.",
    repoUrl: "https://github.com/your-org/cpbuddy",
    tech: ["Kotlin", "Android", "API Integration"],
    gradient: "bg-gradient-to-br from-orange-600 via-red-600 to-pink-600",
  },
  {
    title: "portfolio",
    tagline: "Full‑Screen Telemetry Dashboard Frame",
    description:
      "A high‑contrast, linear developer canvas built with Next.js, TypeScript, and Tailwind CSS. It uses strict vertical scroll snap mechanisms alongside premium open‑source component kit micro‑interactions to render a sleek HUD interface.",
    repoUrl: "https://github.com/your-org/portfolio",
    tech: ["TypeScript", "Next.js", "Tailwind CSS", "Framer Motion"],
    gradient: "bg-gradient-to-br from-purple-600 via-fuchsia-600 to-pink-600",
  },
  {
    title: "inkspire",
    tagline: "Full‑Stack MVC Content Portal",
    description:
      "A secure, server‑rendered blogging framework built using the Node.js and Express ecosystem. Implements MongoDB for structural persistence, user cryptographic authentication, and a dense server‑side EJS dashboard workspace template flow.",
    repoUrl: "https://github.com/your-org/inkspire",
    tech: ["Node.js", "Express", "MongoDB", "EJS"],
    gradient: "bg-gradient-to-br from-rose-600 via-pink-600 to-fuchsia-600",
  },
] as const;
