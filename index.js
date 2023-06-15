//estos son los privilegios que marcamos al crear el bot//
require('dotenv').config();
const {Client, GatewayIntentBits} = require ('discord.js');
const axios = require('axios')
const client = new Client ({intents:[
	GatewayIntentBits.Guilds,
	GatewayIntentBits.GuildMessages,
	GatewayIntentBits.MessageContent
]});

client.on('ready', ()=>{
	console.log('El bot esta listo');
})


//esto es para enviar mensajes al bot para que los muestre en el chat
client.on('messageCreate', async(message)=>{
	if(message.content === 'hola'){
		message.reply({
			content:'Bienvenido a nuestro canal'
		})

	}else if(message.content === 'quote'){
		let resp = await axios.get('https://api.quotable.io/ramdon'); //esta api genera frases!!
		const quote = resp.data.content;
		message.reply({
			content:quote,	 

})
}
})

client.login(process.env.DISCORD_BOT_ID); //metodopropiodediscord
