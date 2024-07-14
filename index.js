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
        if (interaction.commandName === "diogo") {
            interaction.reply("O Diogo é GAY");
        }
        if (interaction.commandName === "miguel") {
            interaction.reply("O Miguel é o Rei");
        }
    }
});

client.login('');