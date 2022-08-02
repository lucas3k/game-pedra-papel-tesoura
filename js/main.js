// pegando o elemento do DOM
const btns = document.querySelectorAll('[data-btn^="btn-"]');
const imgPC = document.querySelector('[data-result="img-pc"]');
const imgUser = document.querySelector('[data-result="img-user"]');
const resultMessage = document.querySelector('[data-result="result-value"]');
const containerResult = document.querySelector(
  '[data-result="container-result"]'
);

// pegando as imagens
const imagens = {
  pedra: "../images/pedra.png",
  papel: "../images/papel.png",
  tesoura: "../images/tesoura.png",
};

// diminuindo a repetição de código
const pedra = "pedra",
  papel = "papel",
  tesoura = "tesoura",
  msgEmpate = "Empate",
  msgGanhador = "Você ganhou",
  msgPerdedor = "Você perdeu";

// armazenar o valor do resultado do pc e do usuário
let resultadoPc, resultadoUser;

if (btns && containerResult && imgPC && imgUser && resultMessage) {
  containerResult.style.opacity = 0;

  // função que gera um número aleatório
  const escolha = () => {
    const number = Math.floor(Math.random() * btns.length);
    return number === 0 ? pedra : number === 1 ? papel : tesoura;
  };

  // função que mostra a mensagem de vitória ou derrota ou empate
  const mensagem = (msg) => {
    resultMessage.textContent = msg;
  };

  // função que muda a mensagem conforme o resultado
  const conditionResult = (user, pc) => {
    if (user === pedra && pc === pedra) mensagem(msgEmpate);
    else if (user === pedra && pc === tesoura) mensagem(msgGanhador);
    else if (user === pedra && pc === papel) mensagem(msgPerdedor);

    if (user === papel && pc === papel) mensagem(msgEmpate);
    else if (user === papel && pc === pedra) mensagem(msgGanhador);
    else if (user === papel && pc === tesoura) mensagem(msgPerdedor);

    if (user === tesoura && pc === tesoura) mensagem(msgEmpate);
    else if (user === tesoura && pc === papel) mensagem(msgGanhador);
    else if (user === tesoura && pc === pedra) mensagem(msgPerdedor);
  };

  // função que muda a imagem conforme o resultado
  const handleClick = (e) => {
    containerResult.style.opacity = 1;

    // pegando o valor do botão clicado
    switch (e.target.textContent.toLowerCase()) {
      case pedra:
        resultadoPc = escolha();
        resultadoUser = pedra;
        break;
      case papel:
        resultadoPc = escolha();
        resultadoUser = papel;
        break;
      case tesoura:
        resultadoPc = escolha();
        resultadoUser = tesoura;
        break;
    }

    conditionResult(resultadoUser, resultadoPc);

    // mudando a imagem no DOM
    imgPC.src = imagens[resultadoPc];
    imgUser.src = imagens[resultadoUser];
  };

  // adicionando evento aos botões
  btns.forEach((btn) => btn.addEventListener("click", handleClick));
}
