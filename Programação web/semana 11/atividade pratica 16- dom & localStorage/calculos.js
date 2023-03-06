/* Desenvolva aqui a rotina */
let valorBase;
let valorTransporte;
let valorAlimentacao;
let receitaTotal;

let valorAutomovel;
let faltas;
let totalDescontos;

let valorTotal;

window.addEventListener('load', ()=>{
    //Receita
    valorBase = document.querySelector('#valorBase')
    valorTransporte = document.querySelector('#valorTransporte')
    valorAlimentacao = document.querySelector('#valorAlimentacao')

    //Receita Total
    receitaTotal = document.querySelector('#receitaTotal')
     
    //Automovel
    valorAutomovel = document.querySelector('#valorAutomovel')
    faltas = document.querySelector('#faltas')
    
    //Descontos
    totalDescontos = document.querySelector('#totalDescontos')
    

    //Valor Total
    valorTotal = document.querySelector('#valorTotal')

    
    document.querySelector('#btnCalcular').addEventListener("click", function (){
        calcular()

    })

    const inputs = document.querySelectorAll('input')
    
    //adicionando elementos dinamicamente ao sair do input
    for(const input of inputs){
        input.addEventListener('blur', ()=>{
            calcular()
        })
    }

    lerLocalStorage()
})

//funcao para buscar no localStorage
function lerLocalStorage(){
    const inputs = document.querySelectorAll('input')

    inputs.forEach((input) => {
        const valor = localStorage.getItem(input.id)

        //se Existe valor atualizamos caso não mantém 0

        if(valor){
            input.value = valor;
        }else{
            input.value = '0'
        }
    })
}

//função para salvar no local storage
function salvarLocalStorage(){
    const inputs = document.querySelectorAll('input')

    inputs.forEach((input) => {
        localStorage.setItem(input.id, input.value)
    })
}

//função para calcular
function calcular(){
    // somatório das receitas

    const totalReceitas = parseFloat(valorBase.value) + parseFloat(valorTransporte.value) + parseFloat(valorAlimentacao.value);

    //atualiza o campo de receita total
    receitaTotal.value = totalReceitas

    //somatorio de desconto
    const descontoTotal = parseFloat(valorAutomovel.value) + parseFloat(faltas.value)

    //atualiza o campo de desconto total em tela
    totalDescontos.value = descontoTotal

    //resultado final
    const total = totalReceitas - descontoTotal;

    //atualiza o campo total em tela
    valorTotal.value = total

    //salvar no localStorage
    salvarLocalStorage()
}