import { Grid } from '@mui/material';

import { IAlunos } from '../../pages/Home';
import { Card } from '../Card';

interface AlunosTypes {
	alunos: IAlunos[];
	setAlunos: React.Dispatch<React.SetStateAction<IAlunos[]>>;
}

export const Alunos: React.FC<AlunosTypes> = ({ alunos, setAlunos }) => {
	const handleDelete = (id: string) => {
		setAlunos([...alunos].filter((aluno) => aluno.id !== id));
	};

	return (
		<Grid
			container
			justifyContent={'center'}
			flexDirection={'column'}
			alignItems={'center'}
			marginTop={'20px'}
		>
			{alunos.map((aluno) => (
				<Card
					key={aluno.id}
					nome={aluno.nome}
					sala={aluno.sala}
					handleDelete={handleDelete}
					id={aluno.id}
				/>
			))}
		</Grid>
	);
};
