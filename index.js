import serverConfig from './conf/server';
import telegramConfig from './conf/telegram';

import koa from "koa";
import telegram from 'telegram-bot-api';

let telegramAPI = new telegram({
    token: telegramConfig.token
});

//check if the robot exists
telegramAPI.getMe( (err, data) => {
    console.log(err);
    console.log(data);
});

//webserver
let app = koa();

app.use(function* defaultResponse(){
  this.body = 'Hello World';
  yield {};
});

console.log(`Server running on port ${serverConfig.port}`);
app.listen(serverConfig.port);