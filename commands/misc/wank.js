const{SlashCommandBuilder}=require('discord.js');

module.exports={
    category:'misc',
    data:new SlashCommandBuilder()
        .setName('wank')
        .setDescription('wank yourself or another user')
        .addUserOption(option=>option.setName('user').setDescription('the user to wank')),
    async execute(interaction){
        const user = interaction.options.getUser('user')
        if(!user){ // if you don't set required to true for an option, add a check for if that value doesn't exist otherwise the bot will do a big poo poo
            await interaction.reply(`${interaction.user.username} is wanking themself! 😳`)
            return;
        }
        await interaction.reply(`${interaction.user.username} is wanking ${user.username}`);
    }
}