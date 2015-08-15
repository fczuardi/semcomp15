import telegramConfig from './conf/telegram';
import telegramBot from 'node-telegram-bot-api';

let bot = new telegramBot(telegramConfig.token, {polling: true});

let newGame = (chatId) => {
    bot.sendMessage(chatId, 'Lets start a new game');
};

bot.on('text', function (msg) {
    console.log(msg);

    switch (msg.text) {
        case '/newgame': 
            newGame(msg.chat.id);
            break;
    }
});

