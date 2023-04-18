import React, { useState } from "react";
import TitleDefault from "../../components/Heading";
import Input from "../../components/Input";
import Container from "../../components/Container/styles";
import { listaTarefas } from "../../database";
import { Card } from "../../components/Card";
import { Button } from "../../components/Button/styles";
import { Tarefa } from "../../types";
import { Data, GerarID } from "../../utils/Date";

const Home: React.FC = () => {
  const [titulo, setTitulo] = useState("");
  const [tarefas, setTarefas] = useState<Tarefa[]>([]);

  // Adiconar card

  const addNewCard = () => {
    const novaTarefa: Tarefa = {
      id: GerarID(),
      titulo,
      criadoEm: Data(),
    };

    setTarefas((prevState) => [novaTarefa, ...prevState]);
    setTitulo("");
  };

  return (
    <Container display="flex" alignItems="center" flexDirection="column">
      <TitleDefault title="Lista de Tarefas" />
      <Input
        id="task"
        name="tarefa"
        placeholder="Descreva a tarefa..."
        type="text"
        valor={titulo}
        handleChange={setTitulo}
      />

      <Button onClick={addNewCard}>Adicionar</Button>

      {/* 

				TO-DO
				1 - Criar uma lista de tarefas (definir types e criar o mock de registros)
				2 - Criar componente do Card
				3 - Renderizar um Card para cada tarefa da lista  

			*/}

      {tarefas.map((tarefa) => {
        return (
          <Card
            key={tarefa.id}
            id={tarefa.id}
            titulo={tarefa.titulo}
            criadoEm={tarefa.criadoEm}
          />
        );
      })}
    </Container>
  );
};

export default Home;

// main > App > AppRoutes > Home
