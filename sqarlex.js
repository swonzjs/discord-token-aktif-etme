const { Client, RichEmbed } = require("discord.js");

const Discord = require("discord.js");

const sqarlex1 = new Discord.Client();



// Aktif edilecek token sayısına göre arttırabilirsiniz. Eğer yukarıyı arttırırsanız aynı şekilde aşşağıyıda arttırmanız gerekir.
// Tokenleri tırnakların -> "" arasına yaz.

sqarlex1.login("MTA1NTEzMTI4NDIyMzA0OTg1MA.GD8prN.5wYkDMI8WXwCGrNIK6fDaEZW3BSOK0C8oyd5lI");



/* 
setActivity kısmı size kalmış silebilirsiniz veya istediğiniz gibi değişebilirsiniz baştaki kısma ne yaptığının ismini (ör: Spotify) type kısmına aşağıda bıraktığım dördünden biri;

LISTENING = DİNLİYOR
PLAYING = OYNUYOR
WATCHING = İZLİYOR
STREAMING = YAYINDA*/
  
sqarlex1.on('ready', ()=>{
  sqarlex1.channels.get('1095420221549973636').join()
  console.log(`[Aktif] - ${sqarlex1.user.tag} 1 numaralı hesap aktif.`) 
  sqarlex1.user.setActivity('Spotify', {"type": "LISTENING"});
});



