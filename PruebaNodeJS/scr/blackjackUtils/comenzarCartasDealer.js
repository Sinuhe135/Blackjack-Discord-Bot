const blackjackGame = require('./blackjack.js');

module.exports = (client,idCanal) =>{
    const canal = client.channels.cache.get(idCanal);

    setTimeout(() => {
        canal.send(`Todos los jugadores han indicado la cantidad de sus cartas.\n\n<@${blackjackGame.verDealer(idCanal)}>, utiliza /cartas para indicar lo que obtuviste en tus cartas`);
    },2000);
};