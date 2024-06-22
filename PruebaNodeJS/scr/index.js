const {Client, IntentsBitField} = require('discord.js');

const client = new Client({
    intents: [
        IntentsBitField.Flags.Guilds,
        IntentsBitField.Flags.GuildMembers,
        IntentsBitField.Flags.GuildMessages,
        IntentsBitField.Flags.MessageContent,
    ]
});

client.on('ready',(c) =>{
    console.log(`${c.user.tag} is online`);
});

client.on('messageCreate',(message) => {
    if(message.author.bot)
    {
        return;
    }

    leerMensaje(message);
});

function leerMensaje(message)
{
    let palabras = message.content.split(/\s+/);

    if(palabras[0] != "csn")
    {
        return;
    }

    if(typeof palabras[1] === "undefined")
    {
        message.reply("Lista de comandos:\nbet\nap");
    }
    else if(palabras[1]==="apostar")
    {
        funcionBet(palabras.slice(2), message);
    }
    else if(palabras[1]==="fichas")
    {
        funcionFichas(message);
    }
    else if(palabras[1]==="pp")
    {
        funcionPp(message);
    }
    else
    {
        message.reply("Comando no reconocido");
    }

}

function funcionBet(palabrasBet, message)
{
    if(typeof palabrasBet[0] ===  "undefined")
    {
        message.reply("Se debe apostar un numero entero positivo");
        return;
    
    }
    if(typeof palabrasBet[1] !==  "undefined")
    {
        message.reply("Se debe apostar un numero entero positivo");
        return;
    }

    if(palabrasBet[0].search(/^\d+$/) == -1)
    {
        message.reply("Se debe apostar un numero entero positivo");
        return;
    }

    fichas = parseInt(palabrasBet[0]);

    message.reply("Has apostado " + fichas);
}

function funcionPp(message)
{
    message.reply("polla");
}

function funcionPp(message)
{
    message.reply("polla");
}

client.login("MTIzMjIzODk0NDExNzE5ODkxOA.GI_qHj.COzNx7TqC8r-u9TfhlAbgOLYmhRnw7AK-s2Vmg");