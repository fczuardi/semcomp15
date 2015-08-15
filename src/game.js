//how many numbers are in the token code
//example 6 for 123.321 kind of tokens
const tokenLength = 6;

//state
let games = [];

let generateCode = () => {
    let randomString = Math.random().toString();
    let token = randomString.substring(2, 2 + tokenLength / 2) + 
                '.' + randomString.substring(2 + tokenLength / 2, 2 + tokenLength);
    if (games.indexOf(token) !== -1){
        console.log('token repetido');
    }
    let validToken = (games.indexOf(token) === -1) ?
                        token:
                        generateCode();
    return validToken;
};

let createGame = () => {
    let token = generateCode();
    games.push(token);
    console.log('createGame', games);
    return token;
};

export default {
    createGame
};