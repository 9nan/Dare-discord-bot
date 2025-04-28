/**
 * Break~Bread Discord Bot
 * A simple Discord bot that provides random dares to users
 * Compatible with Discord.js v14
 */

const { 
    Client, 
    GatewayIntentBits, 
    EmbedBuilder, 
    ActionRowBuilder, 
    ButtonBuilder, 
    ButtonStyle,
    Events,
    REST,
    Routes
} = require('discord.js');

// Configure client with required intents
const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMembers,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent,
        GatewayIntentBits.DirectMessages
    ]
});

// Import dare data
const dareData = require('./src/dare/dare.json');

// Available emojis for dare messages
const EMOJIS = ['😄', '🎉', '🔥', '🌟', '🎈'];

/**
 * Initializes the bot and logs confirmation message
 */
client.once(Events.ClientReady, () => {
    console.log(`Logged in as ${client.user.tag}`);
    console.log('/dare command registered and ready');
});

/**
 * Handles button interactions
 */
client.on(Events.InteractionCreate, async interaction => {
    if (!interaction.isButton()) return;
    
    if (interaction.customId === 'dare_button') {
        await handleDareButtonClick(interaction);
    }
});

/**
 * Handles message commands
 */
client.on(Events.MessageCreate, async (message) => {
    if (message.content === '/dare') {
        await createDareMessage(message);
    }
});

/**
 * Creates a dare button message
 * @param {Object} message - Discord message object
 */
async function createDareMessage(message) {
    const row = new ActionRowBuilder()
        .addComponents(
            new ButtonBuilder()
                .setCustomId('dare_button')
                .setLabel('Get a Dare')
                .setStyle(ButtonStyle.Primary)
        );
    
    await message.reply({ 
        content: 'Click the button below to get a random dare:', 
        components: [row] 
    });
}

/**
 * Handles the dare button click
 * @param {Object} interaction - Discord interaction object
 */
async function handleDareButtonClick(interaction) {
    // Select random dare and emoji
    const randomIndex = Math.floor(Math.random() * dareData.dares.length);
    const randomDare = dareData.dares[randomIndex];
    const randomEmoji = EMOJIS[Math.floor(Math.random() * EMOJIS.length)];
    
    // Create embed response
    const embed = new EmbedBuilder()
        .setColor('#0099ff')
        .setTitle('Random Dare')
        .setDescription(`${randomEmoji} ${randomDare}`)
        .setFooter({ text: 'Powered by Break~Bread' });
    
    await interaction.update({ embeds: [embed], components: [] });
}

// Adding slash command support (v14 recommended approach)
async function registerCommands() {
    const commands = [
        {
            name: 'dare',
            description: 'Get a random dare challenge'
        }
    ];
    
    try {
        console.log('Started refreshing application (/) commands.');
        
        const rest = new REST({ version: '10' }).setToken(TOKEN);
        
        // The following would be used when your bot is ready to register commands globally
        // await rest.put(Routes.applicationCommands(CLIENT_ID), { body: commands });
        
        // For development/testing, you can use guild-specific commands (faster updates)
        // Replace GUILD_ID with your test server ID
        // await rest.put(Routes.applicationGuildCommands(CLIENT_ID, GUILD_ID), { body: commands });
        
        console.log('Successfully registered application commands.');
    } catch (error) {
        console.error('Error registering commands:', error);
    }
}

// Handle slash commands
client.on(Events.InteractionCreate, async interaction => {
    if (!interaction.isChatInputCommand()) return;
    
    if (interaction.commandName === 'dare') {
        const row = new ActionRowBuilder()
            .addComponents(
                new ButtonBuilder()
                    .setCustomId('dare_button')
                    .setLabel('Get a Dare')
                    .setStyle(ButtonStyle.Primary)
            );
            
        await interaction.reply({ 
            content: 'Click the button below to get a random dare:', 
            components: [row],
            ephemeral: false
        });
    }
});

// Replace with your actual bot token and client ID
const TOKEN = process.env.DISCORD_BOT_TOKEN || 'YOUR_DISCORD_BOT_TOKEN_HERE';
const CLIENT_ID = process.env.CLIENT_ID || 'YOUR_CLIENT_ID_HERE';
// Optional: const GUILD_ID = process.env.GUILD_ID || 'YOUR_TEST_GUILD_ID';

// Login to Discord
client.login(TOKEN)
    .then(() => {
        console.log('Bot logged in successfully');
        // Uncomment to register slash commands
        // registerCommands();
    })
    .catch(error => console.error('Failed to log in:', error));
