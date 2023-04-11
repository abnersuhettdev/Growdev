import { Tarefa } from "../types";
import { Data } from "../utils/Date";
import { v4 as gerarId } from "uuid";

export const listaTarefas: Tarefa[] = [
    {
        id: gerarId(),
        titulo: 'Titulo 1',
        criadoEm: Data()
    },
    {
        id: gerarId(),
        titulo: 'Titulo 2',
        criadoEm: Data()
    },
    {
        id: gerarId(),
        titulo: 'Titulo 3',
        criadoEm: Data()
    },{
        id: gerarId(),
        titulo: 'Titulo 4',
        criadoEm: Data()
    },
    {
        id: gerarId(),
        titulo: 'Titulo 5',
        criadoEm: Data()
    }
]

