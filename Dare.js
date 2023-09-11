const { Client, Intents, MessageActionRow, MessageButton } = require('discord.js');
const client = new Client({
    intents: [
        Intents.FLAGS.GUILDS,
        Intents.FLAGS.GUILD_MEMBERS,
        Intents.FLAGS.GUILD_MESSAGES,
        Intents.FLAGS.GUILD_MESSAGE_REACTIONS,
        Intents.FLAGS.DIRECT_MESSAGES,
        Intents.FLAGS.DIRECT_MESSAGE_REACTIONS
    ]
});

const dareData = require('./src/dare/dare.json');
console.log('/dare registered!');

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
});

client.on('interactionCreate', async interaction => {
    if (!interaction.isButton()) return;

    const randomIndex = Math.floor(Math.random() * dareData.dares.length);
    const randomDare = dareData.dares[randomIndex];
    const { MessageEmbed } = require('discord.js');
    const emojis = ['😄', '🎉', '🔥', '🌟', '🎈'];
    const randomEmoji = emojis[Math.floor(Math.random() * emojis.length)];
    const embed = new MessageEmbed()
        .setColor('#0099ff')
        .setTitle('Random Dare')
        .setDescription(`${randomEmoji} ${randomDare}`)
        .setFooter('Powered by Break~Bread');
        
    await interaction.update({ embeds: [embed], components: [] }); // Update the original message with the dare
});

client.on('messageCreate', async (message) => {
    if (message.content === '/dare') {
        const row = new MessageActionRow()
            .addComponents(
                new MessageButton()
                    .setCustomId('dare_button')
                    .setLabel('Get a Dare')
                    .setStyle('PRIMARY'),
            );

        await message.reply({ content: 'Click the button below to get a random dare:', components: [row] });
    }
});

const TOKEN = 'YOUR_DISCORD_BOT_TOKEN_HERE';

client.login(TOKEN);
