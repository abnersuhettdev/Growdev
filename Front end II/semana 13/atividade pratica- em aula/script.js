const form = document.querySelector("#form-cadastro");
const divContatos = document.querySelector("#contatos");
const containerNotification = document.querySelector('.toast-container');

//como manipular um MODAL do Bootstrap utilizando JS
const modalCadastro = new bootstrap.Modal("#modal-cadastro");
const modalApagar = new bootstrap.Modal("#modal-apagar");

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
    modalCadastro.hide()
    showAlert('danger','Você já cadastrou esse contato');
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
  form.classList.remove('was-validated')
});

function criaID() {
  return new Date().getTime();
}

function addContato(contato) {
  const {id, name, phone} = contato

  const divCol = document.createElement("div");
  divCol.setAttribute("class", "col-12 col-sm-6 col-lg-4 col-xl-3");
  divCol.setAttribute("id", `${id}`)

  const divCard = document.createElement("div");
  divCard.classList.add("card");

  const divCardBody = document.createElement("div");
  divCardBody.classList.add("card-body");

  const cardTitle = document.createElement("h5");
  cardTitle.classList.add("card-title");
  cardTitle.innerText = name;

  const cardText = document.createElement("p");
  cardText.classList.add("card-text");
  cardText.innerText = phone;

  const editBtn = document.createElement("button");
  editBtn.classList.add("btn", "btn-success", "m-1");
  editBtn.setAttribute('onclick', `editar("${id}", "${name}","${phone}")`)
  editBtn.innerHTML = '<i class="bi bi-pencil-square"></i>';

  const deleteBtn = document.createElement("button");
  deleteBtn.classList.add("btn", "btn-danger", "m-1");
  deleteBtn.addEventListener('click', ()=>{
    modalApagar.show();
    const confirmarDelete = document.querySelector('#deletar');
    confirmarDelete.setAttribute('onclick',`deletar(${id})`);
  })

  deleteBtn.innerHTML = '<i class="bi bi-trash-fill "></i>';

  divCardBody.appendChild(cardTitle);
  divCardBody.appendChild(cardText);
  divCardBody.appendChild(editBtn);
  divCardBody.appendChild(deleteBtn);
  divCard.appendChild(divCardBody);
  divCol.appendChild(divCard);

  divContatos.appendChild(divCol);
}

function editar(id, name, phone){
  console.log(id)
  console.log(name)
  console.log(phone)
}

function deletar(id){
  //excluir da lista de contatos local
  const indiceId = listaContatos.findIndex(
  (contato)=> contato.id === id)
  listaContatos.splice(indiceId, 1)
  console.log(listaContatos)

  //atualizar localstorage
  localStorage.setItem("contatos", JSON.stringify(listaContatos))

  //excluir a col da dom
  const col = document.getElementById(`${id}`)
  col.remove()
  

  modalApagar.hide()
}

function showAlert(modo, mensagem){

  const toast = document.createElement('div')
  toast.setAttribute('role', 'alert');
  toast.setAttribute('aria-live', "assertive")
  toast.setAttribute('aria-atomic', 'true');
  toast.setAttribute('class', 'toast align-items-center border-0 show')
  toast.classList.add(`text-bg-${modo}`)

  const content = document.createElement('div');
  content.classList.add('d-flex')

  const toastBody = document.createElement('div');
  toastBody.classList.add('toast-body');
  toastBody.innerText = mensagem

  const btn = document.createElement('button')
  btn.setAttribute('type', 'button')
  btn.setAttribute('class', 'btn-close btn-close-white me-2 m-auto')
  btn.setAttribute('data-bs-dismiss', 'toast')
  btn.setAttribute('aria-label', 'Close')

  content.appendChild(toastBody)
  content.appendChild(btn)
  toast.appendChild(content)

  containerNotification.appendChild(toast)
}


document.addEventListener('DOMContentLoaded', ()=>{
  listaContatos.forEach(contato => {
    addContato(contato)
  });
})
