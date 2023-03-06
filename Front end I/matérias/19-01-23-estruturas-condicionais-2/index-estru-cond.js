/* 
== Maneiras de pegar entrada de dados do usuário ==
const informacao = prompt('Digite um valor ai pra mim')
const confirmacao = confirm('Você quer apagar o registro?')
alert(confirmacao)
*/

/*
== isNaN() ==
vai retornar true se o valor for um NaN
vai retornar false se o valor não for um NaN
*/

// true || true => true
// false || true => true
// true || false =>  true
// false || false => false

/*
== Validação sem utilizar o NOT ==

const numero1 = prompt('Digite o primeiro número')
console.log(numero1)

if(isNaN(Number(numero1)) || numero1 == '' || numero1 == null){
    alert('Valor inválido')
} else {
    const numero2 = prompt('Digite o segundo número')

    if(isNaN(Number(numero2)) || numero2 == '' || numero2 == null){
        alert('Valor inválido')
    } else {
        const resultado = Number(numero1) + Number(numero2)
    
        console.log(`O resultado é: ${resultado}`)
    }
} 
*/

// Operadores Lógicos: AND (&&) - OR (||) - NOT (!)

// Tipos primitivos: string, number, boolean, null, undefined

// null, undefined, string vazia (''), 0 => é convertido para false (booleanamente falando)

/*
== Validação utilizando o NOT ==

const numero1 = prompt('Digite o primeiro número')

if(!numero1 || isNaN(Number(numero1))){
    alert('Valor inválido')
} else {
    const numero2 = prompt('Digite o segundo número')

    if(!numero2 || isNaN(Number(numero2))){
        alert('Valor inválido')
    } else {
        const resultado = Number(numero1) + Number(numero2)
    
        console.log(`O resultado é: ${resultado}`)
    }
}

*/


// NaN => Not a Number

const num1 = Number(prompt('Digite o primeiro numero'))
const num2 = Number(prompt('Digite o segundo numero'))
const operacao = prompt('Informe a operação a ser realizada: [somar: 1 | subtrair: 2 | multiplicar: 3 | dividir: 4]')

switch(operacao){
    case '1': 
        console.log(`O resultado da soma é: ${num1+ num2}`)
        break
    case '2': 
        const resultado = num1 - num2
        console.log(`O resultado da subtração é: ${resultado}`)
        break
    case '3':
        console.log(`O resultado da multiplicação é: ${num1*num2}`)
        break
    case '4': 
        console.log(`O resultado da divisão é: ${num1/num2}`)
        break
    default: 
        console.log('Opção escolhida não existe')
        break;
}

// if(operacao == 'somar'){
//     console.log(`O resultado da soma é: ${num1+ num2}`)
// } else if(operacao == 'multiplicar'){
//     console.log(`O resultado da multiplicação é: ${num1 * num2}`)
// } else if(operacao == 'subtrair'){
//     console.log(`O resultado da subtração é: ${num1 - num2}`)
// } else if(operacao == 'dividir'){
//     console.log(`O resultado da divisão é: ${num1 / num2}`)
// } else {
//     console.log('Opção inválida')
// }