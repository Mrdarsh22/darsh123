const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = '$'



client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
client.user.setGame(`DARSH SAD  `,"https://www.twitch.tv/dggamingbot")
  console.log('')
  console.log('')
  console.log('╔[═════════════════════════════════════════════════════════════════]╗')
  console.log(`[Start] ${new Date()}`);
  console.log('╚[═════════════════════════════════════════════════════════════════]╝')
  console.log('')
  console.log('╔[════════════════════════════════════]╗');
  console.log(`Logged in as * [ " ${client.user.username} " ]`);
  console.log('')
  console.log('Informations :')
  console.log('')
  console.log(`servers! [ " ${client.guilds.size} " ]`);
  console.log(`Users! [ " ${client.users.size} " ]`);
  console.log(`channels! [ " ${client.channels.size} " ]`);
  console.log('╚[════════════════════════════════════]╝')
  console.log('')
  console.log('╔[════════════]╗')
  console.log(' Bot Is Online')
  console.log('╚[════════════]╝')
  console.log('')
  console.log('')
});

client.on('message', message => {
    var args = message.content.toLowerCase().split(' ');
    var command = args[0];
    var prefix = '$';
    var wordsSay = message.content.split(' ').slice(1).join(' ');
    
    if(command == prefix + 'say') {
        var sayRole = message.guild.roles.find(r => r.name === 'say'); 
        if(!sayRole) return message.channel.send('i cant find with u `say prmt` ');
        if(!message.member.roles.has(sayRole.id)) return message.channel.send('u should have `say prmt`');
        if(!wordsSay) return message.channel.send(`***EX :*** ${prefix}say Hello World! `);
        
        message.delete();
        let sayE = new Discord.RichEmbed()  
        .setColor('RANDOM')
        .setDescription(`**${wordsSay}**`)  
        
        message.channel.send(sayE);
    }
});

client.login(process.env.BOT_TOKEN);
