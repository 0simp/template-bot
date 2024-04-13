const{Client,Collection,Partials,GatewayIntentBits}=require('discord.js');
const commandhandler = require('./massivetits/command');
const eventhander = require('./massivetits/event');
const {token} = require('./config.json');

const client = new Client({ //replace "client" with whatever you want
intents:[
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMembers,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent,
        GatewayIntentBits.DirectMessages,
        GatewayIntentBits.GuildPresences,
        GatewayIntentBits.GuildMessageReactions,
        GatewayIntentBits.GuildVoiceStates,
        GatewayIntentBits.GuildEmojisAndStickers,
],
Partials:[
        Partials.Channel,
        Partials.GuildMember,
        Partials.Message,
        Partials.Reaction,,
]
});

client.commands = new Collection();
client.categories = new Collection();

eventhander.run(client)
commandhandler.run(client)
client.login(token);
//when you generate an OAuth2 URL to invite the bot, make sure to select the "bot" and "applications.commands" scopes