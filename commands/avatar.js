const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('avatar')
        .setDescription('Gives an URL to your Avatar'),
    async execute(interaction) {
        await interaction.reply(`Your avatar: <${interaction.user.displayAvatarURL({format: "png", dynamic: true})}`);
    }
}