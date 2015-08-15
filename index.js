import serverConfig from './conf/server';
import telegramConfig from './conf/telegram';

import koa from "koa";
import Router from 'koa-router';
import requestbody from 'koa-body';
const router = new Router();
const koaBody = requestbody();

import telegram from 'telegram-bot-api';

let telegramAPI = new telegram({
    token: telegramConfig.token
});

//check if the robot exists
telegramAPI.getMe( (err, data) => {
    console.log(err);
    console.log(data);
});
telegramAPI.setWebhook(
    serverConfig.url + '/' + telegramConfig.token, (err,data) => {
    console.log(err);
    console.log(data);
});

//webserver
let app = koa();

router.post('/' + telegramConfig.token, koaBody, function* webHook(next) {
    console.log('post received', koaBody);
    yield next;
});
app.use(router.routes());

app.use(function* defaultResponse(){
  this.body = 'Hello World';
  yield {};
});

console.log(`Server running on port ${serverConfig.port}`);
app.listen(serverConfig.port);