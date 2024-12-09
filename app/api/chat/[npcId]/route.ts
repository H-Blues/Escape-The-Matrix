import { NextResponse } from "next/server";
import { OpenAI } from "openai";
import { messageQueue } from "@/lib/queue";
import { redis } from "@/lib/redis";
import { NPCMessage } from "@/types";

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

const NPC_PROMPTS = {
  smith: "You are the Agent Smith...",
  morpheus: "You are Morpheus...",
  oracle: "You are the Oracle...",
};

export async function POST(request: Request, { params }: { params: { npcId: string } }) {
  const { npcId } = params;
  const { message, userAddress } = await request.json();

  console.log(npcId, message, userAddress);

  try {
    const currentCost = (await redis.get(`${npcId}:cost`)) || "0.001";

    const npcMessage: NPCMessage = {
      npcId,
      userAddress,
      message,
      timestamp: Date.now(),
      cost: currentCost,
    };

    await messageQueue.add("process-message", npcMessage);

    const completion = await openai.chat.completions.create({
      model: "gpt-4",
      messages: [
        {
          role: "system",
          content: NPC_PROMPTS[npcId as keyof typeof NPC_PROMPTS],
        },
        { role: "user", content: message },
      ],
    });

    const aiResponse = completion.choices[0].message.content;

    await redis.rpush(
      `chat:${npcId}:${userAddress}`,
      JSON.stringify({
        message,
        response: aiResponse,
        timestamp: Date.now(),
      })
    );

    const newCost = (parseFloat(currentCost) * 1.1).toFixed(4);
    await redis.set(`${npcId}:cost`, newCost);

    return NextResponse.json({
      response: aiResponse,
      nextCost: newCost,
    });
  } catch (error) {
    console.error("Error:", error);
    return NextResponse.json({ error: error }, { status: 500 });
  }
}
