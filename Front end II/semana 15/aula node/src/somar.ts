function somar(num1:number,num2:number){
    return num1 + num2;
}

//nao default - quando precisar ou ter mais de um modulo a ser exṕortado
// export{somar, verificaNumeros}

//default - se o arquivo em questão tiver apenas 1 modulo a ser exportado
export default somar;