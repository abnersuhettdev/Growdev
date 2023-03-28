"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function somar(num1, num2) {
    return num1 + num2;
}
//nao default - quando precisar ou ter mais de um modulo a ser exṕortado
// export{somar, verificaNumeros}
//default - se o arquivo em questão tiver apenas 1 modulo a ser exportado
exports.default = somar;
