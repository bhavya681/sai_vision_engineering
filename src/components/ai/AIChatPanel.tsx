"use client";

import { useEffect, useRef, useState } from "react";
import { Send } from "lucide-react";
import { AIChatHeader } from "./AIChatHeader";
import { AIMessage } from "./AIMessage";
import { AIMessageTyping } from "./AIMessageTyping";
import { AIQuickActions } from "./AIQuickActions";
import { ChatMessage, getAssistantResponse, WELCOME_MESSAGE } from "@/data/assistant-knowledge";

type Props = {
  isOpen: boolean;
  onClose: () => void;
};

export function AIChatPanel({ isOpen, onClose }: Props) {
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Initialize welcome message once when opened
  useEffect(() => {
    if (isOpen && messages.length === 0) {
      setMessages([WELCOME_MESSAGE]);
    }
    if (isOpen) {
      // Small delay to focus input for better UX, avoiding immediate keyboard jump on mobile
      setTimeout(() => {
        // Only auto-focus on non-touch devices to prevent jarring keyboard popups
        if (window.matchMedia("(hover: hover) and (pointer: fine)").matches) {
          inputRef.current?.focus();
        }
      }, 300);
    }
  }, [isOpen, messages.length]);

  // Auto-scroll
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isTyping]);

  const handleSend = (text: string) => {
    const trimmed = text.trim();
    if (!trimmed) return;

    const userMsg: ChatMessage = { id: Date.now().toString(), role: "user", content: trimmed };
    setMessages((prev) => [...prev, userMsg]);
    setInput("");
    setIsTyping(true);

    // Simulate network delay
    setTimeout(() => {
      const responseText = getAssistantResponse(trimmed);
      const assistantMsg: ChatMessage = {
        id: (Date.now() + 1).toString(),
        role: "assistant",
        content: responseText,
      };
      setMessages((prev) => [...prev, assistantMsg]);
      setIsTyping(false);
    }, 1000 + Math.random() * 500); // 1s - 1.5s delay
  };

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    handleSend(input);
  };

  if (!isOpen) return null;

  // Make the border radius consistently rounded at the top for all screen sizes
  return (
    <div
      className="fixed bottom-0 left-0 right-0 z-50 flex h-[70vh] max-h-[600px] flex-col overflow-hidden rounded-t-2xl bg-[#fafafa] shadow-[0_-8px_40px_rgba(0,0,0,0.12)] ring-1 ring-black/5 sm:bottom-24 sm:left-auto sm:right-6 sm:h-[480px] sm:w-[400px] sm:rounded-2xl"
      role="dialog"
      aria-label="Sai Vision AI Assistant"
      aria-modal="true"
    >
      <AIChatHeader onClose={onClose} />

      <div className="flex-1 overflow-y-auto p-4 sm:p-5" ref={scrollRef}>
        <div className="flex min-h-full flex-col justify-end">
          {messages.map((msg) => (
            <AIMessage key={msg.id} message={msg} />
          ))}

          {messages.length === 1 && <AIQuickActions onSelect={handleSend} />}

          {isTyping && <AIMessageTyping />}
        </div>
      </div>

      <div className="border-t border-gray-100 bg-white p-3 sm:p-4">
        <form onSubmit={onSubmit} className="relative flex items-center group mt-1">
          <div className="absolute -inset-0.5 bg-gradient-to-r from-orange-400 to-amber-400 rounded-full blur opacity-0 group-focus-within:opacity-30 transition duration-500 pointer-events-none"></div>
          <input
            ref={inputRef}
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Ask a question..."
            className="relative w-full rounded-full border border-gray-200/80 bg-white/90 backdrop-blur-md py-3.5 pl-5 pr-14 text-sm text-gray-900 shadow-sm placeholder:text-gray-400 focus:border-orange-400 focus:bg-white focus:outline-none focus:ring-4 focus:ring-orange-500/15 disabled:opacity-50 transition-all duration-300"
            disabled={isTyping}
          />
          <button
            type="submit"
            disabled={!input.trim() || isTyping}
            className="absolute right-2 flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-tr from-orange-600 to-orange-500 text-white shadow-md transition-all duration-300 hover:scale-105 hover:shadow-orange-500/30 disabled:scale-100 disabled:from-gray-300 disabled:to-gray-300 disabled:shadow-none disabled:text-gray-500"
            aria-label="Send message"
          >
            <Send className="h-4 w-4 shrink-0 -translate-x-[1px] translate-y-[1px]" />
          </button>
        </form>
        <div className="mt-2 text-center text-[0.65rem] text-gray-400">
          Powered by Sai Vision AI • Replies are simulated
        </div>
      </div>
    </div>
  );
}
