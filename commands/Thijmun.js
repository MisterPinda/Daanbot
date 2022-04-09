const discord = require("discord.js");

module.exports.run = async (client, message, args) => {

   var botEmbed = new discord.MessageEmbed()
   .setTitle("Lil Thima AKA raar persoon")
   .setColor("#ff1493")
 
 return message.channel.send({embeds: [botEmbed], files:['./Images/lil_thima.png']});   
}

module.exports.help = {
    name: "Thijmun"

}