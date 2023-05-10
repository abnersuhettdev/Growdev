import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { Login } from '../../pages/Nickel';
import { Layout } from '../Layout';

const AppRoutes: React.FC = () => {
	return (
		<Layout>
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Login />} />
				</Routes>
			</BrowserRouter>
		</Layout>
	);
};

export default AppRoutes;
