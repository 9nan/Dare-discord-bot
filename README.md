# Discord Dare Bot

## Overview
This Discord bot is designed to spice up your server with fun and unpredictable challenges! Whenever a user triggers the command `/dare`, the bot presents a button to get a random dare from a predefined list. It's perfect for game nights, parties, or just adding a bit of excitement to your daily interactions.

## Features
- **Random Dare Generation:** Each click generates a random dare from a list, ensuring a unique experience every time.
- **Interactive Buttons:** Uses Discord's latest interaction features for a smooth user experience.
- **Customizable:** Easily add more dares to the list to keep the game fresh and engaging.
- **Slash Command Support:** Built with Discord's recommended slash command implementation for improved user experience.
- **Emoji Enhancement:** Each dare is presented with a random emoji for visual appeal.

## Requirements
- Node.js 16.9.0 or newer
- Discord.js v14+
- Discord Developer Portal application with bot permissions

## Setup

### 1. Clone the Repository
```bash
https://github.com/9nan/Dare-discord-bot.git
cd discord-dare-bot
```

### 2. Install Dependencies
```bash
npm install discord.js @discordjs/rest dotenv
```

### 3. Configure Environment Variables
Create a `.env` file in the root directory:
```
DISCORD_BOT_TOKEN=your_bot_token_here
CLIENT_ID=your_application_client_id
GUILD_ID=your_test_server_id  # Optional for development
```

### 4. Create Dare Content
Create a directory structure `./src/dare/` and add a `dare.json` file:
```json
{
  "dares": [
    "Speak in an accent for the next 10 minutes",
    "Send the 10th photo in your camera roll",
    "Text your crush and screenshot the conversation",
    "Do 20 jumping jacks",
    "Call a friend and sing them happy birthday, even if it isn't their birthday",
    "Post a childhood photo of yourself",
    "Let another player post a status on your social media",
    "Eat a spoonful of hot sauce or something spicy",
    "Send a voice message of you singing your favorite song",
    "Do your best impression of another player"
    // Add more dares as desired
  ]
}
```

### 5. Start the Bot
```bash
node index.js
```

## Discord Developer Portal Setup

1. Go to the [Discord Developer Portal](https://discord.com/developers/applications)
2. Create a New Application
3. Navigate to the "Bot" tab and click "Add Bot"
4. Under "Privileged Gateway Intents", enable:
   - Server Members Intent
   - Message Content Intent
5. Save changes
6. Copy your token and add it to your environment variables
7. Go to OAuth2 > URL Generator:
   - Select "bot" and "applications.commands" scopes
   - Select required permissions (Send Messages, Use Slash Commands, etc.)
8. Use the generated URL to invite the bot to your server

## Usage

### Slash Command
Use the `/dare` slash command in any channel the bot has access to.

### Legacy Text Command
Type `/dare` in any text channel where the bot has permission to read and send messages. Click the "Get a Dare" button that appears to receive a random dare.

## Customization

### Adding More Dares
Edit the `./src/dare/dare.json` file to add, remove, or modify dares.

### Changing Emojis
Modify the `EMOJIS` array in the main bot file to change which emojis can appear with dares.

### Styling
Adjust the embed colors and styling in the `handleDareButtonClick` function.

## Troubleshooting

### Common Issues
- **Command Not Registering**: Make sure you've properly registered slash commands and have the correct permissions.
- **Intents Error**: Ensure all required intents are enabled in both code and Discord Developer Portal.
- **Token Invalid**: Verify your bot token is correct and properly set in your environment variables.

## Contributing
Contributions to the dare list or code enhancements are welcome. Please follow the standard GitHub fork & pull request workflow.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## Support
If you encounter any issues or have suggestions, please open an issue on the GitHub repository.

## License
This project is licensed under the MIT License - see the LICENSE file for details.

---

**Note:** This bot uses Discord.js v14+, which requires Node.js version 16.9.0 or newer. Ensure your environment meets these requirements.
