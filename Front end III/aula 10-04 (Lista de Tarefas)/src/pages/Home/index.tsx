import React from 'react';
import TitleDefault from '../../components/Heading';
import Input from '../../components/Input';
import Container from '../../components/Container/styles';
import { listaTarefas } from '../../database';
import { Card } from '../../components/Card';
import { Button } from '../../components/Button/styles';

const Home: React.FC = () => {
	return (
		<Container display="flex" alignItems="center" flexDirection="column">
			<TitleDefault title="Lista de Tarefas" />
			<Input
				id="task"
				name="tarefa"
				placeholder="Descreva a tarefa..."
				type="text"
			/>

			<Button>Adicionar</Button>

			{/* 

				TO-DO
				1 - Criar uma lista de tarefas (definir types e criar o mock de registros)
				2 - Criar componente do Card
				3 - Renderizar um Card para cada tarefa da lista  

			*/}
			
				{listaTarefas.map((tarefa)=>{
					return <Card 
					key={tarefa.id}
					id={tarefa.id} 
					titulo={tarefa.titulo}
					criadoEm={tarefa.criadoEm}
					/>
				})}
			

		</Container>
	);
};

export default Home;

// main > App > AppRoutes > Home
