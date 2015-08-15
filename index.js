import telegramBot from 'node-telegram-bot-api';
import telegramConfig from './conf/telegram';
import messages from './locales/pt/messages';
import server from './src/server';

let bot = new telegramBot(telegramConfig.token, {polling: true});

let newGame = (chatId) => {
    bot.sendMessage(chatId, messages.start.welcome);
};

let checkOpenCommands = (chatId, messageId) => {
    //verify if there is an open game
    console.log('checkOpenCommands', chatId, messageId);
};

bot.on('text', function (msg) {
    console.log(msg);

    switch (msg.text) {
        case '/start': 
            newGame(msg.chat.id);
            break;
        default :
            checkOpenCommands(msg.chat.id, msg.message_id);
    }
});

server.start();