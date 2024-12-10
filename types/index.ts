export interface Command {
  command: string;
  response: string;
}

export interface ChatMessage {
  text: string;
  type: "system" | "user";
  timestamp: Date;
}

export interface WalletInfo {
  address: string;
  balance: string;
  isConnected: boolean;
}

export interface GameStats {
  level: number;
  activePlayers: number;
  totalPlayers: number;
  successRate: number;
  rewardPool: string;
}

export interface NPCData {
  id: string;
  title: string;
  description: string;
  responses: Record<string, string>;
}

export interface NPCMessage {
  npcId: string;
  userAddress: string;
  message: string;
  timestamp: number;
  cost: string;
}

export interface Message {
  text: string;
  response?: string;
}

export interface NpcTerminalProps {
  title: string;
  description: string;
  variant: "smith" | "morpheus";
}
