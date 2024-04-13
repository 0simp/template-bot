const {SlashCommandBuilder, EmbedBuilder} = require('discord.js');
const DevIds = ['your dev ids here']

module.exports = {
    category:'developer',
    data:new SlashCommandBuilder()
        .setName('eval')
        .setDescription('runs javascript code (dev only)')
        .addStringOption(option =>option.setName('code').setDescription('the fucking code you want to run').setRequired(true)),

    async execute(interaction) {

        async function sendMessage (message) {
            const embed = new EmbedBuilder()
            .setColor(0xffcb4c)
            .setThumbnail(`${interaction.client.user.displayAvatarURL()}`)
            .setDescription(message);

            await interaction.reply({embeds: [embed],ephemeral:false});
        }
        if(!DevIds.includes(interaction.user.id)) {
            await interaction.reply({ content: 'What part of **dev only** do you not understand, fucking moron',ephemeral:true});
            return;
        }

        const { options} = interaction;

        var code = options.getString('code')
        var output;

        try {
            output = await eval(code);
        } catch (error) {
            output = error.toString();
        }

        var replyString = `**Code:**\n\`\`\`js\n${code}\n\`\`\`\n\n**Output:**\n\`\`\`js\n${output}\n\`\`\``;

        if(interaction.replied) {
            const embed = new EmbedBuilder()
            .setColor(0xffcb4c)
            .setDescription(replyString)

            await interaction.editReply({content:``, embeds:[embed],ephemeral:false})
        } else{
            await sendMessage(replyString);

    }
    }
}
