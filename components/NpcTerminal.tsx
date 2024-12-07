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
  const colorClass = variant === "smith" ? "red" : "green";

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;
    onMessage(input);
    setInput("");
  };

  const characterName = title.split(" ")[2].slice(1, -1);

  return (
    <div className={`h-[48%] rounded-lg border border-${colorClass}-500/30 flex flex-col bg-opacity-5`}>
      <div className={`p-2 border-b border-${colorClass}-500/30 flex items-center`}>
        <Terminal className={`w-4 h-4 text-${colorClass}-500`} />
        <span className={`text-${colorClass}-500 ml-2 font-mono`}>{title}</span>
      </div>

      <div className="flex-grow p-4 font-mono overflow-y-auto scrollbar-hide">
        <div className="mb-4">
          <pre className={`text-${colorClass}-500/80 text-xs`}>{description}</pre>
        </div>

        <div className="space-y-4">
          {messages.map((msg, idx) => (
            <div key={idx} className="opacity-90 hover:opacity-100">
              <div className="flex items-center">
                <span className={`text-${colorClass}-500 text-sm`}>
                  {msg.isNPC ? ">>" : ">"} {characterName}:~$
                </span>
                <span className={`ml-2 text-${colorClass}-500/80 text-sm`}>{msg.text}</span>
              </div>
              {msg.response && (
                <pre className={`mt-1 pl-0 text-${colorClass}-500/80 text-sm whitespace-pre-wrap`}>{msg.response}</pre>
              )}
            </div>
          ))}
          <div ref={bottomRef} />
        </div>
      </div>

      <form onSubmit={handleSubmit} className={`p-4 border-t border-${colorClass}-500/30`}>
        <div className="flex items-center">
          <span className={`text-${colorClass}-500`}>{characterName}:~$ </span>
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className={`flex-1 bg-transparent text-${colorClass}-500 outline-none ml-2 font-mono`}
            spellCheck="false"
            autoComplete="off"
          />
        </div>
      </form>
    </div>
  );
};
