const {SlashCommandBuilder} = require('discord.js');

module.exports = {
    category:'misc', //"category" is for the dynamic help command, obviously change each command's category to whatever you want
    data:new SlashCommandBuilder() 
        .setName('ping')
        .setDescription('tells you the bot\'s ping'),
    async execute(interaction) {
        await interaction.reply(`Pong! My ping is ${interaction.client.ws.ping} ms. Is that good or is it poo poo? Idk man.`);
    }
}