
class blackjack
{
    constructor()
    {
        if(!blackjack.instance)
        {
            blackjack.instance = this;
            
            this.dealers = {};
            this.fichasJugadores = {};
            this.fichasApostadas = {};
            this.estadoJuego = {};
            this.numeroRonda = {};
            this.ultimaInteraccion = {};
            
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
        this.fichasApostadas[idCanal] = {};
        this.estadoJuego[idCanal] = 0;
        this.numeroRonda[idCanal] = 0;

        this.ultimaInteraccion[idCanal] = Date.now();
    }
    
    terminarJuego(idCanal)
    {
        delete this.dealers[idCanal];
        delete this.fichasJugadores[idCanal];
        delete this.fichasApostadas[idCanal];
        delete this.estadoJuego[idCanal];
        delete this.numeroRonda[idCanal];

        delete this.ultimaInteraccion[idCanal];
    }

    refrescarUltimaInteraccion(idCanal)
    {
        this.ultimaInteraccion[idCanal] = Date.now();
    }
    
    unirseAJuego(idUsuario,idCanal)
    {
        this.fichasJugadores[idCanal][idUsuario] = 0;

        this.refrescarUltimaInteraccion(idCanal);
        
    }

    comenzarJuego(idCanal, fichasIniciales)
    {
        if(fichasIniciales<=0)
        {
            fichasIniciales = 100;
        }

        for(const idJugador in this.fichasJugadores[idCanal])
        {
            this.fichasJugadores[idCanal][idJugador] = fichasIniciales;
        }

        this.refrescarUltimaInteraccion(idCanal);
    }

    subirRonda(idCanal)
    {
        return this.numeroRonda[idCanal]+=1;
    }
    
    cambiarEstadoJuego(idCanal,numEstado)
    {
        return this.estadoJuego[idCanal] = numEstado;
    }
    
    ananirFichas(idUsuario,idCanal, numeroFichas)
    {   
        this.fichasJugadores[idCanal][idUsuario] += numeroFichas;
    }
    
    verFichasJugador(idUsuario,idCanal)
    {
        return this.fichasJugadores[idCanal][idUsuario];
    }
    
    apostarFichas(idUsuario,idCanal, numeroFichas)
    {   
        this.fichasApostadas[idCanal][idUsuario] = numeroFichas;

        this.refrescarUltimaInteraccion(idCanal);
    }
    
    verFichasApostadas(idUsuario,idCanal)
    {
        return this.fichasApostadas[idCanal][idUsuario];
    }

    verSiAposto(idUsuario,idCanal)
    {
        if(this.fichasApostadas[idCanal][idUsuario])
            return true;
        return false;
    }

    verUltimaInteraccion()
    {
        return this.ultimaInteraccion;
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
        return Object.keys(this.fichasJugadores[idCanal]).length;
    }
    
        verNumeroJugadoresApostaron(idCanal)
        {
            return Object.keys(this.fichasApostadas[idCanal]).length;
        }
    
        verApuestasCanal(idCanal)
        {
            return this.fichasApostadas[idCanal];
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