const {ApplicationCommandOptionType} = require('discord.js');
const blackjackGame = require('../../blackjack.js')

module.exports = {
    name: 'comenzar',
    description: 'Comenzar partida de blackjack con los jugadores actuales',
    //devOnly: Boolean,
    options:[
        {
            name: "fichas-iniciales",
            description:"cantidad de fichas",
            type: ApplicationCommandOptionType.Integer,
            require: false,
        },
    ],

    callback: (client,interaction) => {
        let numeroFichas = 0;
        const idUsuario = interaction.user.id;
        const idCanal = interaction.channel.id;

        
        if(!blackjackGame.estaJuegoIniciado(idCanal))
            {
                //interaction.reply("No hay ningun juego iniciado");
                interaction.reply({
                    content: "No hay ningun juego iniciado",
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

                if(!blackjackGame.esDealer(idUsuario, idCanal))
                    {
                        //interaction.reply("Solo el dealer puede terminar la partida");
            interaction.reply({
                content: "Solo el dealer puede comenzar la partida",
                ephemeral: true,
            });
            return;
        }
        
        if(Object.keys(blackjackGame.verNumeroJugadores(idCanal)).length === 0)
            {
                //interaction.reply("Solo el dealer puede terminar la partida");
                interaction.reply({
                    content: "Se necesita al menos un jugador",
                    ephemeral: true,
                });
                return;
            }
            
        if(interaction.options.get('fichas-iniciales'))
        {
            numeroFichas = interaction.options.get('fichas-iniciales').value;
            if(numeroFichas <=0)
            {
                interaction.reply({
                    content: "El numero inicial de fichas debe ser mayor a 0",
                    ephemeral: true,
                });
                return;
            }
        }

        blackjackGame.comenzarJuego(idCanal, numeroFichas);

        
        if(numeroFichas === 0)
            interaction.reply(`${interaction.user} ha comenzado la partida con **100** fichas para cada jugador\n\n*Ronda ${blackjackGame.subirRonda(idCanal)}*. Hagan sus apuestas`);
        else
            interaction.reply(`${interaction.user} ha comenzado la partida con **${numeroFichas}** fichas para cada jugador\n\n*Ronda ${blackjackGame.subirRonda(idCanal)}*. Hagan sus apuestas`);

            
        },
    };