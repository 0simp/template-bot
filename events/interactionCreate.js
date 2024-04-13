const{Events}=require('discord.js');

module.exports = {
	name: Events.InteractionCreate,
	async execute(interaction){
        if(!interaction.isChatInputCommand()){
            return; //ignores all non slash command interactions, change this if you want shit like buttons
        }
        const command = interaction.client.commands.get(interaction.commandName);

		if (!command) {
			console.error(`No command matching ${interaction.commandName} was found.`);
			return;
		}

		try {
			await command.execute(interaction);
		} catch (error) {
			console.error(error);
			if (interaction.replied || interaction.deferred) {
				await interaction.followUp({ content: 'FUCK! An error occured while executing this command!', ephemeral: true });
			} else {
				await interaction.reply({ content: 'FUCK! An error occured while executing this command!', ephemeral: true });
			}
		}
	},
};