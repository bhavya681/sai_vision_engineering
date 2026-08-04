"use client";

import { Minus, Bot, X } from "lucide-react";

type Props = {
  onClose: () => void;
};

export function AIChatHeader({ onClose }: Props) {
  return (
    <header className="flex shrink-0 items-center justify-between border-b border-gray-100 bg-white px-4 py-3 sm:px-5 shadow-[0_4px_20px_-10px_rgba(0,0,0,0.05)] z-10 relative">
      <div className="flex items-center gap-3">
        <div className="relative flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-orange-500 to-orange-600 shadow-md">
          <Bot className="h-5 w-5 text-white" />
          <span className="absolute -bottom-0.5 -right-0.5 h-3 w-3 rounded-full border-2 border-white bg-green-500" />
        </div>
        <div>
          <h2 className="font-display text-sm font-bold leading-tight text-gray-900 sm:text-base">
            AI Customer Support
          </h2>
          <p className="text-[0.65rem] font-medium text-gray-500 sm:text-xs">
            Usually replies instantly
          </p>
        </div>
      </div>
      <div className="flex items-center gap-1 text-gray-400">
        <button
          type="button"
          onClick={onClose}
          className="flex h-8 w-8 items-center justify-center rounded-lg transition-colors hover:bg-gray-100 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-500"
          aria-label="Minimize chat"
        >
          <Minus className="h-4 w-4" />
        </button>
        <button
          type="button"
          onClick={onClose}
          className="flex h-8 w-8 items-center justify-center rounded-lg transition-colors hover:bg-gray-100 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 md:hidden"
          aria-label="Close chat"
        >
          <X className="h-4 w-4" />
        </button>
      </div>
    </header>
  );
}
