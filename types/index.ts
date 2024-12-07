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
  title: string;
  description: string;
  responses: Record<string, string>;
}
