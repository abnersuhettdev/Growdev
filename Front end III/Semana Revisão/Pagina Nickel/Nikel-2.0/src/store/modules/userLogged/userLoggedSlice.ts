import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';

import type { RootState } from '../..';

// OBS: um slice é usado para a definição e o gerenciamento de um dado que seja do formato !== de ARRAY

// Define a type for the slice state
interface UserLoggedState {
	email: string;
	password: string;
	isLogged: boolean;
}

type SetUserLoggedType = Omit<UserLoggedState, 'isLogged'>;

// Define the initial state using that type
const initialState: UserLoggedState = {
	email: '',
	password: '',
	isLogged: false,
};

// um slice a junção de REDUCER + ACTIONS
export const userLoggedSlice = createSlice({
	name: 'userLogged',
	initialState,
	reducers: {
		// action.type terá o valor "setUserLogged"
		// action.payload deverá ser do typo SetUserLoggedType
		setUserLogged: (state, action: PayloadAction<SetUserLoggedType>) => {
			// muda o usuario logado preenchendo os valores de email, senha e setando isLogged para true
			return {
				email: action.payload.email,
				password: action.payload.password,
				isLogged: true,
			};
		},

		removeUserLogged: () => {
			return initialState;
		},
	},
});

export const { setUserLogged, removeUserLogged } = userLoggedSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectUserLogged = (state: RootState) => state.userLogged;

export default userLoggedSlice.reducer;
