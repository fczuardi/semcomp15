import Koa from 'koa';
import Router from 'koa-router';
import serverConfig from '../conf/server'; 

let app = Koa();
let router = Router();
let game;

const indexHTML = `
<ol>
    <li><a href="./new">/new</a> (new game)</li>
</ol>`;

//routes
router.get('/new', function *(next){
    console.log('New game route', game);
    this.body = game.createGame();
    yield next;
});

//router responses
app.use(router.routes());

//default response
app.use(function *(){
    if (this.body === undefined){
        this.body = indexHTML;
    }
    yield {};
});

let start = (gameLib) => {
    console.log('game', gameLib);
    game = gameLib;
    console.log('Serving on port', serverConfig.port, gameLib);
    app.listen(serverConfig.port);
};

export default {
    start
};