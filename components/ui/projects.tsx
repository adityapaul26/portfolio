"use client";
import React from "react";
import { PinContainer } from "@/components/ui/3d-pin";

// Define a type for project data
interface Project {
  title: string;
  href: string;
  description: string;
  gradient?: string; // optional custom gradient class
}

// Sample data for six projects – replace with your actual projects
const projects: Project[] = [
  {
    title: "Project One",
    href: "https://example.com/project1",
    description: "Description for project one.",
    gradient: "bg-gradient-to-br from-pink-500 via-purple-500 to-indigo-500",
  },
  {
    title: "Project Two",
    href: "https://example.com/project2",
    description: "Description for project two.",
    gradient: "bg-gradient-to-br from-emerald-500 via-green-500 to-teal-500",
  },
  {
    title: "Project Three",
    href: "https://example.com/project3",
    description: "Description for project three.",
    gradient: "bg-gradient-to-br from-yellow-500 via-orange-500 to-red-500",
  },
  {
    title: "Project Four",
    href: "https://example.com/project4",
    description: "Description for project four.",
    gradient: "bg-gradient-to-br from-blue-500 via-indigo-500 to-purple-500",
  },
  {
    title: "Project Five",
    href: "https://example.com/project5",
    description: "Description for project five.",
    gradient: "bg-gradient-to-br from-gray-500 via-slate-500 to-zinc-500",
  },
  {
    title: "Project Six",
    href: "https://example.com/project6",
    description: "Description for project six.",
    gradient: "bg-gradient-to-br from-rose-500 via-pink-500 to-fuchsia-500",
  },
];

export default function ProjectsSection() {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 p-8 items-center justify-items-center">
      {projects.map((project, index) => (
        <PinContainer
          key={index}
          title={project.title}
          href={project.href}
          containerClassName={`block ${project.gradient} w-80 h-80 rounded-lg`}
        >
          <div className="flex flex-col p-4 space-y-2 text-slate-100/80">
            <h3 className="font-bold text-lg text-slate-100">{project.title}</h3>
            <p className="text-sm">{project.description}</p>
          </div>
        </PinContainer>
      ))}
    </section>
  );
}
