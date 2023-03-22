const form = document.querySelector("#form-cadastro");
const divContatos = document.querySelector("#contatos");

//como manipular um MODAL do Bootstrap utilizando JS
const modalCadastro = new bootstrap.Modal("#modal-cadastro");

let listaContatos = JSON.parse(localStorage.getItem("contatos")) ?? [];

form.addEventListener("submit", (e) => {
  e.preventDefault();

  //chama a validação do formulário
  if (!form.checkValidity()) {
    form.classList.add("was-validated");
    return;
  }

  const name = form.name.value;
  const phone = form.telefone.value;

  //logica necessária para o cadastro
  const existe = listaContatos.some((contato) => contato.phone === phone);

  if (existe) {
    alert("Você já cadastrou esse contato anteriormente!");
    return;
  }

  const contato = {
    id: criaID(),
    name: name,
    phone: phone,
  };

  listaContatos.push(contato);
  localStorage.setItem("contatos", JSON.stringify(listaContatos));
  form.reset();
  addContato(contato);
  modalCadastro.hide();
});

function criaID() {
  return new Date().getTime();
}

function addContato(contato) {
  const divCol = document.createElement("div");
  divCol.setAttribute("class", "col-12 col-sm-6 col-lg-4 col-xl-3");

  const divCard = document.createElement("div");
  divCard.classList.add("card");

  const divCardBody = document.createElement("div");
  divCardBody.classList.add("card-body");

  const cardTitle = document.createElement("h5");
  cardTitle.classList.add("card-title");
  cardTitle.innerText = contato.name;

  const cardText = document.createElement("p");
  cardText.classList.add("card-text");
  cardText.innerText = contato.phone;

  const editBtn = document.createElement("button");
  editBtn.classList.add("btn", "btn-success", "m-1");
  editBtn.innerHTML = '<i class="bi bi-pencil-square"></i>';

  const deleteBtn = document.createElement("button");
  deleteBtn.classList.add("btn", "btn-danger", "m-1");
  deleteBtn.innerHTML = '<i class="bi bi-trash-fill "></i>';

  divCardBody.appendChild(cardTitle);
  divCardBody.appendChild(cardText);
  divCardBody.appendChild(editBtn);
  divCardBody.appendChild(deleteBtn);
  divCard.appendChild(divCardBody);
  divCol.appendChild(divCard);

  divContatos.appendChild(divCol);
}
