import { combineReducers } from '@reduxjs/toolkit';

import contatosSlice from './Contacts/contatosSlice';
import userSlice from './User/userSlice';

export const rootReducer = combineReducers({
	contacts: contatosSlice,
	user: userSlice,
});
