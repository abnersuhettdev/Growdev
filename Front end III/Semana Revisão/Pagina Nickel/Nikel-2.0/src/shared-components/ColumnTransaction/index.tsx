import ArrowCircleDownIcon from '@mui/icons-material/ArrowCircleDown';
import ArrowCircleUpIcon from '@mui/icons-material/ArrowCircleUp';
import { Divider, Grid, Typography } from '@mui/material';
import { v4 as generateId } from 'uuid';

import TransactionsModel from '../../store/types/Transactions';
import { ItemTransaction } from '../ItemTransaction';

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

interface ColumnTransactionProps {
	type: 'income' | 'outcome';
}

export const ColumnTransaction: React.FC<ColumnTransactionProps> = ({
	type,
}) => {
	return (
		<Grid item xs={6} padding={2}>
			<Typography variant="h3">
				{type === 'income' && (
					<>
						<ArrowCircleDownIcon /> Entradas
					</>
				)}
				{type === 'outcome' && (
					<>
						<ArrowCircleUpIcon /> Saídas
					</>
				)}
			</Typography>
			<Divider />
			{listaDeTransacoes
				.filter((transaction) => transaction.type === 'income')
				.map((transaction) => {
					return (
						<ItemTransaction
							key={transaction.id}
							transaction={transaction}
						/>
					);
				})}
		</Grid>
	);
};
