import { useState } from "react";

export interface NPCData {
  title: string;
  description: string;
  responses: Record<string, string>;
}

export interface Message {
  text: string;
  isNPC: boolean;
  response?: string;
}

export const useNPCChat = (npcData: NPCData) => {
  const [messages, setMessages] = useState<Message[]>([]);

  const processMessage = (input: string) => {
    const response = npcData.responses[input.toLowerCase()] || "I do not understand that command.";
    setMessages((prev) => [
      ...prev,
      {
        text: input,
        isNPC: false,
        response,
      },
    ]);
  };

  return {
    messages,
    processMessage,
  };
};
