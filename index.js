var telegram = require('telegram-bot-api');
var telegramConfig = require('./conf/telegram');

var api = new telegram({
        token: telegramConfig.token
});

api.getMe(function(err, data)
{
    console.log(err);
    console.log(data);
});