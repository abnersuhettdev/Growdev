import { Typography } from "@mui/material";
import React, {
	useCallback,
	useEffect,
	useMemo,
	useRef,
	useState,
} from "react";
import { Link } from "react-router-dom";
import { Button } from "../../components/Button/styles";
import { Card } from "../../components/Card";
import Container from "../../components/Container/styles";
import Title from "../../components/Heading";
import InputRef from "../../components/Input";
import { Tarefa } from "../../types";
import { Data, GerarID } from "../../utils/Date";

const Home: React.FC = () => {
	// const [titulo, setTitulo] = useState("");
	const inputRef = useRef<HTMLInputElement | null>(null);
	const [tarefas, setTarefas] = useState<Tarefa[]>([]);
	const [counterA, setcounterA] = useState(0);

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

		handleCounterA();
	});

	useEffect(() => {
		if (inputRef.current && inputRef.current.value.length < 5) {
			console.log("Tem menos que 5 caracteres");
		}
	}, [inputRef.current]);

	// const TitleMemo = useMemo(() => {
	// 	return <TitleDefault title="Lista de Tarefas" />;
	// }, []);

	// Adiconar card

	const addNewCard = () => {
		const novaTarefa: Tarefa = {
			id: GerarID(),
			titulo: inputRef.current?.value ?? "",
			criadoEm: Data(),
		};

		setTarefas((prevState) => [novaTarefa, ...prevState]);
		inputRef.current!.value = "";
	};

	const handleCounterA = useCallback(() => {
		setcounterA(tarefas.filter((tarefa) => tarefa.titulo.includes("a")).length);
	}, [tarefas]);

	const listaMemo = useMemo(() => {
		return tarefas.map((tarefa) => {
			return (
				<Card
					key={tarefa.id}
					id={tarefa.id}
					titulo={tarefa.titulo}
					criadoEm={tarefa.criadoEm}
				/>
			);
		});
	}, [tarefas]);
	return (
		<Container display="flex" alignItems="center" flexDirection="column">
			<Title title="Lista de Tarefas" />
			<InputRef ref={inputRef} />

			<Button onClick={addNewCard}>Adicionar</Button>

			{/* 

				TO-DO
				1 - Criar uma lista de tarefas (definir types e criar o mock de registros)
				2 - Criar componente do Card
				3 - Renderizar um Card para cada tarefa da lista  

			*/}

			{listaMemo}
			<Link to={"/signin"}>Pagina de login</Link>

			<Button onClick={handleCounterA}>Calcular</Button>
			<Typography variant="h3">{counterA}</Typography>
		</Container>
	);
};

export default Home;

// main > App > AppRoutes > Home
