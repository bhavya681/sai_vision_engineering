"use client";

import { useState, useEffect } from "react";
import { AIChatButton } from "./AIChatButton";
import { AIChatPanel } from "./AIChatPanel";

export function AIChatWidget() {
  const [isOpen, setIsOpen] = useState(false);

  // Close on Escape
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        setIsOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen]);

  // Prevent background scrolling on mobile when chat is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <>
      <AIChatPanel isOpen={isOpen} onClose={() => setIsOpen(false)} />
      <AIChatButton isOpen={isOpen} onClick={() => setIsOpen(!isOpen)} />
    </>
  );
}
