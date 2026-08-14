// Objeto com todas as etapas do jogo
const historia = {
  inicio: {
    texto: "Você acorda na entrada de uma floresta escura e nebulosa. À sua frente há dois caminhos: um trilho iluminado e uma caverna misteriosa.",
    opcoes: [
      { texto: "Entrar na caverna", proximoNo: "caverna" },
      { texto: "Seguir pelo trilho iluminado", proximoNo: "trilho" }
    ]
  },
  caverna: {
    texto: "Dentro da caverna, você encontra um baú antigo e ouve um ruído vindo do fundo da escuridão.",
    opcoes: [
      { texto: "Abrir o baú", proximoNo: "bau" },
      { texto: "Investigar o ruído", proximoNo: "ruido" },
      { texto: "Voltar para o início", proximoNo: "inicio" }
    ]
  },
  trilho: {
    texto: "Você caminha pelo trilho e encontra um vilarejo pacífico. As pessoas te acolhem e você vive com segurança.",
    opcoes: [
      { texto: "Jogar novamente", proximoNo: "inicio" }
    ]
  },
  bau: {
    texto: "O baú continha uma espada mágica! Com ela, você se torna o maior guerreiro do reino. Vitória!",
    opcoes: [
      { texto: "Jogar novamente", proximoNo: "inicio" }
    ]
  },
  ruido: {
    texto: "Um monstro faminto surge da escuridão e você precisa fugir de volta!",
    opcoes: [
      { texto: "Correr de volta para a entrada", proximoNo: "inicio" }
    ]
  }
};

// Referências dos elementos HTML
const elementoTexto = document.getElementById('texto-historia');
const elementoBotoes = document.getElementById('botoes-opcao');

// Função para mostrar um nó/fase da história
function mostrarHistoria(noChave) {
  const noAtual = historia[noChave];

  // Atualiza o texto principal
  elementoTexto.innerText = noAtual.texto;

  // Limpa os botões anteriores
  elementoBotoes.innerHTML = '';

  // Cria um botão para cada opção disponível
  noAtual.opcoes.forEach(opcao => {
    const botao = document.createElement('button');
    botao.innerText = opcao.texto;
    botao.classList.add('btn-opcao');
    botao.onclick = () => mostrarHistoria(opcao.proximoNo);
    elementoBotoes.appendChild(botao);
  });
}

// Inicia o jogo no nó 'inicio'
mostrarHistoria('inicio');
