import keys from 'lodash/object/keys';
import messages from '../locales/pt/messages';

//how many numbers are in the token code
//example 6 for 123.321 kind of tokens
const tokenLength = 6;

let games = {};
let players = {};

let isGameToken = (text) => {
    return (games[text] !== undefined);
};

let isGameAvailable = (token) => {
    return (games[token].available === true);
};

let generateCode = () => {
    let randomString = Math.random().toString();
    let token = randomString.substring(2, 2 + tokenLength / 2) + 
                '.' + randomString.substring(2 + tokenLength / 2, 2 + tokenLength);
    let validToken = (isGameToken(token)) ?
                        generateCode(games):
                        token;
    return validToken;
};

let createGame = () => {
    let token = generateCode();
    games[token] = {
        available: true
    };
    console.log('createGame', keys(games));
    return token;
};

let activateGame = (gameId, player) => {
    console.log('activate', gameId);
    
    //check if the player is not already playing another game
    if (players[player.id] !== undefined){
        return messages.start.alreadyPlaying;
    }
    player.gameId = gameId;
    players[player.id] = player;
    games[gameId].available = false;
    return messages.start.activated;
};

let quitGame = (player) => {
    //remove the token
    delete games[players[player.id].gameId];
    //remove the player
    delete players[player.id];
    return messages.quit;
};

export default {
    createGame,
    isGameToken,
    isGameAvailable,
    activateGame,
    quitGame
};