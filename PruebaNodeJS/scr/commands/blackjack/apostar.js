const {ApplicationCommandOptionType} = require('discord.js');
const blackjackGame = require('../../blackjack.js')

module.exports = {
    name: 'apostar',
    description: 'Apostar fichas',
    //devOnly: Boolean,
    //testOnly: Boolean,
    options:[
        {
            name: "fichas",
            description:"cantidad de fichas",
            type: ApplicationCommandOptionType.Integer,
            require: true,
        },
    ],

    callback: (client,interaction) => {
        const numeroFichas = interaction.options.get('fichas').value;
        const idUsuario = interaction.user.id;
        const idCanal = interaction.channel.id;

        if(!blackjackGame.estaJuegoIniciado(idCanal))
        {
            //interaction.reply("No se ha iniciado ningun juego en este canal");
            interaction.reply({
                content: "No se ha iniciado ningun juego en este canal",
                ephemeral: true,
            });
            return;
        }

        if(!blackjackGame.estaUsuarioEnJuego(idUsuario,idCanal) && !(blackjackGame.esDealer(idUsuario,idCanal)))
        {
            interaction.reply({
                content: "No se ha unido al juego",
                ephemeral: true,
            });
            return;
        }

        if(blackjackGame.verEstadoJuego(idCanal) != 1)
        {
            interaction.reply({
                content: "No se está en fase de apuestas",
                ephemeral: true,
            });
            return;
        }

        if(blackjackGame.esDealer(idUsuario,idCanal))
        {
            //interaction.reply("El dealer no puede realizar apuestas");
            interaction.reply({
                content: "El dealer no puede realizar apuestas",
                ephemeral: true,
            });
            return;
        }
        
        blackjackGame.ananirFichas(idUsuario,idCanal,numeroFichas);

        interaction.reply(`${interaction.user} ha apostado ${numeroFichas}\n${interaction.user} en total ha apostado ${blackjackGame.verFichasJugador(idCanal,idUsuario)}`);
    },
};