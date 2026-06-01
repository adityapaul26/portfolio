"use client";

import React, { useRef, useEffect, useState } from "react";
import {
  Renderer,
  Program,
  Mesh,
  Triangle,
  Vec2,
  RenderTarget,
  Color,
} from "ogl";
import AsciiArtDemo from "@/components/ascii-art-demo";
import { ScrollProgress } from "@/components/ui/scroll-progress";

// ----------------------------------------------------------------------
// COMPONENT: INTERSTELLAR FLUID (Simulation Logic)
// ----------------------------------------------------------------------

interface InterstellarProps extends React.HTMLAttributes<HTMLDivElement> {
  baseColor?: [number, number, number]; // RGB array 0-1
  glowColor?: [number, number, number]; // RGB array 0-1
  dissipation?: number; // How fast the gas fades (0.95 - 0.99)
  velocityDissipation?: number; // How fast movement stops
  interactive?: boolean;
}

const InterstellarFluid: React.FC<InterstellarProps> = ({
  baseColor = [0.05, 0.05, 0.2], // Deep Space Blue
  glowColor = [0.8, 0.4, 1.0], // Nebula Violet
  dissipation = 0.97,
  velocityDissipation = 0.98,
  interactive = true,
  ...props
}) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;
    const container = containerRef.current;

    // 1. Setup Renderer
    const renderer = new Renderer({
      alpha: false, // Opaque for space background
      dpr: Math.min(window.devicePixelRatio, 2),
    });
    const gl = renderer.gl;

    // Enable Floating Point Textures (Critical for HDR colors)
    const ext = gl.getExtension("OES_texture_float");
    const extLinear = gl.getExtension("OES_texture_float_linear");

    // --------------------------------------------------------
    // SHADER: SIMULATION (Physics)
    // --------------------------------------------------------
    const simFragment = /* glsl */ `
            precision highp float;
            
            uniform sampler2D uTexture; // Previous frame
            uniform float uTime;
            uniform vec2 uMouse;
            uniform float uMouseActive;
            uniform vec2 uResolution;
            uniform float uAspect;
            uniform float uDissipation;
            uniform vec3 uBaseColor;
            uniform vec3 uGlowColor;
            
            varying vec2 vUv;

            // --- CURL NOISE (The "Turbulence") ---
            vec3 mod289(vec3 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
            vec2 mod289(vec2 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
            vec3 permute(vec3 x) { return mod289(((x*34.0)+1.0)*x); }

            float snoise(vec2 v) {
                const vec4 C = vec4(0.211324865405187, 0.366025403784439, -0.577350269189626, 0.024390243902439);
                vec2 i  = floor(v + dot(v, C.yy) );
                vec2 x0 = v -   i + dot(i, C.xx);
                vec2 i1;
                i1 = (x0.x > x0.y) ? vec2(1.0, 0.0) : vec2(0.0, 1.0);
                vec4 x12 = x0.xyxy + C.xxzz;
                x12.xy -= i1;
                i = mod289(i);
                vec3 p = permute( permute( i.y + vec3(0.0, i1.y, 1.0 )) + i.x + vec3(0.0, i1.x, 1.0 ));
                vec3 m = max(0.5 - vec3(dot(x0,x0), dot(x12.xy,x12.xy), dot(x12.zw,x12.zw)), 0.0);
                m = m*m ;
                m = m*m ;
                vec3 x = 2.0 * fract(p * C.www) - 1.0;
                vec3 h = abs(x) - 0.5;
                vec3 ox = floor(x + 0.5);
                vec3 a0 = x - ox;
                m *= 1.79284291400159 - 0.85373472095314 * ( a0*a0 + h*h );
                vec3 g;
                g.x  = a0.x  * x0.x  + h.x  * x0.y;
                g.yz = a0.yz * x12.xz + h.yz * x12.yw;
                return 130.0 * dot(m, g);
            }

            vec2 curl(vec2 p) {
                float eps = 0.001;
                float n1, n2, a, b;
                n1 = snoise(p + vec2(0, eps));
                n2 = snoise(p - vec2(0, eps));
                a = (n1 - n2) / (2.0 * eps);
                n1 = snoise(p + vec2(eps, 0));
                n2 = snoise(p - vec2(eps, 0));
                b = (n1 - n2) / (2.0 * eps);
                return vec2(a, -b);
            }

            void main() {
                vec2 uv = vUv;
                
                // 1. Advection (Move the gas)
                // Large scale curl noise for "Cosmic" feel
                vec2 flow = curl(uv * 2.0 + uTime * 0.05);
                
                // Move pixels along the flow
                vec2 newUv = uv - flow * 0.003; 
                
                // Slight "Zoom Out" to create a void effect at edges
                newUv -= 0.5;
                newUv *= 0.995; 
                newUv += 0.5;
                
                vec4 advected = texture2D(uTexture, newUv);
                
                // 2. Mouse Injection (Thrust)
                vec2 mouse = uMouse;
                mouse.x *= uAspect;
                vec2 curUv = uv;
                curUv.x *= uAspect;
                
                float dist = length(curUv - mouse);
                // Sharp brush for star-like injection
                float brush = smoothstep(0.05, 0.0, dist) * uMouseActive;
                
                // Inject "Glow Color" (Nebula) mixed with White (Hot Star)
                vec3 injectColor = mix(uGlowColor, vec3(1.0), 0.5) * brush * 3.0;
                
                // 3. Composition
                vec3 finalColor = advected.rgb + injectColor;
                
                // 4. Decay (Vacuum of space)
                finalColor *= uDissipation;
                
                // Ensure deep black background (minimum value)
                // finalColor = max(finalColor, uBaseColor * 0.1); 

                gl_FragColor = vec4(finalColor, 1.0);
            }
        `;

    // --------------------------------------------------------
    // SHADER: DISPLAY (Color Grading)
    // --------------------------------------------------------
    const displayFragment = /* glsl */ `
            precision highp float;
            uniform sampler2D uTexture;
            varying vec2 vUv;
            uniform vec3 uBaseColor;

            void main() {
                vec4 color = texture2D(uTexture, vUv);
                
                // "Space" Grading
                // Crush blacks to create deep void
                vec3 c = color.rgb;
                
                // Add the base tint (Ambient starlight)
                c += uBaseColor * 0.1;
                
                // Gamma correction for contrast
                c = pow(c, vec3(1.4)); 
                
                // Dithering (prevent banding in the darkness)
                float noise = fract(sin(dot(vUv, vec2(12.9898, 78.233))) * 43758.5453);
                c += noise * 0.02;

                gl_FragColor = vec4(c, 1.0);
            }
        `;

    const geometry = new Triangle(gl);

    // Programs
    const simProgram = new Program(gl, {
      vertex: `attribute vec2 uv; attribute vec2 position; varying vec2 vUv; void main() { vUv = uv; gl_Position = vec4(position, 0, 1); }`,
      fragment: simFragment,
      uniforms: {
        uTexture: { value: null },
        uTime: { value: 0 },
        uMouse: { value: new Vec2(0, 0) },
        uMouseActive: { value: 0 },
        uResolution: { value: new Vec2(0, 0) },
        uAspect: { value: 1 },
        uDissipation: { value: dissipation },
        uBaseColor: { value: new Color(baseColor) },
        uGlowColor: { value: new Color(glowColor) },
      },
    });

    const displayProgram = new Program(gl, {
      vertex: `attribute vec2 uv; attribute vec2 position; varying vec2 vUv; void main() { vUv = uv; gl_Position = vec4(position, 0, 1); }`,
      fragment: displayFragment,
      uniforms: {
        uTexture: { value: null },
        uBaseColor: { value: new Color(baseColor) },
      },
    });

    const simMesh = new Mesh(gl, { geometry, program: simProgram });
    const displayMesh = new Mesh(gl, { geometry, program: displayProgram });

    // FBOs (Double Buffering)
    // We use half-float textures for HDR color support
    const fboArgs = {
      width: window.innerWidth >> 1,
      height: window.innerHeight >> 1,
      type: (gl as any).HALF_FLOAT || (gl as any).FLOAT || 36193,
      internalFormat: (gl as any).RGBA16F || gl.RGBA,
      minFilter: gl.LINEAR,
      magFilter: gl.LINEAR,
    };
    let fboRead = new RenderTarget(gl, fboArgs);
    let fboWrite = new RenderTarget(gl, fboArgs);

    // Input Handling
    const mouse = new Vec2(0, 0);
    const targetMouse = new Vec2(0, 0);
    let isMoving = 0;

    function resize() {
      const w = container.offsetWidth;
      const h = container.offsetHeight;
      renderer.setSize(w, h);

      // Resize FBOs
      const fboW = w >> 1;
      const fboH = h >> 1;
      fboRead.setSize(fboW, fboH);
      fboWrite.setSize(fboW, fboH);

      simProgram.uniforms.uResolution.value.set(w, h);
      simProgram.uniforms.uAspect.value = w / h;
    }
    window.addEventListener("resize", resize);
    resize();

    function updateMouse(x: number, y: number) {
      targetMouse.set(x / gl.canvas.width, 1.0 - y / gl.canvas.height);
      isMoving = 1.0;
    }

    if (interactive) {
      window.addEventListener("mousemove", (e) =>
        updateMouse(e.clientX, e.clientY),
      );
      window.addEventListener("touchmove", (e) =>
        updateMouse(e.touches[0].clientX, e.touches[0].clientY),
      );
    }

    let animationId: number;
    let stopTimer: NodeJS.Timeout;

    function update(t: number) {
      animationId = requestAnimationFrame(update);
      const time = t * 0.001;

      // Smooth Mouse
      mouse.lerp(targetMouse, 0.15);

      // Mouse "Stop" logic (decay activity when stopped)
      if (Math.abs(mouse.x - targetMouse.x) < 0.001) {
        isMoving *= 0.9; // Fast decay
      }

      // Update Uniforms
      simProgram.uniforms.uTime.value = time;
      simProgram.uniforms.uMouse.value.copy(mouse);
      simProgram.uniforms.uMouseActive.value = isMoving;
      simProgram.uniforms.uTexture.value = fboRead.texture;

      // Prop Updates
      simProgram.uniforms.uDissipation.value = dissipation;

      // Ping-Pong Rendering
      renderer.render({ scene: simMesh, target: fboWrite });
      displayProgram.uniforms.uTexture.value = fboWrite.texture;
      renderer.render({ scene: displayMesh });

      // Swap
      const temp = fboRead;
      fboRead = fboWrite;
      fboWrite = temp;
    }
    animationId = requestAnimationFrame(update);
    container.appendChild(gl.canvas);

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", resize);
      gl.getExtension("WEBGL_lose_context")?.loseContext();
    };
  }, [baseColor, glowColor, dissipation, interactive]);

  return <div ref={containerRef} className="w-full h-full" {...props} />;
};

// ----------------------------------------------------------------------
// PAGE: MODERN INTERSTELLAR HERO (Personalized for Aditya Paul)
// ----------------------------------------------------------------------

export default function InterstellarFluidHero() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("about");

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Experience", href: "#experience" },
    { name: "Contact", href: "#contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["about", "projects", "experience", "contact"];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;

          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(section);
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <main className="relative w-full h-screen overflow-hidden bg-black font-sans selection:bg-purple-500 selection:text-white">
      {/* 
               LAYER 0: SIMULATION 
               Using the reusable component with Space Colors
            */}
      <div className="absolute inset-0 z-0">
        <InterstellarFluid
          baseColor={[0.0, 0.0, 0.05]} // Void Black/Blue
          glowColor={[0.6, 0.2, 1.0]} // Singularity Violet
          dissipation={0.985} // Long lingering tails
          interactive={true}
        />
      </div>

      {/* 
               LAYER 1: TEXTURE OVERLAY
               Adds a subtle grid or scanline to make it feel technical
            */}
      <div className="absolute inset-0 z-10 pointer-events-none opacity-20 bg-[size:50px_50px] bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)]" />

      {/* Vignette */}
      <div className="absolute inset-0 z-10 pointer-events-none bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.6)_100%)]" />

      {/* 
               LAYER 2: UI CONTENT 
               Modern, sharp, high-contrast
            */}
      <div className="relative z-20 flex flex-col justify-between w-full h-full text-white pointer-events-none">
        {/* Navbar */}
        <header className="fixed top-0 left-0 w-full flex justify-between items-center p-4 md:px-12 md:py-4 z-50 pointer-events-auto bg-black/40 backdrop-blur-xl border-b border-white/5 shadow-2xl">
          <div className="flex flex-col">
            <span className="text-[8px] font-bold tracking-[0.2em] text-purple-400 mb-0.5">
              PORTFOLIO_V1.0
            </span>
            <h2 className="text-lg md:text-xl font-black tracking-tighter uppercase font-mono bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
              ADITYA PAUL
            </h2>
          </div>

          <nav className="hidden md:flex items-center gap-10">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`text-[11px] font-mono tracking-[0.2em] uppercase transition-all duration-300 relative group font-bold ${
                  activeSection === link.href.substring(1)
                    ? "text-purple-400"
                    : "text-gray-300 hover:text-purple-400"
                }`}
              >
                {link.name}
                <span
                  className={`absolute -bottom-1 left-0 h-px bg-purple-500 transition-all duration-300 ${
                    activeSection === link.href.substring(1)
                      ? "w-full"
                      : "w-0 group-hover:w-full"
                  }`}
                ></span>
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            <a
              href="#"
              className="hidden sm:block border border-purple-500/30 hover:border-purple-500 hover:bg-purple-500/10 px-5 py-1.5 text-[9px] font-mono tracking-widest uppercase transition-all duration-300 backdrop-blur-md rounded-sm"
            >
              [ Resume ]
            </a>
            <button
              className="md:hidden text-white p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <div className="w-6 h-5 flex flex-col justify-between">
                <span
                  className={`h-0.5 w-full bg-white transition-all ${isMenuOpen ? "rotate-45 translate-y-2" : ""}`}
                ></span>
                <span
                  className={`h-0.5 w-full bg-white transition-all ${isMenuOpen ? "opacity-0" : ""}`}
                ></span>
                <span
                  className={`h-0.5 w-full bg-white transition-all ${isMenuOpen ? "-rotate-45 -translate-y-2.5" : ""}`}
                ></span>
              </div>
            </button>
          </div>
          <ScrollProgress className="absolute top-full" />
        </header>

        {/* Mobile Menu Overlay */}
        {isMenuOpen && (
          <div className="fixed inset-0 z-40 bg-black/95 backdrop-blur-2xl flex flex-col items-center justify-center pointer-events-auto md:hidden">
            <nav className="flex flex-col items-center gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className={`text-2xl font-mono tracking-[0.3em] uppercase transition-all duration-300 font-bold ${
                    activeSection === link.href.substring(1)
                      ? "text-purple-400"
                      : "text-white hover:text-purple-400"
                  }`}
                >
                  {link.name}
                </a>
              ))}
              <a
                href="#"
                className="mt-4 border border-purple-500 px-8 py-3 text-xs font-mono tracking-widest uppercase transition-all duration-300 rounded-sm"
              >
                [ Resume ]
              </a>
            </nav>
          </div>
        )}

        {/* Hero Content */}
        <div className="flex flex-col lg:flex-row items-center justify-between w-full max-w-7xl gap-8 lg:gap-12 flex-1 p-6 md:p-16 pt-28 md:pt-32 mx-auto overflow-y-auto lg:overflow-hidden">
          <div className="flex flex-col items-center lg:items-start max-w-2xl text-center lg:text-left">
            <div className="overflow-hidden mb-4 md:mb-6">
              <div className="inline-flex items-center gap-3 px-3 py-1 border border-purple-500/30 bg-purple-900/10 backdrop-blur-md rounded-none">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-purple-500"></span>
                </span>
                <span className="text-[8px] md:text-[10px] font-mono uppercase tracking-widest text-purple-200">
                  Status: Available for Work
                </span>
              </div>
            </div>

            <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-black tracking-tighter leading-[0.9] mix-blend-overlay font-mono uppercase italic">
              ADITYA
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-200 to-transparent">
                PAUL
              </span>
            </h1>

            <div className="h-px w-24 md:w-32 bg-white/30 mt-4 mb-6 md:mb-8 mx-auto lg:mx-0"></div>

            <p className="max-w-md text-xs sm:text-sm md:text-lg text-gray-400 leading-relaxed font-light font-mono">
              Full-stack engineer specializing in building high-performance
              digital experiences. Crafting the future of the web with code and
              creativity.
            </p>

            <div className="mt-8 md:mt-12 pointer-events-auto flex flex-wrap justify-center lg:justify-start gap-4 md:gap-6">
              <a
                href="#projects"
                className="bg-white text-black px-6 md:px-8 py-3 md:py-4 font-bold text-[10px] md:text-xs uppercase tracking-widest hover:bg-purple-300 transition-colors inline-block"
              >
                View Projects
              </a>
              <a
                href="#contact"
                className="text-white border-b border-white/30 pb-1 text-[10px] md:text-xs uppercase tracking-widest hover:border-white transition-colors inline-block"
              >
                Get in Touch
              </a>
            </div>
          </div>

          <div className="w-full max-w-xs sm:max-w-md lg:max-w-lg pointer-events-auto mt-8 lg:mt-0">
            <AsciiArtDemo />
          </div>
        </div>

        {/* Footer Data - Fixed at bottom */}
        <div className="relative lg:fixed bottom-0 left-0 w-full flex flex-col sm:flex-row justify-between items-center sm:items-end p-6 md:px-16 md:py-8 text-[8px] md:text-[10px] font-mono text-gray-500 uppercase tracking-widest pointer-events-none z-40 gap-4 sm:gap-0">
          <div className="flex flex-col gap-1 md:gap-2 text-center sm:text-left">
            <span>LAT: 28.6139° N</span>
            <span>LON: 77.2090° E</span>
          </div>
          <div className="flex flex-col items-center sm:items-end gap-1">
            <span className="hidden sm:block">{"// SCROLL_TO_EXPLORE"}</span>
            <span className="text-center sm:text-right">
              © 2026 ADITYA PAUL. ALL RIGHTS RESERVED
            </span>
          </div>
        </div>
      </div>
    </main>
  );
}
