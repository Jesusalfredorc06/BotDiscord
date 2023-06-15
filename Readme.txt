1. crear carpeta en visual studio para el ejercicio (botdiscord)

2. iniciar el nodejs.

3. npm init --yes (el packge j.son debe estar dentro de la cap. bot)

4. npm install discord.js (para instalar las dependencias de discord)

5. crear dentro de la carpeta un archivo .Js (dentro de la cap discord)

6. npm install axios (librerias)

7. revisar las dependencias en el archivo json (axion y discord y dotenv)

8. instalar el npm install dotenv (para crear variables de ambiente)

9. en el js:

//estos son los privilegios que marcamos al crear el bot//
require('dotenv').config();
const {Client, GatewayIntenBits} = require ('discord.js')
const axios = require('axios')
const cliente = new Client ({intents:[
	GatewayIntentBits.Guilds,
	GatewayIntentBits.GuildMessages,
	GatewayIntentBits.MessagesContent
]});

client.on('ready'), ()=>{
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

client.login(process.env.DISCORD_BOT_ID); //metodopropiodediscord



10. crear un archivo dentro de la carpeta de discord .env llamado asi (para guardar variables de ambiente, colocar el token)

11. en el archivo .env: DISCORD_BOT_ID= COPIAR Y PEGAR EL TOKEN DEL BOT

12. seguir en el js.

13. en el package.json en el scripts crear "start": "node index.js" //ojo al final de la linea test colocar una coma ,

14. en la terminal npm run start

