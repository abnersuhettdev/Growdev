import { combineReducers } from '@reduxjs/toolkit';

import userLoggedSlice from './userLogged/userLoggedSlice';

const rootReducer = combineReducers({
	// a cada novo slice, adicionamos uma nova propriedade neste objeto
	// propriedade - nome na store
	// valor - reducer/manager deste estado global
	userLogged: userLoggedSlice,
});

export default rootReducer;
