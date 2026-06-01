import InterstellarFluidHero from "@/src/components/Backgrounds&Visuals/Backgrounds/tsx/InterstellarFluidHero";
import MagicBento from "@/components/ui/magic-bento";
import ProjectsSection from "@/components/ui/projects";
import SkillMarquee from "@/components/ui/skill-marquee";
import { ScrollProgress } from "@/components/ui/scroll-progress";
import ClickSpark from "@/components/ui/click-spark";
import Experience from "@/components/ui/experience";

export default function Home() {
  return (
    <ClickSpark
      sparkColor="#a855f7"
      sparkSize={10}
      sparkRadius={15}
      sparkCount={8}
      duration={400}
    >
      <div className="bg-black">
        <ScrollProgress />
        <InterstellarFluidHero />

        <section
          id="about"
          className="py-16 md:py-24 px-6 md:px-16 max-w-7xl mx-auto relative z-10"
        >
          <div className="mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 tracking-tighter uppercase font-mono">
              About Me
            </h2>
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
          </section>

          {/* Skills Marquee Section */}
          <section className="py-12 relative z-10 overflow-hidden">
          <div className="max-w-7xl mx-auto px-6 md:px-16 mb-8">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 tracking-tighter uppercase font-mono text-center">
              Tech Stack
            </h2>
            <div className="h-1 w-20 bg-purple-500 mx-auto"></div>
          </div>
          <SkillMarquee />
          </section>

          {/* Projects Section */}
          <section className="py-16 md:py-24 relative z-10">
          <div className="max-w-7xl mx-auto px-6 md:px-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 tracking-tighter uppercase font-mono text-center">
              Projects
            </h2>
            <div className="h-1 w-20 bg-purple-500 mx-auto mb-8"></div>
            <div className="mt-12"><ProjectsSection /></div>
          </div>
        </section>

        {/* Experience Section */}
        <section className="py-16 md:py-24 relative z-10">
          <div className="max-w-7xl mx-auto px-6 md:px-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 tracking-tighter uppercase font-mono text-center">
              Experience
            </h2>
            <div className="h-1 w-20 bg-purple-500 mx-auto mb-8"></div>
            <Experience />
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-16 md:py-24 relative z-10">
          <div className="max-w-7xl mx-auto px-6 md:px-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 tracking-tighter uppercase font-mono text-center">
              Contact
            </h2>
            <div className="h-1 w-20 bg-purple-500 mx-auto mb-16"></div>
          </div>
        </section>

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
  );
}

