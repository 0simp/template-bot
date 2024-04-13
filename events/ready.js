const{Events, ActivityType}=require('discord.js');
let status = [
    {
        name:'masturbation',
        type:ActivityType.Competing
    },
    {
        name:'WANK WANK',
        type:ActivityType.Custom //set a custom status
    },
    {
        name:'porn',
        type:ActivityType.Watching //set a watching status
    },
    {
        name:'Ava Max',
        type:ActivityType.Listening //set a listening status
    },
    {
        name:'with boobs',
        type:ActivityType.Playing //set a playing status
    },
    {
        name:'Nigspic guzzles semen every single day',
        type:ActivityType.Streaming,
        url:'https://www.youtube.com/watch?v=dQw4w9WgXcQ&pp=ygUXbmV2ZXIgZ29ubmEgZ2l2ZSB5b3UgdXA%3D' //set a streaming status
    }
]

module.exports={
    name: Events.ClientReady,
    once:true,
    execute(client){ //do NOT replace "client" with the name of your client variable here, it is a parameter
        console.log(`boobies`);
        setInterval(() => {
            let randomstatus = Math.floor(Math.random()*status.length);
            client.user.setActivity(status[randomstatus]); //do NOT replace "client" with the name of your client variable here, it is a parameter
        }, 10000);
    }
}