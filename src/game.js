//how many numbers are in the token code
//example 6 for 123.321 kind of tokens
const tokenLength = 6;

let games = {};

let generateCode = () => {
    let randomString = Math.random().toString();
    let token = randomString.substring(2, 2 + tokenLength / 2) + 
                '.' + randomString.substring(2 + tokenLength / 2, 2 + tokenLength);
    let validToken = (games[token] === undefined) ?
                        token:
                        generateCode(games);
    return validToken;
};

let createGame = () => {
    let token = generateCode();
    games[token] = {
        available: true
    };
    console.log('createGame', games);
    return token;
};

export default {
    createGame,
    games
};