const {SlashCommandBuilder, EmbedBuilder} = require('discord.js');

module.exports = {
    category:'information',
    example:'help avamaxboobs',
    data:new SlashCommandBuilder()
        .setName('help')
        .setDescription('lists all of the bot\'s commands')
        .addStringOption(option => option.setName('command').setDescription('the command you want info on')),
    async execute(interaction) {
        const command = interaction.options.getString('command');
        if(!command) {
            function removeDuplicates(str) {
                return [...new Set(str)];
              }
            let categ;
            categ = removeDuplicates(interaction.client.commands.map((cmd) => cmd.category));
            const embed = new EmbedBuilder();
            for (const category of categ) {
              const uppercase = category.charAt(0).toUpperCase() + category.slice(1);
              embed.addFields({
                name: `${uppercase}:`,
                value: `${interaction.client.commands
                  .filter((cmd) => cmd.category === category)
                  .map((cmd) => `\`${cmd.data.name}\``)
                  .join(", ")}`,
              })
              .setColor(0xffcb4c)
              .setTitle('These are the commands that the bot currently offers:')
              .setDescription('You can run the command with the name of another command as an option to find out more about what that command is used for.')
              .setThumbnail(`${interaction.client.user.displayAvatarURL()}`)
              .setTimestamp()
            }
            interaction.reply({ embeds: [embed] });
            return;
    }
    
        const balls = interaction.client.commands.get(`${command}`)
            if(balls===undefined){
                await interaction.reply(`${command} is not a valid command!`)
                return;
            }
            const data = balls.data
            const tinypenis = new EmbedBuilder()
            .setColor(0xffcb4c)
            .setThumbnail(`${interaction.client.user.displayAvatarURL()}`)
            .setTitle(`help: ${balls.data.name}`)
            .setDescription(`**Category:**\n${balls.category}\n**Description:**\n${balls.data.description}\n**Usable in DMs?:**\n${data?.dm_permission??true}\n**NSFW?:**\n${balls.data.nsfw??false}\n**Options:**`)
            .setTimestamp()

            if(balls.data.options.length==0){
              tinypenis.setDescription(`**Category:**\n${balls.category}\n**Description:**\n${balls.data.description}\n**Usable in DMs?:**\n${data?.dm_permission??true}\n**NSFW?:**\n${balls.data.nsfw??false}\n**Options:**\nNone`)
              await interaction.reply({embeds:[tinypenis]});
              return;
            }

            for(const option of balls.data.options){
              let type='Subcommand';
              let example='N/A';
            if(option.type==1){
                type='Subcommand'
                example='N/A'
            }
            if(option.type==2){
                type='Subcommand Group'
                example='N/A'
            }
            if(option.type==3){
                type='String'
                example='Fuck balls'
            }
            if(option.type==4){
                type='Integer'
                example=69
            }
            if(option.type==5){
                type='Boolean'
                example=true
            }
            if(option.type==6){
                type='User'
                example='<@1143653164806049834>'
            }
            if(option.type==7){
                type='Channel'
                example='<#1211464391745085521>'
            }
            if(option.type==8){
                type='Role'
                example='@member'
            }
            if(option.type==9){
                type='Mentionable'
                example='<@1143653164806049834>'
            }
            if(option.type==10){
                type='Number'
                example=69.42
            }
            if(option.type==11){
                type='Attachment'
                example='[insert image here]'
            }
              tinypenis.addFields({name:`${option.name}`,value:`\`Description\`:\`${option.description}\`\n\`Type\`:\`${type}\`\n\`Required?\`:\`${option.required??false}\`\n\`Example value\`:\`${example}\``})
            }
            await interaction.reply({embeds:[tinypenis]});
}
}