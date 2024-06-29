const blackjackGame = require('./blackjack.js');

module.exports =  (client,idCanal) =>{
    const canal = client.channels.cache.get(idCanal);
    let idMayorApuesta;
    let fichasMayorApuesta=0;

    setTimeout(() => {
        for(const idUsuario in blackjackGame.verApuestasCanal(idCanal))
        {
            if(blackjackGame.verApuestasCanal(idCanal)[idUsuario] > fichasMayorApuesta)
            {
                idMayorApuesta = idUsuario;
                fichasMayorApuesta = blackjackGame.verApuestasCanal(idCanal)[idUsuario];
            }
        }

        blackjackGame.cambiarEstadoJuego(idCanal,2);
        canal.send(`Todos los jugadores han apostado. La mayor apuesta ha sido de <@${idMayorApuesta}> con ${fichasMayorApuesta} fichas\n\nUtilizar /cartas para indicar cuánto salió en tu tirada`);
    },2000);
};