import React from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';

import { ButtonAppBar } from '../components/Appbar';
import { CloneNetflix } from '../pages/CloneNetflix';
import Home from '../pages/Home';

const AppRoutes: React.FC = () => {
	return (
		<BrowserRouter>
			<ButtonAppBar />
			<Routes>
				<Route path="/home" element={<Home />} />
				<Route path="/clone" element={<CloneNetflix />} />
				<Route path="*" element={<Navigate to="/home" />} />
			</Routes>
		</BrowserRouter>
	);
};

export default AppRoutes;
