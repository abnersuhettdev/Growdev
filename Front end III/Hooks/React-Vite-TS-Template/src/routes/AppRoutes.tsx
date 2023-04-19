import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Contador from '../pages/Contador';

const AppRoutes: React.FC = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Contador />} />
				{/* <Route path="/" element={<Modal />} />
				<Route path="/" element={<Veremos />} /> */}
			</Routes>
		</BrowserRouter>
	);
};

export default AppRoutes;
