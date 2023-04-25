import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "../../components/Button/styles";
import { Card } from "../../components/Card";
import Container from "../../components/Container/styles";
import Title from "../../components/Heading";
import Input from "../../components/Input";
import { Tarefa } from "../../types";
import { Data, GerarID } from "../../utils/Date";

const Home: React.FC = () => {
	const [titulo, setTitulo] = useState("");
	const [tarefas, setTarefas] = useState<Tarefa[]>([]);

	//1 - quando o componente monta
	useEffect(() => {
		setTarefas(JSON.parse(localStorage.getItem("tarefas") ?? "[]"));
		console.log("Renderizou 1x");

		//3 - quando o componente desmonta
		return () => {
			localStorage.removeItem("usuarioLogado");
		};
	}, []);

	//2 - quando o componente atualiza -re-renderizou
	useEffect(() => {
		localStorage.setItem("tarefas", JSON.stringify(tarefas));
		console.log("Lista de tarefas atualizou");
	}, [tarefas]);

	//4- Toda e qualquer alteracao que tiver - Sempre
	useEffect(() => {
		console.log("Sem dependencias");
	});

	// const TitleMemo = useMemo(() => {
	// 	return <TitleDefault title="Lista de Tarefas" />;
	// }, []);

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
			<Title title="Lista de Tarefas" />
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
			<Link to={"/signin"}>Pagina de login</Link>
		</Container>
	);
};

export default Home;

// main > App > AppRoutes > Home
