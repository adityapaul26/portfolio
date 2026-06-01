"use client";

import { useState, useEffect } from "react";
import InterstellarFluidHero from "@/src/components/Backgrounds&Visuals/Backgrounds/tsx/InterstellarFluidHero";
import MagicBento from "@/components/ui/magic-bento";
import ProjectsSection from "@/components/ui/projects";
import SkillMarquee from "@/components/ui/skill-marquee";
import { ScrollProgress } from "@/components/ui/scroll-progress";
import ClickSpark from "@/components/ui/click-spark";
import Experience from "@/components/ui/experience";
import Contact from "@/src/components/sections/Contact";
import { motion, AnimatePresence } from "motion/react";
import { HyperText } from "@/components/ui/hyper-text";
import TerminalLoader from "@/components/terminal-loader";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-100px" },
    transition: { duration: 0.8, ease: "easeOut" as const },
  };

  return (
    <>
      <AnimatePresence mode="wait">
        {isLoading && (
          <motion.div
            key="loader"
            exit={{ opacity: 0, scale: 1.1 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="fixed inset-0 z-[100]"
          >
            <TerminalLoader onDone={() => setIsLoading(false)} />
          </motion.div>
        )}
      </AnimatePresence>

      <ClickSpark
        sparkColor="#a855f7"
        sparkSize={10}
        sparkRadius={15}
        sparkCount={8}
        duration={400}
      >
        <div className={`bg-black ${isLoading ? "h-screen overflow-hidden" : ""}`}>
          <ScrollProgress />
          <InterstellarFluidHero />

          <motion.section
            id="about"
            className="py-16 md:py-24 px-6 md:px-16 max-w-7xl mx-auto relative z-10"
            {...fadeInUp}
          >
            <div className="mb-12 md:mb-16">
              <HyperText
                as="h2"
                className="text-3xl md:text-4xl font-bold text-white mb-4 tracking-tighter uppercase font-mono"
              >
                About Me
              </HyperText>
              <div className="h-1 w-20 bg-purple-500"></div>
            </div>

            <MagicBento
              textAutoHide={false}
              enableStars={true}
              enableSpotlight={true}
              enableBorderGlow={true}
              enableTilt={true}
              enableMagnetism={true}
              clickEffect={true}
              spotlightRadius={300}
              particleCount={12}
              glowColor="132, 0, 255"
            />
          </motion.section>

          {/* Skills Marquee Section */}
          <motion.section
            id="tech"
            className="py-12 relative z-10 overflow-hidden"
            {...fadeInUp}
          >
            <div className="max-w-7xl mx-auto px-6 md:px-16 mb-8 text-center flex flex-col items-center">
              <HyperText
                as="h2"
                className="text-3xl md:text-4xl font-bold text-white mb-4 tracking-tighter uppercase font-mono text-center"
              >
                Tech Stack
              </HyperText>
              <div className="h-1 w-20 bg-purple-500 mx-auto"></div>
            </div>
            <SkillMarquee />
          </motion.section>

          {/* Projects Section */}
          <motion.section
            id="projects"
            className="py-16 md:py-24 relative z-10"
            {...fadeInUp}
          >
            <div className="max-w-7xl mx-auto px-6 md:px-16 text-center flex flex-col items-center">
              <HyperText
                as="h2"
                className="text-3xl md:text-4xl font-bold text-white mb-4 tracking-tighter uppercase font-mono text-center"
              >
                Projects
              </HyperText>
              <div className="h-1 w-20 bg-purple-500 mx-auto mb-8"></div>
              <div className="mt-12">
                <ProjectsSection />
              </div>
            </div>
          </motion.section>

          {/* Experience Section */}
          <motion.section
            id="experience"
            className="py-16 md:py-24 relative z-10"
            {...fadeInUp}
          >
            <div className="max-w-7xl mx-auto px-6 md:px-16 text-center flex flex-col items-center">
              <HyperText
                as="h2"
                className="text-3xl md:text-4xl font-bold text-white mb-4 tracking-tighter uppercase font-mono text-center"
              >
                Experience
              </HyperText>
              <div className="h-1 w-20 bg-purple-500 mx-auto mb-8"></div>
              <Experience />
            </div>
          </motion.section>

          {/* Contact Section */}
          <motion.div {...fadeInUp}>
            <Contact />
          </motion.div>

          {/* Footer */}
          <footer className="py-12 border-t border-zinc-800 relative z-10">
            <div className="max-w-7xl mx-auto px-6 md:px-16 text-center">
              <p className="text-zinc-500 font-mono text-sm">
                &copy; {new Date().getFullYear()} Aditya. Built with Next.js & Three.js.
              </p>
            </div>
          </footer>
        </div>
      </ClickSpark>
    </>
  );
}
