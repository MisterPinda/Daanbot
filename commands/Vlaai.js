const discord = require("discord.js");

module.exports.run = async (client, message, args) => {

   var botEmbed = new discord.MessageEmbed()
   .setTitle("Stukske vlaai")
   .setColor("#ff1493")
 
 return message.channel.send({embeds: [botEmbed], files:['./Images/Vlaai_van_Mauro.jpg']});   
}

module.exports.help = {
    name: "Vlaai"

}