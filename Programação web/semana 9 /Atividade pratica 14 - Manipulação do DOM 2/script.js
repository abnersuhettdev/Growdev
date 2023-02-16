const cards = document.querySelectorAll(".card");
const title = document.querySelectorAll(".titulo-card");
const description = document.querySelectorAll(".descricao-card");
const btn = document.querySelectorAll("button");
const editBtn = document.querySelectorAll(".botao-editar");
const delBtn = document.querySelectorAll(".botao-apagar");

cards.forEach((card) => {
  card.classList.add("background");
});

title.forEach((title) => {
  title.innerText = "Meu Card";
  title.classList.add("title");
});

description.forEach((description) => {
  description.innerText = "Descrição modificada pelo JavaScript";
  description.classList.add("description");
});

btn.forEach((btn) => {
  btn.classList.add("btn");
});

editBtn.forEach((btn) => {
  btn.classList.add("edit");
  btn.addEventListener("click", editarCard);
});

delBtn.forEach((btn) => {
  btn.classList.add("delete");
  btn.addEventListener("click", apagarCard);
});

function editarCard() {
  alert("Clicou em Editar!");
}

function apagarCard() {
  let apagar = confirm("Tem certeza que deseja excluir o Card?");

  if (apagar) {
    alert("Confirmado!");
  } else {
    alert("Cancelou");
  }
}
