import { Queue } from "bullmq";
import { redis } from "./redis";

export const messageQueue = new Queue("npc-messages", {
  connection: redis,
});
