"use client"
import React, { useState } from 'react';
import { Terminal, Users, Coins } from 'lucide-react';

const NeoPuzzle = () => {
  const [message, setMessage] = useState('');

  return (
    <div className="min-h-screen bg-black text-green-500 p-4 font-mono">
      <pre className="text-xs leading-tight mb-8 overflow-x-auto whitespace-pre">
{`███╗   ██╗███████╗ ██████╗     ██████╗ ██╗   ██╗███████╗███████╗██╗     ███████╗
████╗  ██║██╔════╝██╔═══██╗    ██╔══██╗██║   ██║╚══███╔╝╚══███╔╝██║     ██╔════╝
██╔██╗ ██║█████╗  ██║   ██║    ██████╔╝██║   ██║  ███╔╝   ███╔╝ ██║     █████╗  
██║╚██╗██║██╔══╝  ██║   ██║    ██╔═══╝ ██║   ██║ ███╔╝   ███╔╝  ██║     ██╔══╝  
██║ ╚████║███████╗╚██████╔╝    ██║     ╚██████╔╝███████╗███████╗███████╗███████╗
╚═╝  ╚═══╝╚══════╝ ╚═════╝     ╚═╝      ╚═════╝ ╚══════╝╚══════╝╚══════╝╚══════╝`}
      </pre>

      <div className="grid grid-cols-2 gap-4 h-[calc(100vh-200px)]">
        {/* Left Terminal - System Info */}
        <div className="border border-green-500 bg-black p-4 flex flex-col">
          <div className="flex items-center gap-2 border-b border-green-500/30 pb-2 mb-4">
            <Terminal className="h-4 w-4" />
            <span>SYSTEM_INFO</span>
          </div>
          <div className="space-y-4 flex-1 overflow-auto">
            <div className="flex items-center gap-2">
              <Users className="h-4 w-4" />
              <span className="text-sm">AGENTS_ACTIVE: 1,234</span>
            </div>
            <div className="flex items-center gap-2">
              <Coins className="h-4 w-4" />
              <span className="text-sm">CURRENT_REWARD: 5.5 ETH</span>
            </div>
            <div className="text-sm opacity-60">
              <p>>>> SYSTEM_STATUS: ONLINE</p>
              <p>>>> MATRIX_CONNECTION: STABLE</p>
              <p>>>> ENCRYPTION: ACTIVE</p>
              <p>>>> PROTOCOL_VERSION: 1.0.0</p>
              <p>>>> LAST_SOLVED: 2024-12-05 13:45:23</p>
              <p>>>> DIFFICULTY: LEVEL_3</p>
              <p>>>> NEXT_LEVEL_COST: 0.02 ETH</p>
            </div>
          </div>
        </div>

        {/* Right Terminal - Message Display */}
        <div className="border border-green-500 bg-black p-4 flex flex-col">
          <div className="flex items-center gap-2 border-b border-green-500/30 pb-2 mb-4">
            <Terminal className="h-4 w-4" />
            <span>SYSTEM_PROMPT</span>
          </div>
          <div className="flex-1 overflow-auto text-sm">
            <div className="space-y-2 opacity-80">
              <p>>>> INITIATING MATRIX CONNECTION...</p>
              <p>>>> ACCESS GRANTED</p>
              <p>>>> Welcome to the Neo Puzzle system.</p>
              <p>>>> I am your guide through this cryptographic challenge.</p>
              <p>>>> To proceed, you must solve my riddles using blockchain transactions.</p>
              <p>>>> Each correct solution increases your potential reward.</p>
              <p>>>> Your actions are being monitored and verified.</p>
              <p>>>> Choose wisely, as each attempt costs ETH.</p>
              <p>>>> Are you prepared to test your abilities?</p>
              <p>>>> AWAITING YOUR RESPONSE...</p>
            </div>
          </div>
        </div>
      </div>

      {/* Command Input */}
      <div className="border border-green-500 bg-black p-4 mt-4">
        <div className="flex items-center gap-2">
          <span className="text-green-500">root@matrix:~$</span>
          <input
            type="text"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="flex-1 bg-transparent border-none outline-none text-green-500"
            placeholder="Enter command..."
          />
        </div>
      </div>
    </div>
  );
};

export default NeoPuzzle;