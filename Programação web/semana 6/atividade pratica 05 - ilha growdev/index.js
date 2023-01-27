let valorSaque = Number(
  prompt(
    "Digite o Valor Desejado, O número deve ser um valor Positivo e Inteiro."
  )
);

if (valorSaque === NaN) {
  alert("Numero inválido, Por favor digite um valor Válido");
}

let nota50 = 0,
  nota10 = 0,
  nota5 = 0,
  nota1 = 0;

for (let contador = 1; valorSaque >= 50; contador++) {
  valorSaque -= 50;
  nota50 = contador;
}

for (let contador = 1; valorSaque >= 10; contador++) {
  valorSaque -= 10;
  nota10 = contador;
}

for (let contador = 1; valorSaque >= 5; contador++) {
  valorSaque -= 5;
  nota5 = contador;
}

for (let contador = 1; valorSaque >= 1; contador++) {
  valorSaque -= 1;
  nota1 = contador;
}

document.write(
  `
  <ul>
  <li>Notas de 50: ${nota50}</li> 
  <li>Notas de 10: ${nota10}</li> 
  <li>Notas de 5: ${nota5}</li>
  <li>Notas de 1: ${nota1}</li>
   </ul>`
);
