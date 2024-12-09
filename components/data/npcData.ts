import { NPCData } from "@/types";

export const smithData: NPCData = {
  id: "smith",
  title: "Matrix Terminal (Smith)",
  description: `Agent Smith: Sentinel Program
Status: Active
Mission: System Control
Access Level: Maximum`,
  responses: {
    hello: "Mr. Anderson...",
    why: "Because, Mr. Anderson, humans are a virus...",
  },
};

export const morpheusData: NPCData = {
  id: "morpheus",
  title: "Matrix Terminal (Morpheus)",
  description: `Morpheus: Resistance Leader
Status: Awakened
Mission: Human Liberation
Access Level: Zion Command`,
  responses: {
    hello: "Welcome to the real world.",
    "what is the matrix": "The Matrix is everywhere...",
  },
};
