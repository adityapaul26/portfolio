"use client";

import React from "react";
import { toast } from "sonner";

const Contact = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("TRANSMISSION_RECEIVED: Message sent successfully.");
  };

  return (
    <section
      id="contact"
      className="w-full h-screen snap-start bg-black flex flex-col items-center justify-center gap-12 px-8 md:px-24 relative font-mono text-zinc-300"
    >
      {/* Section Heading */}
      <div className="text-center z-10 mb-4">
        <h2 className="text-4xl md:text-5xl font-black text-white mb-4 tracking-tighter uppercase italic">
          Contact_Node
        </h2>
        <div className="h-1.5 w-24 bg-purple-500 mx-auto"></div>
      </div>

      <div className="w-full max-w-7xl flex flex-col md:flex-row items-center justify-center gap-12">
        {/* Left Column: Systems Control Panel */}
        <div className="w-full md:w-1/2 flex flex-col gap-6">
          <form
            onSubmit={handleSubmit}
            className="border border-zinc-800 bg-zinc-900/20 backdrop-blur-sm p-8 md:p-10 flex flex-col gap-8 relative overflow-hidden group shadow-[0_0_50px_-12px_rgba(168,85,247,0.2)]"
          >
            <div className="flex flex-col gap-6">
              <div className="flex flex-col gap-2">
                <label className="text-[11px] uppercase tracking-[0.3em] text-purple-400 font-bold">
                  origin:$
                </label>
                <input
                  type="text"
                  required
                  placeholder="USER_NAME"
                  className="bg-transparent border-b border-zinc-800 focus:border-purple-500 outline-none py-3 text-base transition-all placeholder:text-zinc-700 text-white"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-[11px] uppercase tracking-[0.3em] text-purple-400 font-bold">
                  channel:$
                </label>
                <input
                  type="email"
                  required
                  placeholder="SIGNAL_ADDRESS"
                  className="bg-transparent border-b border-zinc-800 focus:border-purple-500 outline-none py-3 text-base transition-all placeholder:text-zinc-700 text-white"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-[11px] uppercase tracking-[0.3em] text-purple-400 font-bold">
                  message:$
                </label>
                <textarea
                  required
                  placeholder="TRANSMISSION_BODY"
                  rows={4}
                  className="bg-transparent border-b border-zinc-800 focus:border-purple-500 outline-none py-3 text-base transition-all resize-none placeholder:text-zinc-700 text-white"
                />
              </div>
            </div>

            <button
              type="submit"
              className="self-start mt-4 px-8 py-3 bg-white text-black hover:bg-purple-400 transition-all text-xs font-black tracking-[0.4em] uppercase active:scale-95"
            >
              sys_call --transmit
            </button>
          </form>
        </div>

        {/* Right Column: Outbound Connection Protocols */}
        <div className="w-full md:w-1/3 flex flex-col gap-8">
          <div className="flex flex-col gap-6">
            <div className="group">
              <div className="flex items-center gap-4 mb-2">
                <span className="text-[10px] bg-purple-500/20 text-purple-400 px-2 py-0.5 border border-purple-500/30">ETH0</span>
                <span className="text-[10px] text-zinc-500 tracking-widest font-bold">{"// GITHUB"}</span>
              </div>
              <a
                href="https://github.com/adityapaul26"
                target="_blank"
                rel="noopener noreferrer"
                className="text-base md:text-lg border border-zinc-800 p-5 block hover:border-purple-500 hover:bg-zinc-900/50 transition-all truncate text-white font-medium"
              >
                github.com/adityapaul26
              </a>
            </div>

            <div className="group">
              <div className="flex items-center gap-4 mb-2">
                <span className="text-[10px] bg-purple-500/20 text-purple-400 px-2 py-0.5 border border-purple-500/30">ETH1</span>
                <span className="text-[10px] text-zinc-500 tracking-widest font-bold">{"// LINKEDIN"}</span>
              </div>
              <a
                href="https://linkedin.com/in/aditya-paul-b8881a31b"
                target="_blank"
                rel="noopener noreferrer"
                className="text-base md:text-lg border border-zinc-800 p-5 block hover:border-purple-500 hover:bg-zinc-900/50 transition-all truncate text-white font-medium"
              >
                aditya-paul-b8881a31b
              </a>
            </div>

            <div className="group">
              <div className="flex items-center gap-4 mb-2">
                <span className="text-[10px] bg-purple-500/20 text-purple-400 px-2 py-0.5 border border-purple-500/30">WLAN0</span>
                <span className="text-[10px] text-zinc-500 tracking-widest font-bold">{"// SECURE_MAIL"}</span>
              </div>
              <a
                href="mailto:adityapaul2603@gmail.com"
                className="text-base md:text-lg border border-zinc-800 p-5 block hover:border-purple-500 hover:bg-zinc-900/50 transition-all truncate text-white font-medium"
              >
                adityapaul2603@gmail.com
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Background/Corner Accents */}
      <div className="absolute top-12 left-12 text-[10px] text-zinc-700 tracking-[0.5em] hidden md:block uppercase font-bold">
        system_status: <span className="text-purple-500">online</span>
      </div>
      <div className="absolute bottom-12 right-12 text-[10px] text-zinc-700 tracking-[0.5em] hidden md:block uppercase font-bold">
        protocol: <span className="text-purple-500">secure_handshake</span>
      </div>
    </section>
  );
};

export default Contact;
