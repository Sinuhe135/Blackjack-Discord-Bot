const blackjackGame = require('./blackjack.js');

module.exports = (client,idCanal) =>{
    const canal = client.channels.cache.get(idCanal);

    setTimeout(() => {
        blackjackGame.cambiarEstadoJuego(idCanal,1);
        canal.send(`*Ronda ${blackjackGame.subirRonda(idCanal)}*\n\nUtilizar /apostar para apostar fichas`);
    },2000);
};