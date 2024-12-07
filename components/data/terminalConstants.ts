export const ASCII_LOGO = `
 ██████████ █████████   █████████  █████████ ███████████ ██████████       ████████████████   ██████████████       ██████   ██████ █████████ ██████████████████████ █████████ █████
░░███░░░░░████░░░░░███ ███░░░░░██████░░░░░██░░███░░░░░██░░███░░░░░█      ░█░░░███░░░░░███   ░░██░░███░░░░░█      ░░██████ ██████ ███░░░░░██░█░░░███░░░░░███░░░░░██░░██░░███ ░░███ 
 ░███  █ ░░███    ░░░ ███     ░░░░███    ░███░███    ░███░███  █ ░       ░   ░███  ░ ░███    ░███░███  █ ░        ░███░█████░███░███    ░██░   ░███  ░ ░███    ░███░███░░███ ███  
 ░██████  ░░█████████░███        ░███████████░██████████ ░██████             ░███    ░███████████░██████          ░███░░███ ░███░███████████   ░███    ░██████████ ░███ ░░█████   
 ░███░░█   ░░░░░░░░██░███        ░███░░░░░███░███░░░░░░  ░███░░█             ░███    ░███░░░░░███░███░░█          ░███ ░░░  ░███░███░░░░░███   ░███    ░███░░░░░███░███  ███░███  
 ░███ ░   ████    ░██░░███     ██░███    ░███░███        ░███ ░   █          ░███    ░███    ░███░███ ░   █       ░███      ░███░███    ░███   ░███    ░███    ░███░███ ███ ░░███ 
 █████████░░█████████ ░░██████████████   █████████       ██████████          █████   █████   ██████████████       █████     █████████   █████  █████   █████   █████████████ █████
░░░░░░░░░░ ░░░░░░░░░   ░░░░░░░░░░░░░░   ░░░░░░░░░       ░░░░░░░░░░          ░░░░░   ░░░░░   ░░░░░░░░░░░░░░       ░░░░░     ░░░░░░░░░   ░░░░░  ░░░░░   ░░░░░   ░░░░░░░░░░░░░ ░░░░░ 
`;

export const SYSTEM_STATUS = `
===============================
NEURAL INTERFACE ACTIVE
System Status: Online
Protocol: ENIGMA-7
Security: MAXIMUM
===============================
`;

export const INITIAL_SEQUENCE = [
  "Initializing neural interface...",
  1000,
  "Welcome to the Matrix.",
  1000,
  'Type "help" to see available commands.',
  500,
] as const;

export const COMMANDS = {
  help: `Available Commands:
- status: Check puzzle status and level
- solve <answer>: Submit solution
- hint: Get a puzzle hint (costs crypto)
- pool: View reward pool
- stats: View game statistics
- verify <hash>: Verify transaction
- leaderboard: View top solvers`,

  status: `Level: ALPHA-7
Active Players: 234
Current Puzzle: Active
Required Entry: 0.1 ETH
Time Remaining: 5h 42m`,

  pool: `Current Pool: 3.2 ETH
Last Winner: 0x7d4...9f3
Distribution: 80% to winner, 20% to pool`,

  stats: `Total Players: 1,567
Success Rate: 18%
Total Rewards: 12.5 ETH
Active Puzzles: 3`,

  hint: `WARNING: Hint costs 0.05 ETH
Connect wallet to purchase hints.
Previous hint purchases: 0`,

  leaderboard: `1. 0x8e2...4f1 - 2.8 ETH
2. 0x3a7...9c4 - 2.1 ETH
3. 0x6b5...2d8 - 1.9 ETH
4. 0x1f4...7e2 - 1.5 ETH
5. 0x9c3...5a6 - 1.2 ETH`,
} as const;
