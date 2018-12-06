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



client.on('message', message => {
	var prefix = "$";
    if(message.author.bot) return;
    var name1 = message.mentions.users.first();
    var reason = message.content.split(' ').slice(2).join(' ');
    if(message.content.startsWith(prefix + 'report')) {
        if(message.author.bot) return;
        if(!message.guild.channels.find('name', 'report_list')) return message.channel.send('**نرجو عمل روم باسم report**').then(msg => msg.delete(5000));
    if(!name1) return message.reply('**:innocent:Ping:innocent:**').then(msg => msg.delete(3000))
        message.delete();
    if(!reason) return message.reply('**:innocent:The Reason؟:innocent:**').then(msg => msg.delete(3000))
        message.delete();
    var abod = new Discord.RichEmbed()
    .setTitle(`Report by: ${message.author.tag}`)
    .addField('**The Member:**', `${name1}`, true)
    .addField('**In Channel:**', `${message.channel.name}`, true)
    .addField('**THE Reason:**', `${reason}`, true)
    .setFooter(`${message.author.username}#${message.author.discriminator}`, message.author.avatarURL)
    .setTimestamp()
        message.guild.channels.find('name', 'report_list').sendEmbed(abod)
    message.reply('**:sunglasses:Warned:sunglasses:**').then(msg => msg.delete(3000));
    }
});




client.login(process.env.BOT_TOKEN);
