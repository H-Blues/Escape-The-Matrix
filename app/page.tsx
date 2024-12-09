"use client";
import React, { useState } from "react";
import { MainTerminal } from "@/components/MainTerminal";
import { NpcTerminal } from "@/components/NpcTerminal";
import { smithData, morpheusData } from "@/components/data/npcData";
import { Message } from "@/types";

export default function Home() {
  const [smithMessages, setSmithMessages] = useState<Message[]>([]);
  const [morpheusMessages, setMorpheusMessages] = useState<Message[]>([]);

  const handleSmithMessage = (message: string, response: string) => {
    setSmithMessages((prev) => [...prev, { text: message, response }]);
  };

  const handleMorpheusMessage = (message: string, response: string) => {
    setMorpheusMessages((prev) => [...prev, { text: message, response }]);
  };

  return (
    <main className="min-h-screen bg-black overflow-hidden relative p-4 h-screen">
      <div className="absolute inset-0 bg-[url('/neo-bg.png')] bg-cover bg-center opacity-20" />
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_center,_rgba(0,255,0,0.1)_0%,_rgba(0,0,0,0.5)_100%)]" />

      <div className="relative flex gap-4 max-w-[95%] mx-auto h-full">
        <div className="w-[65%]">
          <MainTerminal />
        </div>
        <div className="w-[30%] flex flex-col gap-4">
          <NpcTerminal {...smithData} messages={smithMessages} onMessage={handleSmithMessage} variant="smith" />
          <NpcTerminal
            {...morpheusData}
            messages={morpheusMessages}
            onMessage={handleMorpheusMessage}
            variant="morpheus"
          />
        </div>
      </div>
    </main>
  );
}
