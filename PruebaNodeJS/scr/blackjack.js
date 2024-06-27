
class blackjack
{
    constructor()
    {
        if(!blackjack.instance)
        {
            blackjack.instance = this;
            
            this.dealers = {};
            this.fichasJugadores = {};
            this.estadoJuego = {};
            this.numeroRonda = {};
            
            //ESTADOS
            //0 = uniendose
            //1 = apostando
            //2 = cartas
        }

        return blackjack.instance;
    }

    iniciarJuego(idDealer,idCanal)
    {
        this.dealers[idCanal] = idDealer;
        this.fichasJugadores[idCanal] = {};
        this.estadoJuego[idCanal] = 0;
        this.numeroRonda[idCanal] = 0;
    }
    
    terminarJuego(idCanal)
    {
        delete this.dealers[idCanal];
        delete this.fichasJugadores[idCanal];
        delete this.estadoJuego[idCanal];
        delete this.numeroRonda[idCanal];
    }
    
    unirseAJuego(idUsuario,idCanal)
    {
        this.fichasJugadores[idCanal][idUsuario] = 0;
    }

    comenzarJuego(idCanal, fichasIniciales)
    {
        this.estadoJuego[idCanal] = 1;
        if(fichasIniciales<=0)
        {
            fichasIniciales = 100;
        }

        for(const idJugador in this.fichasJugadores[idCanal])
        {
            this.fichasJugadores[idCanal][idJugador] = fichasIniciales;
        }
    }

    subirRonda(idCanal)
    {
        return this.numeroRonda[idCanal]+=1;
    }
    
    ananirFichas(idUsuario,idCanal, numeroFichas)
    {   
        this.fichasJugadores[idCanal][idUsuario] += numeroFichas;
    }
    
    verFichasJugador(idCanal,idUsuario)
    {
        return this.fichasJugadores[idCanal][idUsuario];
    }
    
    estaJuegoIniciado(idCanal)
    {
        if(this.dealers[idCanal])
            return true;
        return false;
    }

    esDealer(idUsuario,idCanal)
    {
        if(idUsuario === this.dealers[idCanal])
            return true;
        return false;
    }

    estaUsuarioEnJuego(idUsuario,idCanal)
    {
        if(typeof this.fichasJugadores[idCanal][idUsuario] === 'undefined')
            return false;
        return true;
    }

    verEstadoJuego(idCanal)
    {
        return this.estadoJuego[idCanal];
    }

    verNumeroJugadores(idCanal)
    {
        return this.fichasJugadores[idCanal];
    }
}

const blackjackGame = new blackjack();
//Object.freeze(blackjackGame);

module.exports = blackjackGame;

/*
/jugar #inicia el juego en el canal y lo convierte en dealer

/unirse #lo ponen todos los jugadores que vayan a jugar

-uniendose
-apostando
-poniendo cartas

/iniciar 100 #dealer inicia el juego

/apostar 10 #cada jugador apuesta la cantidad que quiere.

/cartas 20 #ya que todos apostaron. cada jugador pone lo que sacó. cuando todos pusieron, el dealer pone lo que le salió a él y marca el final de la ronda. 

/terminar #el dealer lo pone en cualquier momento para acabar el juego. sale el leaderboard

/instrucciones
*/