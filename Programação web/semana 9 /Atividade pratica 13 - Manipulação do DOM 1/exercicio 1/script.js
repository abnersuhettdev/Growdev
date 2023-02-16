document.querySelector("#btn").addEventListener("click", function () {
  const userName = prompt("Digite seu Nome");
  document.querySelector("#text").innerText = `E aí ${userName}! 
  Você está deixando o seu site dinâmico.`;
});
