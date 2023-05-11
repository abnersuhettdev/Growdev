import { configureStore } from '@reduxjs/toolkit';
import { persistReducer, persistStore } from 'redux-persist';
import localStorage from 'redux-persist/lib/storage'; // defaults to localStorage for web

import rootReducer from './modules/rootReducer';

const persistedReducer = persistReducer(
	{ key: 'dataApp', storage: localStorage },
	rootReducer,
);

export const store = configureStore({
	reducer: persistedReducer,
});

export const persistor = persistStore(store);

// DAQUI PRA BAIXO É A INFERENCIA / CONFIG DE TIPOS com base nos reducers e actions existentes

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;

// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
