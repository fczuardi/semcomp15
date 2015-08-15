import serverConfig from './conf/server';
import telegramConfig from './conf/telegram';

import koa from "koa";
import Router from 'koa-router';
import requestbody from 'koa-body';
const router = new Router();
const koaBody = requestbody();

import telegramBot from 'node-telegram-bot-api';

// Setup polling way
var bot = new telegramBot(telegramConfig.token, {polling: true});
bot.on('text', function (msg) {
  var chatId = msg.chat.id;
  // photo can be: a file path, a stream or a Telegram file_id

if (msg.text == '/love') {
  var opts = {
    reply_to_message_id: msg.message_id,
    reply_markup: JSON.stringify({
      keyboard: [
        ['Yes, you are the bot of my life ❤'],
        ['No, sorry there is another one...']]
    })
  };
  bot.sendMessage(chatId, 'Do you love me?', opts);
}
    
    
});

// //webserver
// let app = koa();

// router.post('/' + telegramConfig.token, koaBody, function* webHook(next) {
//     console.log('post received', this.request.body);
//     yield next;
// });
// app.use(router.routes());

// app.use(function* defaultResponse(){

//     if (this.request.method == 'POST') {
//         console.log(this.request.body);
//         // => POST body
//         this.body = JSON.stringify(this.request.body);
//     }else{
//         this.body = 'Hello World';
//     }
//     yield {};
// });

// console.log(`Server running on port ${serverConfig.port}`);
// app.listen(serverConfig.port);