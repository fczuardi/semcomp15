import telegramBot from 'node-telegram-bot-api';
import telegramConfig from './conf/telegram';
import messages from './locales/pt/messages';
import game from './src/game';
import server from './src/server';

let bot = new telegramBot(telegramConfig.token, {polling: true});

let newGame = (chatId) => {
    bot.sendMessage(chatId, messages.start.welcome);
};

let checkOpenCommands = (msg) => {
    //verify if there is an open game
    console.log('checkOpenCommands', msg, game.games);
    if (game.games[msg.text] !== undefined){
        console.log('this game exists');
    }
};

bot.on('text', function (msg) {
    console.log(msg);

    switch (msg.text) {
        case '/start': 
            newGame(msg.chat.id);
            break;
        default :
            checkOpenCommands(msg);
    }
});

server.start(game);