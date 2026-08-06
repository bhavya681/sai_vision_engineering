"use client";

import { Bot, X } from "lucide-react";
import { useEffect, useState } from "react";

type Props = {
  isOpen: boolean;
  onClick: () => void;
};

export function AIChatButton({ isOpen, onClick }: Props) {
  const [showPulse, setShowPulse] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setShowPulse(false), 8000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="fixed bottom-4 right-4 z-[100] flex flex-col items-end sm:bottom-5 sm:right-5 lg:bottom-6 lg:right-6">
      {/* Tooltip */}
      <div className="pointer-events-none absolute -top-11 right-0 origin-bottom-right scale-95 rounded-lg bg-gray-900 px-3 py-2 text-xs font-semibold text-white opacity-0 shadow-xl transition-all duration-200 peer-hover:scale-100 peer-hover:opacity-100">
        Ask Sai Vision AI
        <div className="absolute -bottom-1 right-5 h-2 w-2 rotate-45 bg-gray-900" />
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
        className="peer relative flex h-14 w-14 items-center justify-center rounded-full border border-orange-500/30 bg-gradient-to-br from-orange-500 via-orange-600 to-orange-700 text-white shadow-[0_10px_30px_rgba(234,88,12,0.35)] transition-all duration-300 hover:-translate-y-1 hover:scale-105 hover:shadow-[0_16px_40px_rgba(234,88,12,0.45)] active:translate-y-0 active:scale-95 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-orange-300 md:h-16 md:w-16"
      >
        {/* Initial pulse */}
        {showPulse && !isOpen && (
          <>
            <span className="absolute inset-0 rounded-full border-2 border-orange-400 animate-ping opacity-40" />
            <span className="absolute inset-0 rounded-full border border-orange-300 opacity-50" />
          </>
        )}

        {/* Icon */}
        <div className="relative flex h-7 w-7 items-center justify-center">
          <Bot
            className={`absolute transition-all duration-300 ${
              isOpen
                ? "scale-0 rotate-90 opacity-0"
                : "scale-100 rotate-0 opacity-100"
            }`}
            size={28}
            strokeWidth={2.2}
          />

          <X
            className={`absolute transition-all duration-300 ${
              isOpen
                ? "scale-100 rotate-0 opacity-100"
                : "scale-0 -rotate-90 opacity-0"
            }`}
            size={28}
            strokeWidth={2.5}
          />
        </div>
      </button>
    </div>
  );
}