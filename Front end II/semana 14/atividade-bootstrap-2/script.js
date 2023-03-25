// Exercício 1
const btnModal = document.getElementById('btn-modal')
const modal = new bootstrap.Modal("#modal")

btnModal.addEventListener('click', ()=> {
     modal.show()

    const btnSim = document.getElementById('btn-sim')
    btnSim.setAttribute('onclick', 'sim()')

    const btnNao = document.getElementById('btn-nao')
    btnNao.setAttribute('onclick', 'nao()')

})

function sim(){
    console.log("Exclusão dos dados confirmada")
    modal.hide()
}

function nao(){
    console.log("Exclusão dos dados NÃO confirmada")
    modal.hide()
}

// Exercício 2
const accordion = document.getElementById('accordion')

const listaTarefas = [{
    codigo: '1',
    nome: 'Trabalhar',
    detalhamento : 'das 08h até 17h'
},{
    codigo: '2',
    nome: 'Exercitar',
    detalhamento : 'das 17:15 até 18:40h'
},{
    codigo: '3',
    nome: 'Estudar',
    detalhamento : 'das 19h até 22:30h'
}]


listaTarefas.forEach((tarefa) =>{
    criarItem(tarefa)
})

function criarItem(tarefa){

//     const accordionItem = 
//     `<div class="accordion-item">
//               <h2 class="accordion-header" id="${tarefa.codigo}">
//                 <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-${tarefa.codigo}" aria-expanded="false" aria-controls="flush-${tarefa.codigo}">
//                 ${tarefa.nome} ${tarefa.codigo}
//                 </button>
//               </h2>
//               <div id="flush-${tarefa.codigo}" class="accordion-collapse collapse" aria-labelledby="flush-${tarefa.codigo}" data-bs-parent="#accordion">
//                 <div class="accordion-body">${tarefa.detalhamento}</div>
//               </div>
//      </div>
// `
 
    const accordionItem = document.createElement('div')
    accordionItem.setAttribute('class','accordion-item') 

    const accordionHeader =  document.createElement('h2')
    accordionHeader.setAttribute('class', 'accordion-header')
    accordionHeader.setAttribute('id', `flush-${tarefa.codigo}`)

    const accordionButton = document.createElement('button')
    accordionButton.setAttribute('class',"accordion-button")
    accordionButton.classList.add('collapsed')
    accordionButton.setAttribute('type',"button")
    accordionButton.setAttribute('data-bs-toggle',"collapse")
    accordionButton.setAttribute('data-bs-target',`#flush-collapse${tarefa.codigo}`)
    accordionButton.setAttribute('aria-expanded',"false")
    accordionButton.setAttribute('aria-controls',`#flush-collapse${tarefa.codigo}`)
    accordionButton.innerText = `${tarefa.nome} #${tarefa.codigo}`

    const accordionDiv = document.createElement('div')
    accordionDiv.setAttribute('id', `flush-collapse${tarefa.codigo}`)
    accordionDiv.setAttribute('class', 'accordion-collapse')
    accordionDiv.classList.add('collapse')
    accordionDiv.setAttribute('aria-labelledby', `flush-${tarefa.codigo}`)
    accordionDiv.setAttribute('data-bs-parent', '#accordion')

    const accordionBody = document.createElement('div')
    accordionBody.setAttribute('class', 'accordion-body')
    accordionBody.innerHTML = tarefa.detalhamento

    accordionDiv.appendChild(accordionBody)
    accordionHeader.appendChild(accordionButton)
    accordionItem.appendChild(accordionHeader)
    accordionItem.appendChild(accordionDiv)

    accordion.appendChild(accordionItem)
}


//Exercicio 3
const btnModal2 = document.getElementById('btn-modal2')

btnModal2.addEventListener('click', ()=> {
     modal.show()

    const btnSim = document.getElementById('btn-sim')
    btnSim.setAttribute('onclick', 'showAlert("alert-success","Exclusão dos dados confirmada")')

    const btnNao = document.getElementById('btn-nao')
    btnNao.setAttribute('onclick', 'showAlert("alert-danger","Exclusão dos dados NÃO confirmada")')

})

function showAlert(modo, mensagem){

    const divAlert = document.getElementById('alert')
    const alert = document.createElement('div')
    alert.setAttribute('class',`alert ${modo}`)
    alert.setAttribute('role', 'alert')
    alert.innerText = mensagem

    divAlert.appendChild(alert)
    modal.hide()
}
