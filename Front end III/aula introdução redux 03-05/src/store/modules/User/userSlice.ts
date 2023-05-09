import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';

import type { RootState } from '../../';

// Define a type for the slice state
interface UserState {
	email: string;
	isLogged: boolean;
}

// Define the initial state using that type
const initialState: UserState = {
	email: '',
	isLogged: false,
};

export const userSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {
		setUser: (prevState, action: PayloadAction<{ email: string }>) => {
			if (
				!action.payload.email ||
				!action.payload.email.includes('@') ||
				!action.payload.email.includes('.com')
			) {
				return prevState;
			}
			return {
				email: action.payload.email,
				isLogged: true,
			};
		},

		removeUser: () => {
			return initialState;
		},
	},
});

export const { setUser, removeUser } = userSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectUser = (globalState: RootState) => globalState.user;

export default userSlice.reducer;
