"use client";

import React from "react";
import { Globe } from "./globe";
import TrueFocus from "./true-focus";
import { GithubLogo, LinkedinLogo, TwitterLogo, Envelope, MapPin } from "@phosphor-icons/react";

export default function Contact() {
  const socialLinks = [
    {
      name: "GitHub",
      icon: <GithubLogo size={24} />,
      url: "https://github.com/aditya",
      color: "hover:text-white",
    },
    {
      name: "LinkedIn",
      icon: <LinkedinLogo size={24} />,
      url: "https://linkedin.com/in/aditya",
      color: "hover:text-blue-400",
    },
    {
      name: "Twitter",
      icon: <TwitterLogo size={24} />,
      url: "https://twitter.com/aditya",
      color: "hover:text-sky-400",
    },
    {
      name: "Email",
      icon: <Envelope size={24} />,
      url: "mailto:contact@aditya.dev",
      color: "hover:text-purple-400",
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
      <div className="space-y-8">
        <div>
          <TrueFocus 
            sentence="LET'S CONNECT" 
            blurAmount={5}
            borderColor="#a855f7"
            glowColor="rgba(168, 85, 247, 0.6)"
            animationDuration={0.5}
            pauseBetweenAnimations={1}
          />
          <p className="text-zinc-400 mt-6 text-lg leading-relaxed max-w-md">
            I&apos;m always open to new opportunities, collaborations, or just a friendly chat about tech and design.
          </p>
        </div>

        <div className="space-y-4">
          <div className="flex items-center space-x-4 text-zinc-300">
            <div className="bg-purple-500/10 p-3 rounded-full">
              <Envelope size={20} className="text-purple-400" />
            </div>
            <div>
              <p className="text-xs text-zinc-500 uppercase font-bold tracking-widest">Email</p>
              <p className="font-mono">contact@aditya.dev</p>
            </div>
          </div>
          <div className="flex items-center space-x-4 text-zinc-300">
            <div className="bg-purple-500/10 p-3 rounded-full">
              <MapPin size={20} className="text-purple-400" />
            </div>
            <div>
              <p className="text-xs text-zinc-500 uppercase font-bold tracking-widest">Location</p>
              <p className="font-mono">Kolkata, West Bengal</p>
            </div>
          </div>
        </div>

        <div className="flex space-x-6">
          {socialLinks.map((link) => (
            <a
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`text-zinc-500 transition-all duration-300 transform hover:scale-110 ${link.color}`}
              aria-label={link.name}
            >
              {link.icon}
            </a>
          ))}
        </div>
      </div>

      <div className="relative h-[400px] w-full hidden md:block">
        <Globe className="scale-110" />
      </div>
    </div>
  );
}
