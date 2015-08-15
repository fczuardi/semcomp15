import telegramBot from 'node-telegram-bot-api';
import telegramConfig from '../conf/telegram';
import messages from '../locales/pt/messages';

let game;

let bot = new telegramBot(
    telegramConfig.token, {
        polling: {
            interval: 1000
        }
    });

let welcomeMessage = (chatId) => {
    bot.sendMessage(chatId, messages.start.welcome);
};

let quitMessage = (msg) => {
    bot.sendMessage(msg.chat.id, game.quitGame(msg.from));
};

let checkTextCommands = (msg) => {
    let text = msg.text,
        isGameToken = (text.length > 5) ? 
                game.isGameToken(text) :
                false;

    //verify if there is an open game
    if (isGameToken){
        if (game.isGameAvailable(text)){
            bot.sendMessage(msg.chat.id, game.activateGame(text, msg.from));
        } else {
            console.log('game was already activated');
            bot.sendMessage(msg.chat.id, messages.start.notAvailable);
        }
    }else{
        console.log('checkTextCommands', msg);
        bot.sendMessage(msg.chat.id, messages.unknowCommand());
    }
};

let start = (gameLib) => {
    game = gameLib;
    console.log('Starting bot...');
    bot.on('text', function (msg) {
        switch (msg.text) {
            case '/start': 
                welcomeMessage(msg.chat.id);
                break;
            case '/quit': 
                quitMessage(msg);
                break;
            default :
                checkTextCommands(msg);
        }
    });
};

export default {
    start
};