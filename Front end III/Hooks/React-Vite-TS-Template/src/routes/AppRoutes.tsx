import { Login } from '@mui/icons-material';
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { Navbar } from '../components/Navbar';
import Home from '../pages/Home';
import { Register } from '../pages/Register';

const AppRoutes: React.FC = () => {
	return (
		<BrowserRouter>
			<Navbar></Navbar>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/login" element={<Login />} />
				<Route path="/register" element={<Register />} />
			</Routes>
		</BrowserRouter>
	);
};

export default AppRoutes;
