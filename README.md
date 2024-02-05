# Discord Dare Bot

## Overview

This Discord bot is designed to spice up your server with fun and unpredictable challenges! Whenever a user triggers the command `/dare`, the bot presents a button to get a random dare from a predefined list. It's perfect for game nights, parties, or just adding a bit of excitement to your daily interactions.

## Features

- **Random Dare Generation:** Each click generates a random dare from a list, ensuring a unique experience every time.
- **Interactive Buttons:** Uses Discord's latest interaction features for a smooth user experience.
- **Customizable:** Easily add more dares to the list to keep the game fresh and engaging.

## Requirements

- Node.js
- Discord.js v13

## Setup

1. **Clone the Repository**

    Clone this repository to your local machine to get started.

2. **Install Dependencies**

    Run `npm install` in the project directory to install the required dependencies.

3. **Add Your Bot Token**

    Replace `YOUR_DISCORD_BOT_TOKEN_HERE` in the code with your Discord bot's token.

4. **Add Dares**

    Customize `./src/dare/dare.json` with your desired dares. The format is straightforward:

    ```json
    {
      "dares": [
        "Dare 1",
        "Dare 2",
        "Dare 3"
        // Add more dares here
      ]
    }
    ```

5. **Run Your Bot**

    Execute `node index.js` (assuming your entry file is named `index.js`) to start your bot. Make sure you have set up your bot on the Discord Developer Portal and invited it to your server.

## Usage

- **Getting a Dare**

    Type `/dare` in any text channel where the bot has permission to read and send messages. Click the "Get a Dare" button that appears to receive a random dare.

## Contributing

Contributions to the dare list or code enhancements are welcome. Please follow the standard GitHub fork & pull request workflow.

## Support

If you encounter any issues or have suggestions, please open an issue on the GitHub repository.

## License

---

**Note:** This bot uses Discord.js v13, which requires Node.js version 16.6.0 or newer. Ensure your environment meets these requirements.
