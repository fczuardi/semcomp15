import telegramBot from 'node-telegram-bot-api';
import telegramConfig from './conf/telegram';
import messages from './locales/pt/messages';
import game from './src/game';
import server from './src/server';

let bot = new telegramBot(telegramConfig.token, {polling: true});

let welcomeMessage = (chatId) => {
    bot.sendMessage(chatId, messages.start.welcome);
};

let checkTextCommands = (msg) => {
    let text = msg.text,
        isGameToken = game.isGameToken(text);

    //verify if there is an open game
    if (isGameToken){
        if (game.isGameAvailable(text)){
            game.activateGame(text);
            bot.sendMessage(msg.chat.id, messages.start.activated);
        } else {
            console.log('game was already activated');
        }
    }else{
        console.log('checkTextCommands', msg);
    }
};

bot.on('text', function (msg) {
    switch (msg.text) {
        case '/start': 
            welcomeMessage(msg.chat.id);
            break;
        default :
            checkTextCommands(msg);
    }
});

server.start(game);