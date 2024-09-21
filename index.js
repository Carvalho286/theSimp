const Discord = require('discord.js');
const client = new Discord.Client({ intents: ["Guilds"] });
const colors = require("./colors.json");
const allowedUsers = ["465507013384994818", "280990969460031488"];

client.on('ready', async () => {

    console.log(`----------------------------------------------`);
    console.log(`${client.user.username} está online em ${client.guilds.cache.size} servers!`);
    console.log(`----------------------------------------------`);
  
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
        if (interaction.commandName === "kick") {
            if (!allowedUsers.includes(interaction.user.id)) {
                return interaction.reply("Não podes fazer isso zé.");
            }

            const user = interaction.options.getUser("user");
            if (!user) {
                return interaction.reply("Não encontrado.");
            }

            const member = await interaction.guild.members.fetch(user.id);
            if (member) {
                await member.kick();
                interaction.reply(`Xau zé ${member.user.tag}`);
            } else {
                interaction.reply("Não encontrado.");
            }
        }
        if (interaction.commandName === "criador") {
            const url = 'https://cdn.discordapp.com/avatars/280990969460031488/a_ef71a6f5cbba50d6655dcf4ff40d03b0.gif';
            
            const embed = new Discord.EmbedBuilder()
                .setColor(colors.purple)
                .setTitle('Sobre o criador')
                .setAuthor({ name: 'K0baCK', iconURL: url })
                .setDescription('Aqui estão algumas informações sobre o criador.')
                .setThumbnail(url)
                .addFields(
                    { name: '**Nome:**', value: 'K0baCK' },
                    { name: '**Ocupações:**', value: 'Web Developer / App Developer'},
                    { name: '**GitHub:**', value: 'https://github.com/Carvalho286', inline: true },
                    { name: '**Website:**', value: 'https://guthib.com', inline: true },
                    { name: '\u200B', value: '\u200B' }
                )
                .setTimestamp()
                .setFooter({ text: 'The Simp' });

            await interaction.reply({ embeds: [embed] });
        }
        if (interaction.commandName === "wassup") {
            interaction.reply("Sigam todos o rei Wassup https://www.twitch.tv/the_hagith");
        }
    }
});

client.login('');