const {ApplicationCommandOptionType} = require('discord.js');
const blackjackGame = require('../../blackjack.js')

module.exports = {
    name: 'apostar',
    description: 'apostar fichas',
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
        if(!blackjackGame.juegoIniciado(idCanal))
        {
            interaction.reply("No se ha iniciado ningun juego en este canal");
            return;
        }
        
        blackjackGame.apostarFichas(idUsuario,idCanal,numeroFichas);

        interaction.reply(`${interaction.user} ha apostado ${numeroFichas}\n${interaction.user} en total ha apostado ${blackjackGame.verFichasApostadas(idCanal,idUsuario)}`);
    },
};