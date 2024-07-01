const blackjackGame = require('./blackjack.js');
const {EmbedBuilder} = require('discord.js');

module.exports = (client,idCanal) =>{
    const canal = client.channels.cache.get(idCanal);

    setTimeout(() => {
        const embed = new EmbedBuilder()
            .setTitle(`Todos los jugadores han tirado`)
            .setDescription(`<@${blackjackGame.verDealer(idCanal)}>, utiliza /cartas para indicar la suma de tus cartas`)
            .setColor('Red');

        canal.send({embeds:[embed]});
    },2000);
};