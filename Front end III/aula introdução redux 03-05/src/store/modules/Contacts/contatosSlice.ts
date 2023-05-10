import { createEntityAdapter, createSlice } from '@reduxjs/toolkit';

import type { RootState } from '../../';
import { IContato } from '../../../types';

const adapterContato = createEntityAdapter<IContato>({
	selectId: (item) => item.email,
});

export const {
	selectAll: selectAllContacts,
	selectById: selectContactByEmail,
} = adapterContato.getSelectors((state: RootState) => state.contacts);

export const contatosSlice = createSlice({
	name: 'contatos',
	initialState: adapterContato.getInitialState(),
	reducers: {
		adicionar: adapterContato.addOne,
		atualizar: adapterContato.updateOne,
		deletar: adapterContato.removeOne,
	},
});

export const { adicionar, atualizar, deletar } = contatosSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectContacts = (globalState: RootState) => globalState.user;

export default contatosSlice.reducer;
