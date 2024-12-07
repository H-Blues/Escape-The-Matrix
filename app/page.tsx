"use client";
import React from "react";
import { MainTerminal } from "@/components/MainTerminal";
import { useNPCChat } from "@/hooks/useNPCChat";
import { NpcTerminal } from "@/components/NpcTerminal";
import { smithData, morpheusData } from "@/components/data/npcData";

export default function Home() {
  const smith = useNPCChat(smithData);
  const morpheus = useNPCChat(morpheusData);

  return (
    <main className="min-h-screen bg-black overflow-hidden relative p-4 h-screen">
      <div className="absolute inset-0 bg-[url('/neo-bg.png')] bg-cover bg-center opacity-20" />
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_center,_rgba(0,255,0,0.1)_0%,_rgba(0,0,0,0.5)_100%)]" />

      <div className="relative flex gap-4 max-w-[95%] mx-auto h-full">
        <div className="w-[65%]">
          <MainTerminal />
        </div>
        <div className="w-[30%] flex flex-col gap-4">
          <NpcTerminal {...smithData} messages={smith.messages} onMessage={smith.processMessage} variant="smith" />
          <NpcTerminal
            {...morpheusData}
            messages={morpheus.messages}
            onMessage={morpheus.processMessage}
            variant="morpheus"
          />
        </div>
      </div>
    </main>
  );
}
