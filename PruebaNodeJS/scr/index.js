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

    let mensaje = message.content;
        
    if(!mensaje.startsWith("csn"))
    {
        return;
    }

    mensaje = mensaje.substring(3).trim();

    if(mensaje==="pp")
    {
        message.reply("pene");
        return;
    }

    message.reply("Comando no reconocido");
});

client.login("MTIzMjIzODk0NDExNzE5ODkxOA.GI_qHj.COzNx7TqC8r-u9TfhlAbgOLYmhRnw7AK-s2Vmg");