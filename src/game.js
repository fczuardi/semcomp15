import keys from 'lodash/object/keys';

//how many numbers are in the token code
//example 6 for 123.321 kind of tokens
const tokenLength = 6;

let games = {};

let isGameToken = (text) => {
    console.log('isGameToken', games[text], (games[text] !== undefined));
    return (games[text] !== undefined);
};

let isGameAvailable = (token) => {
    console.log('isGameAvailable', (games[token].available === true));
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

let activateGame = (gameId) => {
    console.log('activate', gameId);
    games[gameId].available = false;
};

export default {
    createGame,
    isGameToken,
    isGameAvailable,
    activateGame
};