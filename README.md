# CasinoBot

A Discord bot that manages a multiplayer blackjack game with chip tracking and betting mechanics.

## Features

- **Multiplayer Blackjack**: Real-time card game management with a dealer and multiple players
- **Chip Management**: Automatic tracking of player chips and bet results
- **Discord Integration**: Slash commands for seamless gameplay within Discord servers
- **Automatic Round Progression**: Rounds auto-advance after all players submit their cards

## Tech Stack

- **Node.js** - Runtime environment
- **Discord.js** - Discord API library
- **Slash Commands** - Modern Discord command structure

## How to Play

1. **/jugar** - Start a blackjack game (you become the dealer)
2. **/unirse** - Join an active game as a player
3. **/comenzar** [initial-chips] - Begin the game with current players
4. **/apostar** [amount] - Place your bet for the round
5. **/cartas** [sum] - Submit your card total
6. The dealer reveals their cards, winnings are calculated, and the next round starts automatically
7. **/terminar** - End the game (dealer only)

## Screenshots

<img width="564" height="478" alt="image" src="https://github.com/user-attachments/assets/96ac890e-7867-48f8-8eed-d795521c92c9" />
<br>
<img width="379" height="319" alt="image" src="https://github.com/user-attachments/assets/05af9956-be6d-4985-b1b2-0e2603338dd4" />
<br>
<img width="413" height="336" alt="image" src="https://github.com/user-attachments/assets/4ad54842-119b-4c52-912f-4757e2719878" />
<br>
<img width="492" height="563" alt="image" src="https://github.com/user-attachments/assets/3c22dfa9-8a92-4f1e-9195-10fab7d321a5" />

## Try It Out

[Add CasinoBot to your server](https://discord.com/oauth2/authorize?client_id=1232238944117198918&permissions=2147494912&integration_type=0&scope=bot+applications.commands)
