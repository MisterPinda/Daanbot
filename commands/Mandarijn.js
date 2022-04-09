const discord = require("discord.js");

module.exports.run = async (client, message, args) => {

   var botEmbed = new discord.MessageEmbed()
   .setTitle("Daan eet een Mandarijn")
   .setColor("#ff1493")
 
 return message.channel.send({embeds: [botEmbed], files:['./Images/Daan_Mandarijn.png']});   
}

module.exports.help = {
    name: "Mandarijn"

}