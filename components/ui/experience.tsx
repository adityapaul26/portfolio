"use client";

import React from "react";

const experience = {
  company: "GirlScript Summer of Code",
  role: "Project Admin @ AlgoScope",
  period: "May 2026 - Present",
  description:
    "Orchestrating the development of AlgoScope, a high-fidelity algorithm visualization engine, during GSSoC '26.",
  highlights: [
    "Reviewed and merged 150+ Pull Requests, ensuring high code quality and architectural consistency.",
    "Managed a diverse community of 75+ contributors to build complex visualization modules.",
    "Project metrics: 110+ Forks, 37+ Stars, and growing rapidly.",
  ],
  stats: [
    { label: "PRs Merged", value: "150+" },
    { label: "Forks", value: "110+" },
    { label: "Stars", value: "37+" },
    { label: "Contributors", value: "75+" },
  ],
};

export default function Experience() {
  return (
    <div className="w-full max-w-3xl mx-auto py-12 px-4">
      {/* Timeline container */}
      <div className="relative border-l border-purple-600 ml-4">
        {/* Experience entry */}
        <div className="mb-12 ml-6">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between">
            <div className="flex-1">
              <span
                className="text-sm font-mono font-bold text-purple-400 uppercase"
                style={{ letterSpacing: "0.3em" }}
              >
                {experience.period}
              </span>
              <h3 className="text-2xl md:text-3xl font-black text-white uppercase italic mt-1">
                {experience.role}
              </h3>
              <p className="text-lg font-mono font-bold text-zinc-400 mt-1">
                {experience.company}
              </p>
              <p className="mt-2 text-sm text-zinc-300">
                {experience.description}
              </p>
            </div>
            <div className="flex space-x-4 mt-4 md:mt-0">
              {experience.stats.map((stat) => (
                <div key={stat.label} className="text-center">
                  <span className="block text-sm font-mono font-bold text-purple-300">
                    {stat.value}
                  </span>
                  <span className="block text-xs text-zinc-500">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
          <ul className="mt-4 list-disc list-inside space-y-2 text-zinc-400">
            {experience.highlights.map((h, i) => (
              <li key={i} className="text-sm">
                {h}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
