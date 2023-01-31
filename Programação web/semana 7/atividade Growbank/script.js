let finalizar = true;
let saldo = 0;

while (finalizar) {
  let opcao = Number(
    prompt(
      `Seu saldo é : [R$${saldo.toFixed(2)}]

Escolha uma opção:
1- Depósito
2- Saque
3- Transferência
0- Sair`
    )
  );

  switch (opcao) {
    case 1:
      let deposito = Number(prompt("Informe o valor a ser depositado:"));
      if (deposito > 0) {
        saldo += deposito;
        alert(
          `Depósito realizado com sucesso! Novo saldo: R$${saldo.toFixed(2)} `
        );
      } else {
        alert("Valor Inválido");
      }
      break;

    case 2:
      let saque = Number(prompt("Informe o valor a ser sacado:"));
      if (saque > 0 && saque < saldo) {
        saldo = saldo - saque;
        alert(`Saque realizado com sucesso! Novo saldo de R$${saldo}`);
      } else {
        alert("Valor Inválido");
      }
      break;

    case 3:
      let transferencia = Number(
        prompt("Digite o valor que deseja transferir")
      );

      if (transferencia > 0 && transferencia < saldo) {
        saldo = saldo - transferencia;
        let chavePix = prompt("Digite a chave pix").toString();
        alert(`Transferindo R$${transferencia}, para ${chavePix}`);
      } else {
        alert("Valor Inválido");
      }
      break;
    case 0:
      finalizar = false;
      alert(`Obrigado por utilizar o Growbank.
                Fim da operação...`);
      break;
    default:
      alert("Operação inválida");
  }
}

