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

![image](https://github.com/Sinuhe135/CasinoBot/assets/165139497/ebb40b0f-32a1-4fdf-b2f7-20e303c1c39e)

![image](https://github.com/Sinuhe135/CasinoBot/assets/165139497/949698be-2722-4911-bd7a-37bf550dbd6a)

![image](https://github.com/Sinuhe135/CasinoBot/assets/165139497/3946cbd1-fc7f-4372-9faf-ff3a710e33fd)

![image](https://github.com/Sinuhe135/CasinoBot/assets/165139497/1b35d9a1-037a-4869-a42c-1afbc0590c40)

## Try It Out

[Add CasinoBot to your server](https://discord.com/oauth2/authorize?client_id=1232238944117198918&permissions=2147494912&integration_type=0&scope=bot+applications.commands)