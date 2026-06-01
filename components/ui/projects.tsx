"use client";
import React from "react";
import { PinContainer } from "@/components/ui/3d-pin";
import { TracingBeam } from "@/components/ui/tracing-beam";
import { cn } from "@/lib/utils";
import { toast } from "sonner";

// Define a type for project data
interface Project {
  title: string;
  displayTitle: string;
  href: string;
  liveUrl?: string;
  description: string;
  tagline?: string;
  tech?: string[];
  image?: string;
  gradient?: string; // optional custom gradient class
}

// Sample data for six projects
const projects: Project[] = [
  {
    title: "algoscope-hq/AlgoScope",
    displayTitle: "AlgoScope",
    href: "https://github.com/algoscope-hq/AlgoScope",
    liveUrl: "https://algo-scope-virid.vercel.app/",
    description: "A modern, high-fidelity algorithm visualizer designed to demystify complex data structures through real-time canvas abstractions.",
    tagline: "Interactive Algorithm Visualization Engine",
    tech: ["JavaScript", "HTML5 Canvas", "Algorithms"],
    image: "/images/AlgoScope.png",
    gradient: "from-pink-500 via-purple-500 to-indigo-500",
  },
  {
    title: "adityapaul26/mythSh",
    displayTitle: "mythSh",
    href: "https://github.com/adityapaul26/mythSh",
    description: "A lightweight, lightning-fast custom terminal shell built entirely in low-level C. Designed for clean command-line executions.",
    tagline: "POSIX-Compliant Minimal Systems Shell",
    tech: ["C", "Systems Programming", "POSIX"],
    image: "/images/mythSh.png",
    gradient: "from-emerald-500 via-green-500 to-teal-500",
  },
  {
    title: "bimagic/bimagic",
    displayTitle: "Bimagic",
    href: "https://github.com/bimagic/bimagic",
    liveUrl: "https://bimagic.vercel.app/",
    description: "A powerful Bash-based Git automation helper engineered to simplify local repository pipelines and stage complex branch sequences.",
    tagline: "POSIX Shell Version Control Orchestrator",
    tech: ["Shell", "Bash", "Git Automation"],
    image: "/images/Bimagic.png",
    gradient: "from-yellow-500 via-orange-500 to-red-500",
  },
  {
    title: "adityapaul26/CPBuddy",
    displayTitle: "CPBuddy",
    href: "https://github.com/adityapaul26/CPBuddy",
    description: "A native Android hub written in Kotlin for algorithmic developers. Features continuous telemetry streams to aggregate contest calendars.",
    tagline: "Analytical Competitive Programming Portal",
    tech: ["Kotlin", "Android", "API Integration"],
    image: "/images/CPBuddy.png",
    gradient: "from-blue-500 via-indigo-500 to-purple-500",
  },
  {
    title: "adityapaul26/portfolio",
    displayTitle: "Portfolio",
    href: "https://github.com/adityapaul26/portfolio",
    liveUrl: "https://portfolio-adityapaul26.vercel.app/",
    description: "A high-contrast, linear developer canvas built with Next.js, TypeScript, and Tailwind CSS. Uses strict vertical scroll snap mechanisms.",
    tagline: "Full-Screen Telemetry Dashboard Frame",
    tech: ["TypeScript", "Next.js", "Tailwind CSS", "Framer Motion"],
    image: "/images/Portfolio.png",
    gradient: "from-gray-500 via-slate-500 to-zinc-500",
  },
  {
    title: "adityapaul26/inkspire",
    displayTitle: "Inkspire",
    href: "https://github.com/adityapaul26/inkspire",
    liveUrl: "https://inkspire-gt6m.onrender.com/",
    description: "A secure, server-rendered blogging framework built using the Node.js ecosystem. Implements MongoDB for structural persistence.",
    tagline: "Full-Stack MVC Content Portal",
    tech: ["Node.js", "Express", "MongoDB", "EJS"],
    image: "/images/Inkspire.png",
    gradient: "from-rose-500 via-pink-500 to-fuchsia-500",
  },
];

export default function ProjectsSection() {
  const handleLiveDemo = (url: string, title: string) => {
    if (title.toLowerCase().includes("portfolio")) {
      toast("Recursive Loop Warning", {
        description: "Damn! That would be recursive... Are you sure you want to go down the rabbit hole?",
        action: {
          label: "Proceed Anyway",
          onClick: () => window.open(url, "_blank", "noopener,noreferrer"),
        },
        duration: 5000,
      });
      return;
    }
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <TracingBeam className="px-6" itemCount={projects.length}>
      <div className="flex flex-col items-center gap-y-32 w-full py-12">
        {projects.map((project, index) => (
          <div
            key={index}
            className="flex flex-col md:flex-row items-center justify-center w-full group gap-8 md:gap-16"
          >
            <div className="flex-shrink-0">
              <PinContainer
                title={project.title}
                href={project.href}
                containerClassName="h-[24rem] w-[24rem] flex items-center justify-center"
                className="w-[20rem] h-[12rem]"
                image={project.image}
              >
                <div className="w-[20rem] h-[12rem]" />
              </PinContainer>
            </div>

            <div className="text-center md:text-left max-w-md px-4">
              <h3 className="font-bold text-2xl text-slate-100 mb-1 group-hover:text-purple-400 transition-colors">
                {project.displayTitle}
              </h3>
              <p className="text-sm text-purple-500/80 font-mono mb-3 uppercase tracking-widest">
                {project.tagline}
              </p>
              <p className="text-base text-slate-400 mb-6 leading-relaxed">
                {project.description}
              </p>
              
              <div className="flex flex-col sm:flex-row items-center md:justify-start gap-6 mb-8">
                {project.liveUrl && (
                  <button
                    onClick={() => handleLiveDemo(project.liveUrl!, project.displayTitle)}
                    className="group/btn relative inline-flex items-center justify-center px-8 py-2.5 font-mono text-xs font-bold text-white transition-all duration-300 rounded-full border border-purple-500/50 hover:border-purple-500 bg-purple-500/10 hover:bg-purple-500/20 active:scale-95 overflow-hidden shadow-[0_0_15px_rgba(168,85,247,0.15)] hover:shadow-[0_0_25px_rgba(168,85,247,0.4)]"
                  >
                    <span className="relative z-10 flex items-center gap-2 tracking-widest uppercase">
                      Live Demo
                      <svg
                        className="w-3.5 h-3.5 transition-transform group-hover/btn:translate-x-1"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M13 7l5 5m0 0l-5 5m5-5H6"
                        />
                      </svg>
                    </span>
                    <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover/btn:animate-[shimmer_2s_infinite]" />
                  </button>
                )}
                <a
                  href={project.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-500 hover:text-purple-400 transition-all duration-300 text-xs font-mono flex items-center gap-2 group/git uppercase tracking-widest"
                >
                  <svg
                    className="w-5 h-5 opacity-60 group-hover/git:opacity-100 transition-opacity"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.43.372.823 1.102.823 2.222 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                  </svg>
                  <span>Source Code</span>
                </a>
              </div>

              <div className="flex flex-wrap justify-center md:justify-start gap-2">
                {project.tech?.map((t, i) => (
                  <span
                    key={i}
                    className="text-xs font-mono bg-white/5 border border-white/10 px-3 py-1 rounded-full text-slate-300"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </TracingBeam>
  );
}


