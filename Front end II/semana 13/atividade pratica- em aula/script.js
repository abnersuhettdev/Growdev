const form = document.querySelector("#form-cadastro");
const formAtualizar = document.querySelector("#form-editar")

const divContatos = document.querySelector("#contatos");
const containerNotification = document.querySelector('.toast-container');

const nameUpdate = document.querySelector('#name-update');
const phoneUpdate = document.querySelector("#telefone-update");

//como manipular um MODAL do Bootstrap utilizando JS
const modalCadastro = new bootstrap.Modal("#modal-cadastro");
const modalApagar = new bootstrap.Modal("#modal-apagar");
const modalEditar = new bootstrap.Modal("#modal-editar");

let listaContatos = JSON.parse(localStorage.getItem("contatos")) ?? [];
let idAtualizar = -1

document.addEventListener('DOMContentLoaded', ()=>{
  listaContatos.forEach(contato => {
    addContato(contato)
  });
})

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

formAtualizar.addEventListener('submit',(e)=>{
  e.preventDefault();  

  if (!formAtualizar.checkValidity()) {
    formAtualizar.classList.add("was-validated");
    return;
  }

  // some => desconsiderar o id que esta sendo atualizado
  const exist = listaContatos.some((contato) => {
    if(contato.id === idAtualizar) {
        return false
    }

    return contato.phone === phoneUpdate.value
  })

    if(exist) {
    modalEditar.hide()
    showAlert('danger', 'Esse número já esta salvo como outro contato!')
    return
  }

  // ATUALIZAR A LISTA LOCAL
  const indiceUpdate = listaContatos.findIndex((contato) => contato.id === idAtualizar);
  listaContatos[indiceUpdate].name = nameUpdate.value
  listaContatos[indiceUpdate].phone = phoneUpdate.value
  
  //Atualiza Local Storage
  localStorage.setItem("contatos", JSON.stringify(listaContatos))

  //Atualiza Elemento da Dom
  const cardTitle = document.querySelector(`#contato-${idAtualizar} .card-title`)
  cardTitle.innerText = nameUpdate.value

  const cardText = document.querySelector(`#contato-${idAtualizar} .card-text`)
  cardText.innerText = phoneUpdate.value

  modalEditar.hide();
  showAlert("success", "Contato atualizado com sucesso")
  idAtualizar = -1
  formAtualizar.classList.remove('was-validated')
} )

function criaID() {
  return new Date().getTime();
}

function addContato(contato) {
  const {id, name, phone} = contato

  const divCol = document.createElement("div");
  divCol.setAttribute("class", "col-12 col-sm-6 col-lg-4 col-xl-3");
  divCol.setAttribute("id", `contato-${id}`)

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
  editBtn.addEventListener('click', ()=> {
    modalEditar.show();
    
    nameUpdate.value = name;
    phoneUpdate.value = phone;

    idAtualizar = id 
  })
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

function deletar(id){
  //excluir da lista de contatos local
  const indiceId = listaContatos.findIndex(
  (contato)=> contato.id === id)
  listaContatos.splice(indiceId, 1)
  console.log(listaContatos)

  //atualizar localstorage
  localStorage.setItem("contatos", JSON.stringify(listaContatos))

  //excluir a col da dom
  const col = document.getElementById(`contato-${id}`)
  col.remove()
  

  modalApagar.hide()
  showAlert('success','Contato deletado com sucesso')
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
  toastBody.innerText = `${mensagem}`

  const btn = document.createElement('button')
  btn.setAttribute('type', 'button')
  btn.setAttribute('class', 'btn-close btn-close-white me-2 m-auto')
  btn.setAttribute('data-bs-dismiss', 'toast')
  btn.setAttribute('aria-label', 'Close')

  content.appendChild(toastBody)
  content.appendChild(btn)
  toast.appendChild(content)

  containerNotification.appendChild(toast)

  setTimeout(()=>{
    toast.remove()
  }, 5000)
}


