require('dotenv').config();
const {Client, IntentsBitField, EmbedBuilder} = require('discord.js');
const eventHandler = require('./handlers/eventHandler');

const client = new Client({
    intents: [
        IntentsBitField.Flags.Guilds,
        IntentsBitField.Flags.GuildMembers,
        IntentsBitField.Flags.GuildMessages,
        IntentsBitField.Flags.MessageContent,
    ]
});

eventHandler(client);

client.login(process.env.TOKEN);

/*
client.on('ready',(c) =>{
    console.log(`${c.user.tag} is online`);
});

client.on('messageCreate',(message) => {
    if(message.author.bot)
    {
        return;
    }
});

client.on('interactionCreate', (interaction) => {
    if(!interaction.isChatInputCommand()) return;

    if(interaction.commandName === 'apostar')
    {
        const fichasApostadas = interaction.options.get('fichas').value;

        cantidadApostada+=fichasApostadas;

        interaction.reply("Has apostado "+fichasApostadas);
    }
    else if(interaction.commandName === 'puntuaciones')
    {
        const embed = new EmbedBuilder()
            .setTitle("Puntuaciones")
            .setDescription("- 56\n- 33\nFichas apostadas: "+cantidadApostada)
            .setColor('Yellow');

        interaction.reply({embeds:[embed]});
    }
});
*/