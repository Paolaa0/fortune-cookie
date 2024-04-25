document.addEventListener("DOMContentLoaded", function () {
  // Elementos da tela 1
  const screen1 = document.querySelector(".screen1");
  const btnOpen = document.getElementById("btnOpen");

  // Elementos da tela 2
  const screen2 = document.querySelector(".screen2");
  const btnAnother = document.getElementById("btnAnother");

  // Esconde a tela 2 inicialmente
  screen2.classList.add("hide");

  // Evento de clique para abrir o biscoito
  btnOpen.addEventListener("click", function () {
    screen1.classList.add("hide");
    screen2.classList.remove("hide");
    showFortune();
  });

  // Evento de clique para abrir outro biscoito
  btnAnother.addEventListener("click", function () {
    screen1.classList.remove("hide");
    screen2.classList.add("hide");
    // Remover a mensagem de sorte anterior ao abrir outro biscoito
    const fortuneMessage = document.querySelector(".screen2 p");
    if (fortuneMessage) {
      fortuneMessage.remove();
    }
  });

  // Função para mostrar as frses aleatória
  function showFortune() {
    const fortunes = [
      "A vida trará grandes surpresas para você hoje.",
      "Um grande amor está prestes a entrar em sua vida.",
      "Você terá sucesso em todos os seus empreendimentos.",
      "Boas notícias estão a caminho.",
      "Seja paciente, sua hora chegará em breve.",
      "Grandes oportunidades surgirão em seu caminho.",
      "Sua criatividade será reconhecida e recompensada.",
      "Momentos de felicidade e alegria estão se aproximando.",
      "Você receberá uma notícia inesperadamente boa em breve.",
      "Suas habilidades serão valorizadas e admiradas por outros.",
      "A persistência levará você ao sucesso.",
      "A confiança no futuro trará realizações extraordinárias.",
      "Cada dia é uma nova chance de alcançar seus sonhos.",
      "A gratidão atrai mais coisas para serem gratas.",
      "Seu entusiasmo contagiará e inspirará aqueles ao seu redor.",
    ];

    const randomIndex = Math.floor(Math.random() * fortunes.length);
    const randomFortune = fortunes[randomIndex];

    const fortuneMessage = document.createElement("p");
    fortuneMessage.textContent = randomFortune;

    fortuneMessage.classList.add("fortune-message");

    const fortuneMessageContainer = document.getElementById("fortuneMessage");
    fortuneMessageContainer.appendChild(fortuneMessage);
  }
});
