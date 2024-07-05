const Discord = require('discord.js');
const client = new Discord.Client({ intents: ["Guilds"] });

client.on("ready", () => {
    console.log('Bot is ready');
});

client.on("interactionCreate", async (interaction) => {
    if (interaction.isCommand()) {
        if (interaction.commandName === "ping") {
            interaction.reply("pong");
        }
    }
});

client.login('');