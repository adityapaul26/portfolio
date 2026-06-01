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
      className="w-full h-screen snap-start bg-black flex flex-col items-center justify-center gap-12 px-8 md:px-24 relative font-mono text-zinc-400"
    >
      {/* Section Heading */}
      <div className="text-center z-10 mb-4">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 tracking-tighter uppercase">
          Contact_Node
        </h2>
        <div className="h-1 w-20 bg-purple-500 mx-auto"></div>
      </div>

      <div className="w-full max-w-7xl flex flex-col md:flex-row items-center justify-center gap-12">
        {/* Left Column: Systems Control Panel */}
        <div className="w-full md:w-1/2 flex flex-col gap-6">
          <form
            onSubmit={handleSubmit}
            className="border border-neutral-900 bg-zinc-950/50 p-6 md:p-8 flex flex-col gap-6 relative overflow-hidden group"
          >
            <div className="flex flex-col gap-4">
              <div className="flex flex-col gap-2">
                <label className="text-[10px] uppercase tracking-[0.2em] text-zinc-600">
                  origin:$
                </label>
                <input
                  type="text"
                  required
                  placeholder="USER_NAME"
                  className="bg-transparent border-b border-neutral-900 focus:border-zinc-700 outline-none py-2 text-sm transition-colors placeholder:text-zinc-800"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-[10px] uppercase tracking-[0.2em] text-zinc-600">
                  channel:$
                </label>
                <input
                  type="email"
                  required
                  placeholder="SIGNAL_ADDRESS"
                  className="bg-transparent border-b border-neutral-900 focus:border-zinc-700 outline-none py-2 text-sm transition-colors placeholder:text-zinc-800"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-[10px] uppercase tracking-[0.2em] text-zinc-600">
                  message:$
                </label>
                <textarea
                  required
                  placeholder="TRANSMISSION_BODY"
                  rows={4}
                  className="bg-transparent border-b border-neutral-900 focus:border-zinc-700 outline-none py-2 text-sm transition-colors resize-none placeholder:text-zinc-800"
                />
              </div>
            </div>

            <button
              type="submit"
              className="self-start mt-4 px-6 py-2 border border-zinc-800 hover:bg-zinc-900 hover:text-zinc-100 transition-all text-xs tracking-[0.3em] uppercase active:scale-95"
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
                <span className="text-[10px] bg-zinc-900 px-2 py-0.5 text-zinc-500">ETH0</span>
                <span className="text-[10px] text-zinc-600 tracking-widest">{"// GITHUB"}</span>
              </div>
              <a
                href="https://github.com/adityapaul26"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm md:text-base border border-neutral-900 p-4 block hover:border-zinc-700 hover:bg-zinc-950 transition-all truncate"
              >
                https://github.com/adityapaul26
              </a>
            </div>

            <div className="group">
              <div className="flex items-center gap-4 mb-2">
                <span className="text-[10px] bg-zinc-900 px-2 py-0.5 text-zinc-500">ETH1</span>
                <span className="text-[10px] text-zinc-600 tracking-widest">{"// LINKEDIN"}</span>
              </div>
              <a
                href="https://linkedin.com/in/adityapaul26"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm md:text-base border border-neutral-900 p-4 block hover:border-zinc-700 hover:bg-zinc-950 transition-all truncate"
              >
                adityapaul26
              </a>
            </div>

            <div className="group">
              <div className="flex items-center gap-4 mb-2">
                <span className="text-[10px] bg-zinc-900 px-2 py-0.5 text-zinc-500">WLAN0</span>
                <span className="text-[10px] text-zinc-600 tracking-widest">{"// SECURE_MAIL"}</span>
              </div>
              <a
                href="mailto:adityapaul26@gmail.com"
                className="text-sm md:text-base border border-neutral-900 p-4 block hover:border-zinc-700 hover:bg-zinc-950 transition-all truncate"
              >
                adityapaul26@gmail.com
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Background/Corner Accents */}
      <div className="absolute top-8 left-8 text-[8px] text-zinc-800 tracking-[0.5em] hidden md:block uppercase">
        system_status: ready
      </div>
      <div className="absolute bottom-8 right-8 text-[8px] text-zinc-800 tracking-[0.5em] hidden md:block uppercase">
        protocol: secure_handshake
      </div>
    </section>
  );
};

export default Contact;
