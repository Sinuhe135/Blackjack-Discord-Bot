const {ApplicationCommandOptionType} = require('discord.js');
const blackjackGame = require('../../blackjack.js')

module.exports = {
    name: 'jugar',
    description: 'iniciar blackjack',
    //devOnly: Boolean,

    callback: (client,interaction) => {

        const idUsuario = interaction.user.id;
        const idCanal = interaction.channel.id;
        if(blackjackGame.juegoIniciado(idCanal))
        {
            interaction.reply("Ya se ha iniciado un juego");
            return;
        }
        
        blackjackGame.iniciarJuego(idUsuario,idCanal);

        interaction.reply(`Se ha iniciado un juego\n${interaction.user} es el dealer`);

    },
};