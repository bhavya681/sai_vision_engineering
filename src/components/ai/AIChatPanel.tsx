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

  return (
    <div
      className="fixed bottom-0 left-0 right-0 z-50 flex h-[85vh] max-h-[800px] flex-col overflow-hidden rounded-t-2xl bg-[#fafafa] shadow-[0_-8px_40px_rgba(0,0,0,0.12)] ring-1 ring-black/5 sm:bottom-24 sm:left-auto sm:right-6 sm:h-[600px] sm:w-[400px] sm:rounded-2xl"
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
        <form onSubmit={onSubmit} className="relative flex items-center">
          <input
            ref={inputRef}
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Ask a question..."
            className="w-full rounded-full border border-gray-200 bg-gray-50/50 py-3 pl-4 pr-12 text-sm text-gray-900 placeholder:text-gray-400 focus:border-orange-500 focus:bg-white focus:outline-none focus:ring-1 focus:ring-orange-500 disabled:opacity-50"
            disabled={isTyping}
          />
          <button
            type="submit"
            disabled={!input.trim() || isTyping}
            className="absolute right-1.5 flex h-9 w-9 items-center justify-center rounded-full bg-orange-600 text-white transition-all hover:bg-orange-700 disabled:bg-gray-300"
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
