import { Grid, Typography } from '@mui/material';

import TransactionsModel from '../../store/types/Transactions';

interface ItemTransactionProps {
	transaction: TransactionsModel;
}

export const ItemTransaction: React.FC<ItemTransactionProps> = ({
	transaction,
}) => {
	return (
		<Grid container>
			<Grid item xs={12}>
				<Typography variant="h5" component={'p'}>
					R${transaction.value.toFixed(2)}
				</Typography>
			</Grid>
			<Grid item xs={6}>
				<Typography variant="caption">
					{transaction.description}
				</Typography>
			</Grid>
			<Grid item xs={6} textAlign="end">
				<Typography variant="caption">
					{transaction.createdAt}
				</Typography>
			</Grid>
		</Grid>
	);
};
