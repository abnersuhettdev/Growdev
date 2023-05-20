import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';

import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { hideLoading } from '../../store/modules/Loading/loadingSlice';

export default function Loading() {
	const select = useAppSelector((state) => state.loading);
	const dispatch = useAppDispatch();

	return (
		<div>
			<Backdrop
				sx={{
					color: '#fff',
					zIndex: (theme) => theme.zIndex.drawer + 1,
				}}
				open={select.open}
				onClick={() => dispatch(hideLoading())}
			>
				<CircularProgress color="inherit" />
			</Backdrop>
		</div>
	);
}
