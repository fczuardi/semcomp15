import game from './src/game';
import webServer from './src/server';
import wsServer from './src/ws-server';
import bot from './src/bot';

bot.start(game);
webServer.start(game);