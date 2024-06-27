const {ApplicationCommandOptionType} = require('discord.js');
const blackjackGame = require('../../blackjack.js')

module.exports = {
    name: 'jugar',
    description: 'Iniciar blackjack',
    //devOnly: Boolean,

    callback: (client,interaction) => {

        const idUsuario = interaction.user.id;
        const idCanal = interaction.channel.id;
        
        if(blackjackGame.estaJuegoIniciado(idCanal))
        {
            //interaction.reply("Ya se ha iniciado un juego");
            interaction.reply({
                content: "Ya se ha iniciado un juego",
                ephemeral: true,
            });
            return;
        }
        
        blackjackGame.iniciarJuego(idUsuario,idCanal);

        interaction.reply(`Se ha iniciado un juego de blackjack\n${interaction.user} es el dealer\n\nUtilizar /comenzar para empezar el juego\nUtilizar /unirse para entrar`);

    },
};