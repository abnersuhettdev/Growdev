let listaVeiculos = [
  {
    id: parseInt(Math.random() * 5000),
    modelo: "vectra",
    marca: "chevrolet",
    ano: "2010",
    cor: "preto",
    preco: 50000,
  },
  {
    id: parseInt(Math.random() * 5000),
    modelo: "palio",
    marca: "fiat",
    ano: "2005",
    cor: "azul",
    preco: 10000,
  },
];

function init() {
  let opcao =
    prompt(`No Momento o sistema tem ${listaVeiculos.length} carros cadastrados\n
Escolha uma das opções para interagir com o sistema:
\n1: Cadastrar | 2: Listar | 3: Filtrar veículos por marca | 4: Atualizar Veículo | 5: Remover Veículo | 6: Sair`);

  switch (opcao) {
    case "1":
      cadastrarVeiculo();
      break;
    case "2":
      listarVeiculos();
      break;
    case "3":
      filtrarVeiculos();
      break;
    case "4":
      atualizarVeiculo();
      break;
    case "5":
      removerVeiculo();
      break;
    case "6":
      alert("Obrigado por usar o sistema");
      break;
    default:
      alert("Essa opção não é válida");
      init();
  }
}

function cadastrarVeiculo() {
  let modelo = prompt("Digite o modelo do carro");
  let marca = prompt("Digite a marca do carro");
  let ano = prompt("Digite o ano do carro");
  let cor = prompt("Digite a cor do carro");
  let preco = Number(prompt("Digite o preco do carro"));

  let carro = {
    id: parseInt(Math.random() * 5000),
    modelo: modelo,
    marca: marca,
    ano: ano,
    cor: cor,
    preco: preco,
  };

  listaVeiculos.push(carro);

  init();
}

function listarVeiculos() {
  const listaOrdenada = listaVeiculos.sort((a, b) => {
    if (a.preco > b.preco) {
      return 1;
    } else if (b.preco > a.preco) {
      return -1;
    } else {
      return 0;
    }
  });

  listaOrdenada.forEach((carro) => {
    alert(
      `ID: ${carro.id} | Modelo: ${carro.modelo} | Marca: ${carro.marca} | Ano : ${carro.ano} | Cor: ${carro.cor} | Preço: R$${carro.preco}`
    );
  });

  init();
}

function filtrarVeiculos() {
  let marcaFiltrada = prompt("Digite a marca desejada");

  const listaFiltrada = listaVeiculos.filter((carro) => {
    return carro.marca.includes(marcaFiltrada);
  });

  const listaOrdenada = listaFiltrada.sort((a, b) => {
    if (a.preco > b.preco) {
      return 1;
    } else if (b.preco > a.preco) {
      return -1;
    } else {
      return 0;
    }
  });

  listaOrdenada.forEach((carro) => {
    alert(
      `ID: ${carro.id} | Modelo: ${carro.modelo} | Cor: ${carro.cor} | Preço: ${carro.preco}`
    );
  });

  init();
}

function atualizarVeiculo() {
  const id = Number(prompt("Digite o Identificador do veículo"));

  let indiceCarro = listaVeiculos.findIndex((carro) => carro.id === id);

  if (indiceCarro > -1) {
    let novaCor = prompt("Digite uma nova cor para o veículo");
    let novoPreco = prompt("Digite um novo preço para o veículo");

    listaVeiculos[indiceCarro].cor = novaCor;
    listaVeiculos[indiceCarro].preco = novoPreco;
  } else {
    alert("Veículo não encontrado");
  }

  init();
}

function removerVeiculo() {
  const id = Number(prompt("Digite o Identificador do veículo"));

  let indiceCarro = listaVeiculos.findIndex((carro) => carro.id === id);

  if (indiceCarro > -1) {
    listaVeiculos.splice(indiceCarro, 1);
  } else {
    alert("Veículo não encontrado");
  }

  init();
}
