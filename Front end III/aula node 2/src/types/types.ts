export interface IUser{
    id: string,
    name: string,
    email: string,
    senha: string,
}

export interface aluno{
    nome: string,
    matricula: string,
    curso: string,
}

//Fins de Estudo: 
interface User{
    name: string
    email: string
    password: string
} // Interface só modela o Objeto


//Extends Extende os valores de User e acrescenta mais
interface Author extends User{
    books: string[]
}


type IsValid = 'SIM' | 'NAO' | 'NAO VERIFICADO'
//Type Define uma Interseção de valores pré definidos


const isValid : IsValid = "NAO" // "NAO VERIFICADO", ou 'SIM", só 3 valores disponiveis