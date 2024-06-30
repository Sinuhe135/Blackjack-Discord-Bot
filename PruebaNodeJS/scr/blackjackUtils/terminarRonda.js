const blackjackGame = require('./blackjack.js');
const comenzarRonda = require('./comenzarRonda.js');

module.exports =  (client,idCanal) =>{
    const canal = client.channels.cache.get(idCanal);
    let texto = ``;
    let ganancias = 0;

    setTimeout(() => {
        for(const idUsuario in blackjackGame.verApuestasCanal(idCanal))
        {
            if(blackjackGame.verCantidadCartasCanal(idCanal)[idUsuario] > 21)
            {
                blackjackGame.ananirFichas(idUsuario,idCanal,-blackjackGame.verApuestasCanal(idCanal)[idUsuario]);
                ganancias+=blackjackGame.verApuestasCanal(idCanal)[idUsuario];
                texto+=(`<@${idUsuario}> ha perdido. **-${blackjackGame.verApuestasCanal(idCanal)[idUsuario]}** fichas\nAhora tiene ${blackjackGame.verFichasJugador(idUsuario,idCanal)} fichas\n\n`);
                continue;
            }

            if(blackjackGame.verCantidadCartasDealer(idCanal)[idUsuario] > 21)
            {
                blackjackGame.ananirFichas(idUsuario,idCanal,blackjackGame.verApuestasCanal(idCanal)[idUsuario]);
                ganancias-=blackjackGame.verApuestasCanal(idCanal)[idUsuario];
                texto+=(`<@${idUsuario}> ha ganado. **+${blackjackGame.verApuestasCanal(idCanal)[idUsuario]}** fichas\nAhora tiene ${blackjackGame.verFichasJugador(idUsuario,idCanal)} fichas\n\n`);
                continue;
            }

            if(blackjackGame.verCantidadCartasCanal(idCanal)[idUsuario] > blackjackGame.verCantidadCartasDealer(idCanal))
            {
                blackjackGame.ananirFichas(idUsuario,idCanal,blackjackGame.verApuestasCanal(idCanal)[idUsuario]);
                ganancias-=blackjackGame.verApuestasCanal(idCanal)[idUsuario];
                texto+=(`<@${idUsuario}> ha ganado. **+${blackjackGame.verApuestasCanal(idCanal)[idUsuario]}** fichas\nAhora tiene ${blackjackGame.verFichasJugador(idUsuario,idCanal)} fichas\n\n`);
            }
            else if(blackjackGame.verCantidadCartasCanal(idCanal)[idUsuario] < blackjackGame.verCantidadCartasDealer(idCanal))
            {
                blackjackGame.ananirFichas(idUsuario,idCanal,-blackjackGame.verApuestasCanal(idCanal)[idUsuario]);
                ganancias+=blackjackGame.verApuestasCanal(idCanal)[idUsuario];
                texto+=(`<@${idUsuario}> ha perdido. **-${blackjackGame.verApuestasCanal(idCanal)[idUsuario]}** fichas\nAhora tiene ${blackjackGame.verFichasJugador(idUsuario,idCanal)} fichas\n\n`);
            }
            else
            {
                texto+=(`<@${idUsuario}> ha empatado\nConserva sus ${blackjackGame.verFichasJugador(idUsuario,idCanal)} fichas\n\n`);
            }
        }
        
        blackjackGame.ananirGananciasDealer(idCanal,ganancias);
        texto+=`Las ganancias de la casa son de ${blackjackGame.verGananciasDealer(idCanal)} fichas`;
        canal.send(texto);
        blackjackGame.reiniciarRonda(idCanal);
        blackjackGame.cambiarEstadoJuego(idCanal,1);
        comenzarRonda(client,idCanal);
        
    },2000);
};