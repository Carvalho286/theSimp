const { REST, Routes } = require('discord.js');

const BotID = '';
const ServerID = '';
const botToken = '';

const rest = new REST().setToken(botToken);

const slashRegister = async () => {
    try {
        await rest.put(Routes.applicationGuildCommands(BotID, ServerID), {
            body: [
                {
                    name: "ping",
                    description: "Just a simple ping command, no less."
                },
                {
                    name: "diogo",
                    description: "🔥"
                },
                {
                    name: "miguel",
                    description: "★"
                }
            ]
        })
    } catch (err) {
        console.log(err);
    }
}

slashRegister();