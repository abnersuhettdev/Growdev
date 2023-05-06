import { combineReducers } from '@reduxjs/toolkit';

import userLoggedState from './users/userLoggedState';

const rootReducer = combineReducers({
	userLogged: userLoggedState,
});

export default rootReducer;
