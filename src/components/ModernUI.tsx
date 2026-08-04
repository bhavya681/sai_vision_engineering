"use client";

import React, { useState } from "react";
import { Search, Sparkles } from "lucide-react";

export function ModernInput({ placeholder = "Search for anything..." }: { placeholder?: string }) {
  return (
    <div className="relative group w-full max-w-md">
      <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-xl blur opacity-30 group-hover:opacity-60 transition duration-500 group-hover:duration-200"></div>
      <div className="relative flex items-center bg-zinc-900/90 backdrop-blur-xl border border-zinc-800 rounded-xl overflow-hidden p-1 shadow-2xl">
        <div className="pl-3 text-zinc-400 group-focus-within:text-purple-400 transition-colors">
          <Search size={18} />
        </div>
        <input
          type="text"
          placeholder={placeholder}
          className="w-full bg-transparent border-none text-white px-3 py-2.5 outline-none placeholder:text-zinc-600 focus:ring-0 text-sm font-medium"
        />
        <button className="bg-zinc-800 hover:bg-zinc-700 text-zinc-300 p-2 rounded-lg transition-colors border border-zinc-700 shadow-sm mr-1">
          <Sparkles size={16} className="text-pink-400" />
        </button>
      </div>
    </div>
  );
}

export function ModernToggle({
  label = "Enable Advanced AI",
  defaultChecked = false,
}: {
  label?: string;
  defaultChecked?: boolean;
}) {
  const [enabled, setEnabled] = useState(defaultChecked);

  return (
    <label className="flex items-center gap-4 cursor-pointer group">
      <div className="relative">
        <input
          type="checkbox"
          className="sr-only"
          checked={enabled}
          onChange={() => setEnabled(!enabled)}
        />
        <div
          className={`block w-14 h-8 rounded-full transition-all duration-300 ease-in-out shadow-inner ${
            enabled ? "bg-gradient-to-r from-purple-600 to-pink-600" : "bg-zinc-800"
          } border border-zinc-700/50 group-hover:border-zinc-500`}
        ></div>
        <div
          className={`absolute left-1 top-1 w-6 h-6 rounded-full transition-all duration-300 ease-spring shadow-lg flex items-center justify-center ${
            enabled
              ? "transform translate-x-6 bg-white"
              : "bg-zinc-400"
          }`}
        >
          {enabled && (
            <div className="w-1.5 h-1.5 rounded-full bg-purple-600 shadow-[0_0_8px_rgba(168,85,247,0.8)]"></div>
          )}
        </div>
      </div>
      <span
        className={`font-medium tracking-wide transition-colors duration-300 ${
          enabled ? "text-purple-50 text-glow" : "text-zinc-500"
        }`}
      >
        {label}
      </span>
    </label>
  );
}

export function ModernUIDemo() {
  return (
    <div className="min-h-[400px] flex flex-col items-center justify-center gap-12 p-12 bg-black rounded-2xl border border-zinc-800/60 shadow-[inset_0_0_100px_rgba(0,0,0,0.8)] relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-[-20%] left-[-10%] w-96 h-96 bg-purple-600/20 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-[-20%] right-[-10%] w-96 h-96 bg-blue-600/20 rounded-full blur-[120px] pointer-events-none"></div>
      
      <div className="text-center space-y-2 z-10">
        <h3 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-zinc-500">
          Next-Gen UI Elements
        </h3>
        <p className="text-zinc-500 text-sm">Illustrative, modern, and highly interactive.</p>
      </div>

      <div className="flex flex-col items-center gap-8 w-full z-10">
        <ModernInput />
        <ModernToggle />
      </div>
    </div>
  );
}
