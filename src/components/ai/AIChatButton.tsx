"use client";

import { Bot, X } from "lucide-react";
import { useEffect, useState } from "react";

type Props = {
  isOpen: boolean;
  onClick: () => void;
};

export function AIChatButton({ isOpen, onClick }: Props) {
  const [showPulse, setShowPulse] = useState(true);

  // Stop the initial pulse animation after 8 seconds
  useEffect(() => {
    const timer = setTimeout(() => setShowPulse(false), 8000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="fixed bottom-4 right-4 z-50 flex flex-col items-end sm:bottom-5 sm:right-5 md:bottom-6 md:right-6">
      {/* Tooltip on hover */}
      <div className="pointer-events-none absolute -top-10 right-0 w-max origin-bottom-right scale-95 opacity-0 transition-all duration-300 group-hover:scale-100 group-hover:opacity-100 peer-hover:scale-100 peer-hover:opacity-100">
        <div className="rounded-lg bg-gray-900 px-3 py-1.5 text-xs font-semibold text-white shadow-lg">
          Ask Sai Vision AI
          <div className="absolute -bottom-1 right-5 h-2 w-2 rotate-45 bg-gray-900" />
        </div>
      </div>

      <button
        type="button"
        onClick={() => {
          setShowPulse(false);
          onClick();
        }}
        aria-label={isOpen ? "Close AI Assistant" : "Open AI Assistant"}
        aria-expanded={isOpen}
        aria-controls="ai-chat-panel"
        className="peer relative flex h-[52px] w-[52px] items-center justify-center rounded-full border border-orange-200/50 bg-gradient-to-br from-orange-600 to-orange-700 text-white shadow-[0_8px_30px_rgba(234,88,12,0.3)] outline-none ring-offset-2 transition-all duration-300 hover:scale-105 hover:shadow-[0_12px_40px_rgba(234,88,12,0.4)] focus-visible:ring-2 focus-visible:ring-orange-500 active:scale-95 md:h-14 md:w-14"
      >
        {/* Pulse ring for initial availability */}
        {showPulse && !isOpen && (
          <span className="absolute inset-0 block animate-ping rounded-full border-2 border-orange-400 opacity-60" />
        )}

        <div className="relative flex h-6 w-6 items-center justify-center md:h-7 md:w-7">
          <Bot
            className={`absolute h-6 w-6 stroke-[2px] transition-all duration-300 md:h-7 md:w-7 ${
              isOpen ? "rotate-90 scale-0 opacity-0" : "rotate-0 scale-100 opacity-100"
            }`}
          />
          <X
            className={`absolute h-6 w-6 stroke-[2.5px] transition-all duration-300 md:h-7 md:w-7 ${
              isOpen ? "rotate-0 scale-100 opacity-100" : "-rotate-90 scale-0 opacity-0"
            }`}
          />
        </div>
      </button>
    </div>
  );
}

