import serverConfig from '../../conf/server';
const unknowCommand = [
    'hehe',
    'pode crer',
    'verdade',
    '😁',
    'De boa na lagoa?',
    'Suave na nave?',
    'A pampa na rampa?',
    'De leve na neve?',
    'Beleza na mesa?',
    'Seguro no muro?',
    'Light na night?',
    'Style no baile?',
    'Feliz no chafariz?',
    'Sinistro no registro?'
];
export default {
    start: {
        welcome: 'Pronto para mais um dia de trabalho? Digite seu código de motorista:',
        activated: '👍 Tudo em ordem, voce esta disponivel para receber chamadas! 🏁',
        notAvailable: `⛔ Ooops, este codigo ja esta sendo usado, adiquira um novo em ${serverConfig.url}${serverConfig.api.newGame}`,
        alreadyPlaying: 'Voce ja esta dirigindo sob outro codigo. Desative-o primeiro 🔌 usando /quit'
    },
    unknowCommand: () => unknowCommand[Math.round(Math.random()*unknowCommand.length)],
    quit: (name) => `👋 Ate mais ${name}! Bom descanso.`
};

/*
😁
⛔
🏁
💵️💳💸💰
📞☎
⛽ 
💀 
🚕🚖🚗🚘🚙🚚🚛🚜🚲
🔪🔩🔨💣🚬🔫 
*/