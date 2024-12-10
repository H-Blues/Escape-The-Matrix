"use client";
import React, { useState, useRef, useEffect } from "react";
import { Terminal } from "lucide-react";
import { useAppKitAccount } from "@reown/appkit/react";
import { Message, NpcTerminalProps } from "@/types";

export const NpcTerminal: React.FC<NpcTerminalProps> = ({ title, description, variant }) => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const { isConnected, address } = useAppKitAccount();
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const colorClasses = {
    smith: {
      border: "border-red-500/30",
      text: "text-red-500",
      textFaded: "text-red-500/80",
    },
    morpheus: {
      border: "border-green-500/30",
      text: "text-green-500",
      textFaded: "text-green-500/80",
    },
  }[variant];

  useEffect(() => {
    if (scrollContainerRef.current) {
      const scrollContainer = scrollContainerRef.current;
      scrollContainer.scrollTop = scrollContainer.scrollHeight;
    }
  }, [messages]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    try {
      const userMessage = input;

      const res = await fetch(`/api/chat/${variant}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          message: userMessage,
          userAddress: address,
        }),
      });

      if (!res.ok) {
        setMessages((prev) => [
          ...prev,
          {
            text: userMessage,
            response: "Error: Invalid input. Please try again.",
          },
        ]);
        setInput("");
        return;
      }

      const data = await res.json();
      setMessages((prev) => [
        ...prev,
        {
          text: userMessage,
          response: data.response,
        },
      ]);
      setInput("");
    } catch (error) {
      setMessages((prev) => [
        ...prev,
        {
          text: input,
          response: "Error: Unable to process request. Please try again later.",
        },
      ]);
      console.error("Error:", error);
    }
  };

  return (
    <div className={`h-[600px] rounded-lg border ${colorClasses.border} flex flex-col overflow-hidden`}>
      <div className={`p-2 border-b ${colorClasses.border} flex items-center shrink-0`}>
        <Terminal className={`w-4 h-4 ${colorClasses.text}`} />
        <span className={`${colorClasses.text} ml-2 font-mono`}>{title}</span>
      </div>

      <div ref={scrollContainerRef} className="flex-1 p-4 font-mono overflow-y-auto scrollbar-hide">
        <div className="mb-2">
          <pre className={`${colorClasses.textFaded} text-xs`}>{description}</pre>
        </div>

        <div className="space-y-1">
          {messages.map((msg, idx) => (
            <div key={idx} className="opacity-90 hover:opacity-100">
              <div className="flex items-center break-all">
                <span className={`${colorClasses.text} text-sm shrink-0`}>{">>"} neo@matrix:~$</span>
                <span className={`ml-2 ${colorClasses.textFaded} text-sm break-all`}>{msg.text}</span>
              </div>
              {msg.response && (
                <pre className={`pl-0 ${colorClasses.textFaded} text-sm whitespace-pre-wrap break-all`}>
                  {msg.response}
                </pre>
              )}
            </div>
          ))}
          <div ref={messagesEndRef} />
        </div>
      </div>

      {isConnected && (
        <form onSubmit={handleSubmit} className={`p-4 border-t ${colorClasses.border} shrink-0`}>
          <div className="flex items-center">
            <span className={`${colorClasses.text} shrink-0`}>neo@matrix:~$ </span>
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              className={`flex-1 bg-transparent ${colorClasses.text} outline-none ml-2 font-mono`}
              spellCheck="false"
              autoComplete="off"
            />
          </div>
        </form>
      )}
    </div>
  );
};
