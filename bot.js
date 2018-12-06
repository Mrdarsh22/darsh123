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
        var prefix = "$";
        if (message.author.bot) return;
        if (!message.content.startsWith(prefix)) return;
      
        let command = message.content.split(" ")[0];
        command = command.slice(prefix.length);
      
      
      let args = message.content.split(" ").slice(1);
      let x = args.join(" ")
        if(message.content.startsWith(prefix + 'say')) {
            message.channel.send(''+x);
                message.delete(999)
        }
        
       
      });

client.on("message", message => {
    if (message.author.bot) return;
    
    let command = message.content.split(" ")[0];
    
    if (command === "$mute") {
          if (!message.member.hasPermission('MANAGE_ROLES')) return message.reply("** you don't have 'Manage Roles permission !! **").catch(console.error);
    let user = message.mentions.users.first();
    let modlog = client.channels.find('name', 'log');
    let muteRole = client.guilds.get(message.guild.id).roles.find('name', 'Muted');
    if (!muteRole) return message.reply("**i can't find 'Muted role !! ' **").catch(console.error);
    if (message.mentions.users.size < 1) return message.reply('**:negative_squared_cross_mark: Ping The Member, That U Want To Mute Him**').catch(console.error);
    
    const embed = new Discord.RichEmbed()
      .setColor(0x00AE86)
      .setTimestamp()
      .addField('use:', '$mute')
      .addField('use', '$unmute')
      .addField('muted:', `${user.username}#${user.discriminator} (${user.id})`)
      .addField('by:', `${message.author.username}#${message.author.discriminator}`)
     
     if (!message.guild.member(client.user).hasPermission('MANAGE_ROLES_OR_PERMISSIONS')) return message.reply('** You dont have Manage Roles permissions **').catch(console.error);
   
    if (message.guild.member(user).roles.has(muteRole.id)) {
  return message.reply("**:white_check_mark: .. The Member Was Muted .. :zipper_mouth:**").catch(console.error);
  } else {
      message.guild.member(user).addRole(muteRole).then(() => {
  return message.reply("**:white_check_mark: .. The Member Was Muted .. :zipper_mouth:**").catch(console.error);
  });
    }
  
  };
  
  
  });


client.on('message', function(msg) {
  let verifLevels = ["None", "Low", "Medium", "(╯°□°）╯︵  ┻━┻", "┻━┻ミヽ(ಠ益ಠ)ノ彡┻━┻"];
  let region = {
      "brazil": "Brazil",
      "eu-central": "Central Europe",
      "singapore": "Singapore",
      "Russia": "Russia",
      "us-central": "U.S. Central",
      "sydney": "Sydney",
      "us-east": "U.S. East",
      "us-south": "U.S. South",
      "us-west": "U.S. West",
      "eu-west": "Western Europe",
      "vip-us-east": "VIP U.S. East",
      "london": "London",
      "amsterdam": "Amsterdam",
      "hongkong": "Hong Kong"
  };

  if(msg.content.startsWith ('$server')) {
    let embed = new Discord.RichEmbed()
    .setColor('RANDOM')
    .setThumbnail(msg.guild.iconURL)
    .setTitle(`${msg.guild.name}`)
    .addField('**__ Server Name __**',`[** __${msg.guild.name}__ **]`,true)
    .addField('**__ OwnerShip __**',`**${msg.guild.owner}**`,true)
    .addField('**__ Server ID __**',`**${msg.guild.id}**`,true)
    .addField('**__ Members Count __**',`[** __${msg.guild.memberCount}__ **]`,true)
    .addField('**__ Online __**',`[** __${msg.guild.members.filter(m=>m.presence.status == 'online').size}__ **]`,true)
    .addField('**__ Verification Level __**',`[** __${verifLevels[msg.guild.verificationLevel]}__** ]`,true)
    .addField('**__ Region __**',`[** __${region[msg.guild.region]}__** ]`,true)
    .addField('**__ Text Channels __**',`[** __${msg.guild.channels.filter(m => m.type === 'text').size}__** ]`,true)
    .addField('**__ Voice Channels __**',`[** __${msg.guild.channels.filter(m => m.type === 'voice').size}__ **]`,true)
    .addField('**__ Created At __**',msg.guild.createdAt.toLocaleString())
    msg.channel.send({embed:embed});
  }
});


client.on('message', async message => {
 
  if (message.author.x5bz) return;
  if (!message.content.startsWith(prefix)) return;
 
 
  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);
 
  let args = message.content.split(" ").slice(1);
 
  if (command == "warn") { 
 
               if(!message.channel.guild) return message.reply('** This command only for servers**');
         
  if(!message.guild.member(message.author).hasPermission("BAN_MEMBERS")) return message.reply("**You Don't Have ` BAN_MEMBERS ` Permission**");
  let user = message.mentions.users.first();
  let reason = message.content.split(" ").slice(2).join(" ");
 
  if (message.mentions.users.size < 1) return message.reply("**???? ???**");
  if(!reason) return message.reply ("**???? ??? ?????**");
 
 
  if(!warns[user.id]) warns[user.id] = {
    warns: 0
  };
 
  warns[user.id].warns++;
 
  fs.writeFile("./warnings.json", JSON.stringify(warns), (err) => {
    if (err) console.log(err)
  });
 
 
  const banembed = new Discord.RichEmbed()
  .setAuthor(`WARNED!`, user.displayAvatarURL)
  .setColor("RANDOM")
  .setTimestamp()
  .addField("**User:**",  '**[ ' + `${user.tag}` + ' ]**')
  .addField("**By:**", '**[ ' + `${message.author.tag}` + ' ]**')
  .addField("**Reason:**", '**[ ' + `${reason}` + ' ]**')
   client.channels.find('name', 'log').send({
    embed : banembed
  })
 
    if(warns[user.id].warns == 2){ 
    let muterole = message.guild.roles.find(`name`, "Muted");
    if(!muterole){
      try{
        muterole = await message.guild.createRole({
          name: "Muted",
          color: "#000000",
          permissions:[]
        })
        message.guild.channels.forEach(async (channel, id) => {
          await channel.overwritePermissions(muterole, {
            SEND_MESSAGES: false,
            ADD_REACTIONS: false
          });
        });
      }catch(e){
        console.log(e.stack);
      }
    }
   
    let tomute = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if(!tomute) return message.reply("**??? ???? ?????? ?????**:x: ") .then(m => m.delete(5000));
   
    let mutetime = "60s";
    await(tomute.addRole(muterole.id));
    message.channel.send(`<@${user.id}> has been temporarily muted`);
 
    setTimeout(async function(){
    await(tomute.removeRole(muterole.id));
      message.reply(`<@${user.id}> has been unmuted.`)
    }, ms(mutetime))
  }
  if(warns[user.id].warns == 3){  
    message.guild.member(user).ban(reason);
    message.reply(`<@${user.id}> has been banned.`)
  }
 
}
}
);








client.login(process.env.BOT_TOKEN);
