import React, { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { MenuAppBar } from '../components/Appbar';
import { SwipeableTemporaryDrawer } from '../components/Drawer';
import Home from '../pages/Home';
import { Register } from '../pages/Register';

const AppRoutes: React.FC = () => {
	const [isOpen, setIsOpen] = useState<boolean>(false);

	return (
		<BrowserRouter>
			<MenuAppBar setIsOpen={setIsOpen} />
			<SwipeableTemporaryDrawer isOpen={isOpen} setIsOpen={setIsOpen} />

			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/register" element={<Register />} />
			</Routes>
		</BrowserRouter>
	);
};

export default AppRoutes;
