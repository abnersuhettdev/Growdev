import CloseIcon from '@mui/icons-material/Close';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import { IconButton } from '@mui/material';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import React, { useCallback, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

interface SwipeableTemporaryDrawerTypes {
	isOpen: boolean;
	setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const SwipeableTemporaryDrawer: React.FC<SwipeableTemporaryDrawerTypes> = ({
	isOpen,
	setIsOpen,
}) => {
	const navigate = useNavigate();

	const location = useLocation();

	const handleLocation = useCallback(() => {
		setIsOpen(false);
	}, [location.pathname, setIsOpen]);

	useEffect(() => {
		handleLocation();
	}, [handleLocation]);

	const list = () => (
		<Box role="presentation" onClick={() => {}} onKeyDown={() => {}}>
			<List>
				<Box
					sx={{
						display: 'flex',
						justifyContent: 'end',
						padding: '8px',
					}}
				>
					<IconButton onClick={() => setIsOpen(false)}>
						<CloseIcon />
					</IconButton>
				</Box>

				<ListItem>
					<ListItemButton onClick={() => navigate('/')}>
						<ListItemIcon>
							<InboxIcon />
						</ListItemIcon>
						<ListItemText>Home</ListItemText>
					</ListItemButton>
				</ListItem>
				<ListItem>
					<ListItemButton onClick={() => navigate('/register')}>
						<ListItemIcon>
							<InboxIcon />
						</ListItemIcon>
						<ListItemText>Register</ListItemText>
					</ListItemButton>
				</ListItem>
			</List>
		</Box>
	);

	return (
		<div>
			<>
				<SwipeableDrawer
					anchor={'left'}
					open={isOpen}
					onClose={() => {}}
					onOpen={() => {}}
				>
					{list()}
				</SwipeableDrawer>
			</>
		</div>
	);
};

export { SwipeableTemporaryDrawer };
