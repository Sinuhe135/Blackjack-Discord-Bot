
class blackjack
{
    constructor()
    {
        if(!blackjack.instance)
        {
            blackjack.instance = this;
            
            this.dealers = {};
            this.fichasJugadores = {};
        }

        return blackjack.instance;
    }

    iniciarJuego(idDealer,channelId)
    {
        this.dealers[channelId] = idDealer;
    }

    juegoIniciado(channelId)
    {
        if(this.dealers[channelId])
        {
            return true;
        }
        return false;
    }

    apostarFichas(idUsuario,idCanal, numeroFichas)
    {
        if (!this.fichasJugadores[idCanal])
        {
            this.fichasJugadores[idCanal] = {};
        }
        
        if (!this.fichasJugadores[idCanal][idUsuario])
        {
            this.fichasJugadores[idCanal][idUsuario] = 0;
        }
        
        this.fichasJugadores[idCanal][idUsuario] += numeroFichas;
    }

    verFichasApostadas(idCanal,idUsuario)
    {
        return this.fichasJugadores[idCanal][idUsuario];
    }
}

class instanciaBlackjack
{
    constructor(canalId, dealerId)
    {
        this.IdCanal = canalId;
        this.IdDealer = dealerId;
        this.fichasUsuarios = {}
    }
}

const blackjackGame = new blackjack();
//Object.freeze(blackjackGame);

module.exports = blackjackGame;