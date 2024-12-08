"use client";
import React, { useState, useRef, useEffect } from "react";
import { Terminal } from "lucide-react";

interface Message {
  text: string;
  isNPC: boolean;
  response?: string;
}

interface NpcTerminalProps {
  title: string;
  description: string;
  messages: Message[];
  onMessage: (message: string) => void;
  variant: "smith" | "morpheus";
}

export const NpcTerminal: React.FC<NpcTerminalProps> = ({ title, description, messages, onMessage, variant }) => {
  const [input, setInput] = useState("");
  const bottomRef = useRef<HTMLDivElement>(null);
  const color = variant === "smith" ? "red" : "green";

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;
    onMessage(input);
    setInput("");
  };

  return (
    <div className={`h-full rounded-lg border border-${color}-500/30 flex flex-col bg-opacity-5`}>
      <div className={`p-2 border-b border-${color}-500/30 flex items-center`}>
        <Terminal className={`w-4 h-4 text-${color}-500`} />
        <span className={`text-${color}-500 ml-2 font-mono`}>{title}</span>
      </div>

      <div className="flex-grow p-4 font-mono overflow-y-auto scrollbar-hide">
        <div className="mb-4">
          <pre className={`text-${color}-500/80 text-xs`}>{description}</pre>
        </div>

        <div className="space-y-4">
          {messages.map((msg, idx) => (
            <div key={idx} className="opacity-90 hover:opacity-100">
              <div className="flex items-center">
                <span className={`text-${color}-500 text-sm`}>{">>"} neo@matrix:~$</span>
                <span className={`ml-2 text-${color}-500/80 text-sm`}>{msg.text}</span>
              </div>
              {msg.response && (
                <pre className={`mt-1 pl-0 text-${color}-500/80 text-sm whitespace-pre-wrap`}>{msg.response}</pre>
              )}
            </div>
          ))}
          <div ref={bottomRef} />
        </div>
      </div>

      <form onSubmit={handleSubmit} className={`p-4 border-t border-${color}-500/30`}>
        <div className="flex items-center">
          <span className={`text-${color}-500`}>neo@matrix:~$ </span>
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className={`flex-1 bg-transparent text-${color}-500 outline-none ml-2 font-mono`}
            spellCheck="false"
            autoComplete="off"
          />
        </div>
      </form>
    </div>
  );
};
