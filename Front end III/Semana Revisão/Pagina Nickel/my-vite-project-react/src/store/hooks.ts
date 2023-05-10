import type { TypedUseSelectorHook } from 'react-redux';
import { useDispatch, useSelector } from 'react-redux';

import type { AppDispatch, RootState } from '.';

// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

// useAppDispatch - criar um disparador de ações para que eu consiga executar a modificação de um estado global
// const dispatch = useAppDispatch()
// dispatch(atualizarContato({ ... }))

// useAppSelector - responsavel pela leitura de um determinado valor/propriedade do estado global da aplicação
// const allPosts = useAppSelector(selectPosts);
// const allUsers = useAppSelector((state) => state.users);
