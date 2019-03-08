const Discord = require('discord.js');
const client = new Discord.Client();





client.on('ready', async() => {
var server = "518026451832799232"; // ايدي السررفر
var channel = "518026871695212564";//ايدي الروم
    setInterval(()=>{
    client.guilds.get(server).channels.get(channel).send('Magic Spam , Magic Spam , Magic Spam , Magic Spam , Magic Spam , Magic Spam , Magic Spam , Magic Spam , Magic Spam , Magic Spam , Magic Spam , Magic Spam , Magic Spam , Magic Spam , Magic Spam , Magic Spam , Magic Spam , Magic Spam , ')
    },305);
})

client.on('message',function(message) {
    let prefix = "2";
let args = message.content.split(" ").slice(1).join(" ");
if(message.content.startsWith(prefix + "say")) {
if(!args) return;
message.channel.send(`**# ${args}**`); 
}
});



client.login(process.env.BOT_TOKEN);
