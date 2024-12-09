"use client";
import React, { useState, useRef, useEffect } from "react";
import { Terminal } from "lucide-react";
import { TypeAnimation } from "react-type-animation";
import { Command } from "@/types";
import { ASCII_LOGO, SYSTEM_STATUS, INITIAL_SEQUENCE, COMMANDS } from "./data/terminalConstants";
import { Button } from "@/components/ui/button";
import { useAppKit } from "@reown/appkit/react";
import { useAppKitAccount } from "@reown/appkit/react";

interface MainTerminalProps {
  onMessage?: (message: string) => void;
}

export const MainTerminal: React.FC<MainTerminalProps> = ({ onMessage }) => {
  const [input, setInput] = useState("");
  const [history, setHistory] = useState<Command[]>([]);
  const [animationComplete, setAnimationComplete] = useState(false);
  const appKit = useAppKit();
  const { isConnected, address } = useAppKitAccount();
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [history]);

  const processCommand = (cmd: string): string => {
    const [command, ...args] = cmd.toLowerCase().trim().split(" ");

    switch (command) {
      case "solve":
        if (!args.length) return "Usage: solve <answer>";
        return `Processing solution: "${args.join(" ")}"...
Verifying...
Transaction required: 0.1 ETH`;

      case "verify":
        if (!args[0]) return "Usage: verify <transaction_hash>";
        return `Verifying transaction: ${args[0]}
Status: Processing...
Please wait for confirmation.`;

      default:
        return COMMANDS[command as keyof typeof COMMANDS] || 'Unknown command. Type "help" for available commands.';
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    const response = processCommand(input);
    setHistory((prev) => [...prev, { command: input, response }]);
    setInput("");
    onMessage?.(input);
  };

  return (
    <div className="h-full rounded-lg border border-green-500/30 flex flex-col bg-opacity-5">
      <div className="p-2 border-b border-green-500/30 flex items-center">
        <Terminal className="w-4 h-4 text-green-500" />
        <span className="text-green-500 ml-2 font-mono">Matrix Terminal (Oracle)</span>
        {isConnected && address && (
          <span
            className="ml-auto text-green-500/70 text-xs font-mono cursor-pointer hover:text-green-500"
            onClick={() => {
              appKit.open();
            }}
          >
            {`${address.slice(0, 6)}...${address.slice(-4)}`}
          </span>
        )}
      </div>

      <div className="flex-grow p-4 font-mono overflow-y-auto scrollbar-hide">
        <div className="mb-6 flex flex-col items-center">
          <pre className="text-green-500 text-[6px] leading-[6px] tracking-wider">{ASCII_LOGO}</pre>
          <pre className="text-green-500/80 text-xs mt-4">{SYSTEM_STATUS}</pre>
          <TypeAnimation
            sequence={[...INITIAL_SEQUENCE, () => setAnimationComplete(true)]}
            wrapper="div"
            speed={40}
            className="text-green-500 mt-4"
            cursor={false}
            omitDeletionAnimation={true}
          />
          {animationComplete && !isConnected && (
            <Button
              onClick={() => appKit.open()}
              className="mt-6 px-4 py-2 bg-green-500/20 text-green-500 border border-green-500/50 
                        hover:bg-green-500/30 rounded-md font-mono transition-colors"
            >
              Connect Wallet
            </Button>
          )}
        </div>

        <div className="space-y-4">
          {history.map((entry, idx) => (
            <div key={idx} className="opacity-90 hover:opacity-100">
              <div className="flex items-center">
                <span className="text-green-500 text-sm">{">>"} neo@matrix:~$</span>
                <span className="ml-2 text-green-500/80 text-sm">{entry.command}</span>
              </div>
              <pre className="mt-1 pl-0 text-green-500/80 text-sm whitespace-pre-wrap">{entry.response}</pre>
            </div>
          ))}
          <div ref={bottomRef} />
        </div>
      </div>

      {isConnected && (
        <form onSubmit={handleSubmit} className="p-4 border-t border-green-500/30">
          <div className="flex items-center">
            <span className="text-green-500">neo@matrix:~$ </span>
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              className="flex-1 bg-transparent text-green-500 outline-none ml-2 font-mono"
              spellCheck="false"
              autoComplete="off"
            />
          </div>
        </form>
      )}
    </div>
  );
};
