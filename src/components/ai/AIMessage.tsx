"use client";

import { Bot, User } from "lucide-react";
import ReactMarkdown from "react-markdown";
import Link from "next/link";
import { ChatMessage } from "@/data/assistant-knowledge";

export function AIMessage({ message }: { message: ChatMessage }) {
  const isUser = message.role === "user";

  return (
    <div className={`flex w-full animate-fade-up items-end gap-2.5 py-2 ${isUser ? "justify-end" : "justify-start"}`}>
      {!isUser && (
        <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-orange-600 shadow-sm">
          <Bot className="h-4 w-4 text-white" />
        </div>
      )}

      <div
        className={`relative max-w-[85%] rounded-2xl px-4 py-3 text-[0.9375rem] leading-relaxed shadow-sm sm:max-w-[75%] ${
          isUser
            ? "rounded-br-sm bg-orange-600 text-white"
            : "rounded-bl-sm border border-gray-100 bg-white text-gray-800"
        }`}
      >
        <ReactMarkdown
          components={{
            a: ({ node, ...props }) => {
              if (props.href?.startsWith("/")) {
                return (
                  <Link
                    href={props.href}
                    className={`mt-2 mb-1 inline-flex w-full items-center justify-center rounded-lg px-4 py-2 text-sm font-semibold transition-colors sm:w-auto ${
                      isUser
                        ? "bg-white/20 text-white hover:bg-white/30"
                        : "border border-orange-200 bg-orange-50 text-orange-700 hover:bg-orange-100"
                    }`}
                  >
                    {props.children}
                  </Link>
                );
              }
              return (
                <a
                  {...props}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium underline underline-offset-4 hover:text-orange-500"
                />
              );
            },
            p: ({ node, ...props }) => <p className="mb-2 last:mb-0" {...props} />,
            ul: ({ node, ...props }) => (
              <ul className="mb-2 list-inside list-disc space-y-1 last:mb-0" {...props} />
            ),
            li: ({ node, ...props }) => <li className="marker:text-current" {...props} />,
            strong: ({ node, ...props }) => <strong className="font-semibold" {...props} />,
          }}
        >
          {message.content}
        </ReactMarkdown>
      </div>

      {isUser && (
        <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-gray-100">
          <User className="h-4 w-4 text-gray-500" />
        </div>
      )}
    </div>
  );
}
