import MenuIcon from '@mui/icons-material/Menu';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

interface MenuAppBarTypes {
	setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const MenuAppBar: React.FC<MenuAppBarTypes> = ({ setIsOpen }) => {
	return (
		<Box sx={{ flexGrow: 1 }}>
			<AppBar position="static">
				<Toolbar>
					<IconButton
						size="large"
						edge="start"
						color="inherit"
						aria-label="menu"
						sx={{ mr: 2 }}
						onClick={() => setIsOpen(true)}
					>
						<MenuIcon />
					</IconButton>
					<Typography
						variant="h6"
						component="div"
						sx={{ flexGrow: 1 }}
					>
						Cadastro!
					</Typography>
					<div></div>
				</Toolbar>
			</AppBar>
		</Box>
	);
};

export { MenuAppBar };
