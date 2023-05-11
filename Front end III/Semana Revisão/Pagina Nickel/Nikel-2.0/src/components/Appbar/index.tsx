import {
	AccountCircleOutlined,
	Home,
	MonetizationOn,
} from '@mui/icons-material';
import { Grid, IconButton } from '@mui/material';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import { useNavigate } from 'react-router-dom';

import NikelSmall from '../../../public/assets/images/nikel-small-logo.png';

interface AppbarProps {
	page: 'home' | 'transaction';
}

export const Appbar: React.FC<AppbarProps> = ({ page }) => {
	const navigate = useNavigate();

	return (
		<Box sx={{ flexGrow: 1 }}>
			<AppBar
				position="static"
				sx={{
					bgcolor: '#ffff',
					height: '15vh',
					justifyContent: 'center',
				}}
			>
				<Toolbar
					sx={{
						display: 'flex',
						justifyContent: 'space-between',
					}}
				>
					<IconButton>
						<Box
							sx={{ mr: 2 }}
							component={'img'}
							src={NikelSmall}
						></Box>
					</IconButton>

					<Grid>
						<IconButton onClick={() => navigate('/home')}>
							<Home
								color={page === 'home' ? 'primary' : 'inherit'}
								fontSize="large"
							/>
						</IconButton>
						<IconButton onClick={() => navigate('/transaction')}>
							<MonetizationOn
								color={
									page === 'transaction'
										? 'primary'
										: 'inherit'
								}
								fontSize="large"
							/>
						</IconButton>
						<IconButton>
							<AccountCircleOutlined fontSize="large" />
						</IconButton>
					</Grid>
				</Toolbar>
			</AppBar>
		</Box>
	);
};
