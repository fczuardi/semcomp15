import telegram from 'telegram-bot-api';
import telegramConfig from './conf/telegram';

let api = new telegram({
    token: telegramConfig.token
});

api.getMe( (err, data) => {
    console.log(err);
    console.log(data);
});