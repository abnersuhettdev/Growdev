// TIPO DE DADO = ARRAY DE USER
// ADAPTER

// USER
// email e senha
// chave primaria - dado que não pode se repetir? Email

import { createEntityAdapter, createSlice } from '@reduxjs/toolkit';

import { RootState } from '../..';
import { User } from '../../types/User';

const usersAdapter = createEntityAdapter<User>({
	selectId: (estado) => estado.email,
});

export const { selectAll: buscarUsuarios } = usersAdapter.getSelectors(
	(global: RootState) => global.users,
);

/*

{
    ids: [],
    entities: {
        
    }
}

*/

const usersSlice = createSlice({
	name: 'users',
	initialState: usersAdapter.getInitialState(),
	reducers: {
		adicionarUsuario: usersAdapter.addOne,
	},
});

// separar actions do reducer
export const { adicionarUsuario } = usersSlice.actions;

export default usersSlice.reducer;
