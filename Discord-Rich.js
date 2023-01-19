const clientId = '12345678910111213';  // Coloque o ID do seu BOT https://discord.com/developers/applications

// Dependencias 

const DiscordRPC = require("discord-rpc");

const json = require("./package.json")

DiscordRPC.register(clientId);

const rpc = new DiscordRPC.Client({ transport: 'ipc' });

const startTimestamp = new Date();

// Configuração do RichPresence Personalizado

async function setActivity() {

  rpc.setActivity({

    state: `Version: ${json.dependencies["discord-rpc"]}`, 

    details: `Developer: ${json.main}`,

    startTimestamp,

    largeImageKey: 'fewo', // Nome das Imagem hospedada no Rich do seu BOT https://discord.com/developers/

    largeImageText: 'Fewo', // Nome das Imagem hospedada no Rich do seu BOT https://discord.com/developers/

    instance: false,

    // Buttons que irão aparecer no Perfil do Usuário

    buttons: [

    {

        "label": "Developers", // Name do Butão 

        "url": "http://www.google.com/" // Link do Button
    },
    {

      "label": "Equipes",

      "url": "http://www.google.com",

    }
  ]
    },
  );
}

// Startando o RichPresence Personalizado

rpc.on('ready', () => {

  setActivity();

  setInterval(() => {

    setActivity();
 
}, 15e3);

});

rpc.login({ clientId }).catch(console.error);