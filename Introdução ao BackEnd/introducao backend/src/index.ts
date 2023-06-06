//instancia - objetos

import Casa from "./classe-casa";

const casa1 = new Casa(2, 3, 4, 5);
const casa2 = new Casa(3, 1, 3, 4);
const casa3 = new Casa(5, 3, 1, 2);

console.log("Antes");
console.log("CASA 1", casa1);
console.log("CASA 2", casa2);
console.log("CASA 3", casa3);

//execucao dos metodos
casa1.trocarCor("Verde");
casa2.reformarCasa(2, 2, "Laranja", 20, 2.5);
casa3.abrirJanela();

console.log("Depois");
console.log("CASA 1", casa1);
console.log("CASA 2", casa2);
console.log("CASA 3", casa3);

casa2.calcularMetrosQuadrados(10);
