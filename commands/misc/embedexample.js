const{SlashCommandBuilder,EmbedBuilder}=require('discord.js'); //"EmbedBuilder" replaces the old "MessageEmbed" from v12

module.exports = {
    category:'misc',
    data:new SlashCommandBuilder()
        .setName('embedexample')
        .setDescription('example of how to use embeds in v14 ig')
        .addStringOption(option=>option.setName('title').setDescription('the title of the embed').setRequired(true)),
    async execute(interaction){
        const title = interaction.options.getString('title');
        const embed = new EmbedBuilder()
        .setTitle(`${title}`)
        .setTimestamp()
        .setColor(0xb00b1e)

        await interaction.reply({embeds:[embed]});
    }
}