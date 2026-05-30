import InterstellarFluidHero from '@/src/components/Backgrounds&Visuals/Backgrounds/tsx/InterstellarFluidHero'
import MagicBento from '@/components/ui/magic-bento'

export default function Home() {
  return (
    <div className="bg-black">
      <InterstellarFluidHero />
      <section id="about" className="py-24 px-8 md:px-16 max-w-7xl mx-auto relative z-10">
        <div className="mb-16">
          <h2 className="text-4xl font-bold text-white mb-4 tracking-tighter uppercase font-mono">
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
    </div>
  )
}
