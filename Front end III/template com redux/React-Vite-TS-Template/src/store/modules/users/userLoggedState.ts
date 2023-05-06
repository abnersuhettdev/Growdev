import { PayloadAction, createSlice } from '@reduxjs/toolkit';

import type { RootState } from '../../index';

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

export const userLoggedSlice = createSlice({
	name: 'userLogged',
	// `createSlice` will infer the state type from the `initialState` argument
	initialState,
	reducers: {
		setUserLogged: (state, action: PayloadAction<SetUserLoggedType>) => {
			return {
				email: action.payload.email,
				password: action.payload.password,
				isLogged: true,
			};
		},
		removeUserLogged: (state) => {
			return initialState;
		},
	},
});

export const { setUserLogged, removeUserLogged } = userLoggedSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectUserLogged = (state: RootState) => state.userLogged;

export default userLoggedSlice.reducer;
