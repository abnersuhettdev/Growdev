import { Grid } from '@mui/material';

import { IRecados } from '../../models/Recado';
import { MyCard } from '../Card';

export interface ICardListProps {
	recados: IRecados[];
}

export const CardList: React.FC<ICardListProps> = ({ recados }) => {
	return (
		<Grid
			container
			flexDirection={'column'}
			alignItems={'center'}
			spacing={4}
			marginTop={2}
		>
			{recados.map((item) => (
				<Grid item>
					<MyCard
						key={item.id}
						titulo={item.titulo}
						conteudo={item.conteudo}
						notas={item.notas}
					/>
				</Grid>
			))}
		</Grid>
	);
};
