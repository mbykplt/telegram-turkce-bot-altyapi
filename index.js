var telegramBot=require("node-telegram-bot-api")
const token='TELEGRAMDAN ALINAN TOKEN';
var bot=new telegramBot(token,{polling:true})
bot.on('message', async (mesaj)=>{
  if(mesaj.text==="sa"){
    bot.sendMessage(mesaj.chat.id,"Aleyküm selam, Sevgili " + mesaj.from.first_name)
  }

   if(mesaj.text.includes("bye")){
    bot.sendMessage(mesaj.chat.id,"Görüşürüz, " +mesaj.from.first_name)
  }
  })
bot.onText(/\/fotoğrafat/, (msg) => {

bot.sendPhoto(msg.chat.id,"https://image.freepik.com/free-psd/tropical-foliage-background_53876-91352.jpg",{caption : "Resimle mesaj bak."} );
    
});

 
