Instruções para instalação
==========================

### Requisitos
- git
- node

### Baixar o fonte e instalar dependencias

    $ git clone https://github.com/fczuardi/semcomp15.git
    $ cd semcomp15
    $ npm install

### Criar bot Telegram e receber uma API token

Adicione [@botfather][botfather] aos seus contatos e inicie o help com o commando

    /start

Crie um novo bot com:

    /newbot

Copie o arquivo ```/conf/telegram.example.js``` retirando o ```.example``` do nome do arquivo.

    $ cp conf/telegram.example.js conf/telegram.js
    
Edite o arquivo recem criado e substitua ```YOUR_API_TOKEN_HERE``` pelo token que o Botfather lhe forneceu.

### Testar

    $ npm test


[botfather]:https://telegram.me/botfather