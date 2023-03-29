// import {IUser} from './types/types'

// const users : IUser[] = [{
//     id: '123',
//     name: 'João',
//     email: 'kenaa@example.com',
//     senha: '123456',
// },{
//     id: '132',
//     name: 'Pedro',
//     email: 'teste@example.com',
//     senha: '123456',
// },
// {
//     id: '213',
//     name: 'João',
//     email: 'teste3@example.com',
//     senha: '123456',
// }
// ]

// users.map((user) => console.log(user.name))

/*
Exercício de média
import { media } from "./media";
import { resposta } from "./resposta";

console.log(media(1, 2));
resposta(5)
*/

/*Criar um programa para cadastrar, listar e excluir alunos
const bancodedados = []

interface aluno {
nome: string
matricula: string
id: string
}*/

import { aluno } from "./types/types";

const alunos : aluno[] = [
    {
        nome: 'Pedro',
        matricula: '231',
        curso: 'Matemática'
    },
    {
        nome: 'Sheila',
        matricula: '213',
        curso: 'Ciência da Computação'
    }
]

function cadastrar(name:string, matricula:string, curso:string){
    const aluno : aluno = {
        nome: name,
        matricula: matricula,
        curso: curso
    }
    alunos.push(aluno)
    console.log(aluno)
}

function listar(){
    alunos.forEach(aluno => console.log(aluno))
}

function excluir(matricula:string){
    let index = alunos.findIndex(aluno => aluno.matricula === matricula)
    alunos.splice(index,1)
    console.log(alunos)
}
console.log("--------------------------------------------")
console.log("Cadastrar")
cadastrar('João', '123', 'Jornalismo')
console.log("--------------------------------------------")
console.log("Listar")
listar()
console.log("--------------------------------------------")
console.log("Excluir")
excluir('123')
console.log("--------------------------------------------")