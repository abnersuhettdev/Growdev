import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '../../pages/Home';
import Login from '../../pages/Login';
import Cadastro from '../../pages/Cadastro';

// function AppRoutes() {
//     return (

//     )
// }

const AppRoutes: React.FC = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/signin" element={<Login />} />
				<Route path="/signup" element={<Cadastro />} />
			</Routes>
		</BrowserRouter>
	);
};

export default AppRoutes;

// deve iniciar com a primeira letra maiuscula
