const { Client, GatewayIntentBits, EmbedBuilder, ActionRowBuilder, ButtonBuilder, ButtonStyle } = require('discord.js');
const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMembers,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.GuildMessageReactions,
        GatewayIntentBits.DirectMessages,
        GatewayIntentBits.DirectMessageReactions
    ]
});

const dareData = require('./src/dare/dare.json');
console.log('/dare registered!');

client.once('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
});

client.on('interactionCreate', async interaction => {
    if (!interaction.isButton()) return;

    const randomIndex = Math.floor(Math.random() * dareData.dares.length);
    const randomDare = dareData.dares[randomIndex];
    const emojis = ['😄', '🎉', '🔥', '🌟', '🎈'];
    const randomEmoji = emojis[Math.floor(Math.random() * emojis.length)];

    const embed = new EmbedBuilder()
        .setColor('#0099ff')
        .setTitle('Random Dare')
        .setDescription(`${randomEmoji} ${randomDare}`)
        .setFooter({ text: 'Powered by Break~Bread' });

    await interaction.update({ embeds: [embed], components: [] });
});

client.on('messageCreate', async (message) => {
    if (message.content === '/dare') {
        const row = new ActionRowBuilder()
            .addComponents(
                new ButtonBuilder()
                    .setCustomId('dare_button')
                    .setLabel('Get a Dare')
                    .setStyle(ButtonStyle.Primary),
            );

        await message.reply({ content: 'Click the button below to get a random dare:', components: [row] });
    }
});

const TOKEN = 'YOUR_DISCORD_BOT_TOKEN_HERE';

client.login(TOKEN);
