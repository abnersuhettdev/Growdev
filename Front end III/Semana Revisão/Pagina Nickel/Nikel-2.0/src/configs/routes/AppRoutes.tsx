import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Home from '../../pages/Home';
import { Login } from '../../pages/Login';
import Transactions from '../../pages/Transactions';
import Layout from '../Layout';

const AppRoutes: React.FC = () => {
	return (
		<Layout>
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Login />} />
					<Route path="/home" element={<Home />} />
					<Route path="/transactions" element={<Transactions />} />
				</Routes>
			</BrowserRouter>
		</Layout>
	);
};

export default AppRoutes;
