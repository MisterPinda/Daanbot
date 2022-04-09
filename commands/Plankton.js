const discord = require("discord.js");

module.exports.run = async (client, message, args) => {

   var botEmbed = new discord.MessageEmbed()
   .setTitle("Plankton is boos")
   .setColor("#ff1493")
 
 return message.channel.send({embeds: [botEmbed]});   
}

module.exports.help = {
    name: "Plankton"

}