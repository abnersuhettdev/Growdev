import { Grid, Paper } from '@mui/material';
import { v4 as generateId } from 'uuid';

import TransactionsModel from '../../store/types/Transactions';
import { ColumnTransaction } from '../ColumnTransaction';

const listaDeTransacoes: TransactionsModel[] = [
	{
		id: generateId(),
		type: 'income',
		value: 50000,
		description: 'vale',
		createdAt: '17/05/2024',
		createdBy: 'Teste',
	},
	{
		id: generateId(),
		type: 'outcome',
		value: 49500,
		description: 'Boletos growdev',
		createdAt: '18/05/2024',
		createdBy: 'Teste',
	},
	{
		id: generateId(),
		type: 'income',
		value: 50000,
		description: 'vale',
		createdAt: '18/05/2024',
		createdBy: 'Teste',
	},
];

const Card = () => {
	return (
		<>
			<Grid container>
				<Grid item xs={12}>
					<Paper
						sx={{
							height: '500px',
							paddingY: 3,
							marginBottom: 5,
						}}
					>
						<Grid container>
							<ColumnTransaction type="income" />
							<ColumnTransaction type="outcome" />
						</Grid>
					</Paper>
				</Grid>
			</Grid>
		</>
	);
};

export default Card;
