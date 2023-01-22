// const informacao = prompt('Digite um valor ai pra mim')
// const confirmacao = confirm('Você quer apagar o registro?')
// alert(confirmacao)

// isNaN
// vai retornar true se o valor for um NaN
// vai retornar false se o valor não for um NaN

// true || true => true
// false || true => true
// true || false =>  true
// false || false => false
/*const numero1 = prompt('Digite o primeiro número')
console.log(numero1)
if(isNaN(Number(numero1)) || numero1 == '' || numero1 == null){
    alert('Valor inválido')
} else {
    const numero2 = prompt('Digite o segundo número')

    if(isNaN(Number(numero2)) || numero2 == '' || numero2 == null){
        alert('Valor inválido')
    } else {
        const resultado = Number(numero1) + Number(numero2)
    
        console.log(O resultado é: ${resultado})
    }
} */

// AND (&&) - OR (||) - NOT (!)

// string, number, boolean, null, undefined

// null, undefined, string vazia (''), 0 => é convertido para false (booleanamente falando)

/*
const numero1 = prompt('Digite o primeiro número')

if(!numero1 || isNaN(Number(numero1))){
    alert('Valor inválido')
} else {
    const numero2 = prompt('Digite o segundo número')

    if(!numero2 || isNaN(Number(numero2))){
        alert('Valor inválido')
    } else {
        const resultado = Number(numero1) + Number(numero2)
    
        console.log(O resultado é: ${resultado})
    }
}

*/

// NaN => Not a Number

const num1 = Number(prompt("Digite um numero"));
const num2 = Number(prompt("Digite um numero"));
const operacao = prompt(
  "informe a operacao a ser realizada: [somar | subtrair | multiplicar |dividir]"
);

switch (operacao) {
  case "somar": {
    console.log(`O resultado da soma é: ${num1 + num2}`);
    break;
  }
  case "subtrair": {
    const resultado = num1 - num2;
    console.log(`O resultado é ${resultado}`);
    break;
  }
  case "multiplicar": {
    console.log(`O resultado da multiplicação é: ${num1 * num2}`);
    break;
  }
  case "dividir": {
    console.log(`O resultado da multiplicação é: ${num1 / num2}`);
    break;
  }
  default :{
        console.log("Digite uma operação válida")
        break
  }

}
