import { Bot } from "lucide-react";

export function AIMessageTyping() {
  return (
    <div className="flex animate-fade-up items-end gap-2.5 py-1">
      <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-orange-600 shadow-sm">
        <Bot className="h-4 w-4 text-white" />
      </div>
      <div className="flex h-9 w-14 items-center justify-center gap-1 rounded-2xl rounded-bl-sm bg-gray-100 px-3">
        <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-gray-400 [animation-delay:-0.3s]" />
        <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-gray-400 [animation-delay:-0.15s]" />
        <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-gray-400" />
      </div>
    </div>
  );
}
