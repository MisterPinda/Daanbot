const discord = require("discord.js");

module.exports.run = async (client, message, args) => {

   var botEmbed = new discord.MessageEmbed()
   .setTitle("Selfie van Thijn")
   .setColor("#ff1493")
 
 return message.channel.send({embeds: [botEmbed], files:['./Images/nThijn.jpg']});   
}

module.exports.help = {
    name: "Thijn"

}