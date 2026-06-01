"use client";
import { Terminal } from "@/components/ui/terminal";

export default function TerminalLoader({ onDone }: { onDone: () => void }) {
  return (
    <div className="fixed inset-0 z-[100] bg-black flex items-center justify-center p-6">
      <Terminal
        commands={[
          "init portfolio --version 1.0.0",
          "npm install skills projects experience",
          "start --env production",
        ]}
        outputs={{
          0: [
            "✔ System architecture verified.",
            "✔ Space fluid simulation loaded.",
            "✔ Ready for deployment.",
          ],
          1: ["added 42 skills, 12 projects in 1.2s"],
          2: ["✔ DONE. Portfolio is live."],
        }}
        typingSpeed={15}
        delayBetweenCommands={400}
        onDone={() => {
          setTimeout(onDone, 600); // Small delay before transition
        }}
      />
    </div>
  );
}
