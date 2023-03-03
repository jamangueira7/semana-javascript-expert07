<p align="center">
  <a href="#-tecnologias">Tecnologias</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-projeto">Projeto</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-como-rodar">Como rodar</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-como-contribuir">Como contribuir</a>&nbsp;&nbsp;&nbsp;
  </p>

<br>

## JSExpertMax Gesture Controller - Semana JS Expert 7.0

## 🚀 Tecnologias

Esse projeto foi desenvolvido com as seguintes tecnologias:

- [JavaScript](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript)
- [HTML5](https://developer.mozilla.org/pt-BR/docs/Web/HTML/HTML5)
- [CSS3](https://developer.mozilla.org/pt-BR/docs/Web/CSS)
- [NodeJS](https://nodejs.org/en/) - v19.7

## 💻 Projeto

Projeto para movimentar a pagina com as mãos e rodar ou pausar os videos piscando.

Gestos:

- Pagina principal
  - ✊️ - Page down
  - 🖐 - Page up
  - 🤏🏻 - Click

- Pagina de um filme (clicar no botão "Initialize Blink Recognition" para iniciar)
  - 😉 - Pausar ou iniciar video


### Preview

![demo-template-lg.gif](.github%2Fdemo-template-lg.gif)

Projeto rodando [aqui](https://jamangueira7.github.io/semana-javascript-expert07/pages/titles/)

### FAQ
- browser-sync está lançando erros no Windows e nunca inicializa:
    - Solução: Trocar o browser-sync pelo http-server.
        1. instale o **http-server**  com `npm i -D http-server`
        2. no package.json apague todo o comando do `browser-sync` e substitua por `npx http-server .`
        3. agora o projeto vai estar executando na :8080 então vá no navegador e tente acessar o http://localhost:8080/
           A unica coisa, é que o projeto não vai reiniciar quando voce alterar algum código, vai precisar dar um F5 na página toda vez que alterar algo
- Erro no navegador de Webgl is not supported on this device
    - Digite chrome://gpu/ no Chrome para verificar se o webgl está habilitado.
    - Possíveis soluções:
        1. Opção 1: Habilitar a aceleração de hardware quando dispponível
        -  Chrome => Settings > System > Use hardware acceleration when available
        -  Firefox => Browser options > Performance > Use hardware acceleration when available
        2. Opção 2: Atualizar driver da placa de vídeo
        - Veja detalhes no [webgl-is-not-supported-on-chrome-firefox](https://www.thewindowsclub.com/webgl-is-not-supported-on-chrome-firefox)
        3. Opção 3: Trocar de WebGL para CPU (mais lento) ou Web Assembly
        - https://blog.tensorflow.org/2020/03/introducing-webassembly-backend-for-tensorflow-js.html
    - (agradecimentos ao usuario Volpin em nossa comunidade do Discord)

### Checklist Features
- Titles List
    - [x] - Campo para pesquisa não deve travar ao digitar termo de pesquisa
    - [x] - Deve desenhar mãos na tela e fazer com que elementos em segundo plano  continuem sendo clicáveis  🙌
    - [x] - Deve disparar scroll up quando usar a palma das mãos abertas 🖐
    - [x] - Deve disparar scroll down quando usar a palma das mãos fechadas ✊
    - [x] - Deve disparar click no elemento mais próximo quando usar  gesto de pinça 🤏🏻
    - [x] - Ao mover elementos na tela, deve disparar evento **:hover** em elementos em contexto

- Video Player
    - [x] - Deve ser possivel de reproduzir ou pausar videos com o piscar de olhos 😁
    - [x] - Todo processamento de Machine Learning deve ser feito via Web worker


### Créditos

- Interface baseada no projeto [Streaming Service](https://codepen.io/Gunnarhawk/pen/vYJEwoM) de [gunnarhawk](https://github.com/Gunnarhawk)
- Projeto original [Erick Wendel](https://github.com/ErickWendel/semana-javascript-expert07)
- Face Landmarks Detection [tensorflow](https://github.com/tensorflow/tfjs-models/tree/master/face-landmarks-detection)
- Jogo pedra, papel e tesoura [Andreas Schallwig](https://github.com/andypotato/rock-paper-scissors)
- Projeto para pegar gestos das mãos [Liad Yosef](https://github.com/liady/solar-hands)
- PseudoStyler para hakear o hover pelo click [Tyler Sedlar](https://github.com/TSedlar/pseudo-styler)


## 🚀 Como Rodar

- Clone o projeto.
- Execute `npm ci` na pasta que contém o arquivo `package.json` para restaurar os pacotes
- Execute `npm start` e em seguida vá para o seu navegador em [http://localhost:3000](http://localhost:3000) para visualizar a página acima

## 🤔 Como contribuir

- Faça um fork desse repositório;
- Cria uma branch com a sua feature: `git checkout -b minha-feature`;
- Faça commit das suas alterações: `git commit -m 'feat: Minha nova feature'`;
- Faça push para a sua branch: `git push origin minha-feature`.

Depois que o merge da sua pull request for feito, você pode deletar a sua branch.

## 📝 Licença

Esse projeto está sob a licença MIT.