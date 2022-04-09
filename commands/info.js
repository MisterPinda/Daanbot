const discord = require("discord.js");

module.exports.run = async (client, message, args) => {

   var botEmbed = new discord.MessageEmbed()
   .setTitle("Commands Ranks")
   .setColor(255)
   .setDescription("Commands")
   .addField("Hero", "/help" + "test", true)
   .addField("Inline field 2", "Field text", true)
   .addField("Text field", "Field text")
 
 return message.channel.send({embeds: [botEmbed]});   
}

module.exports.help = {
    name: "Info"

}
