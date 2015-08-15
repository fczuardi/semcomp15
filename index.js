import game from './src/game';
import server from './src/server';
import bot from './src/bot';

bot.start(game);
server.start(game);