const { SlashCommandBuilder } = require('@discordjs/builders');
const { User } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('bonk')
        .setDescription('Bonk a User')
        .addUserOption( option => 
            option.setName('User')
            .setDescription('Tag a User')
            .setRequired(true)
            ),
    async execute(interaction) {
        await interaction.reply(`BONK YOU FILTHY ANIMAL ${m}`);
    }
}