/* eslint-disable react/prop-types */
/* eslint-disable no-case-declarations */
import { Grid, TextField } from '@mui/material';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { useEffect, useState } from 'react';

import { IContato } from '../../types';

interface IModalProps {
	contexto: 'create' | 'update' | 'delete';
	aberto: boolean;
	fecharModal: () => void;
	funcaoModificadora: React.Dispatch<React.SetStateAction<IContato[]>>;
	contato?: IContato;
}

export const MyModal: React.FC<IModalProps> = ({
	aberto,
	contexto,
	fecharModal,
	funcaoModificadora,
	contato,
}) => {
	const [nome, setNome] = useState('');
	const [telefone, setTelefone] = useState('');
	const [email, setEmail] = useState('');

	useEffect(() => {
		if (contexto === 'update' && contato) {
			setNome(contato.nome);
			setEmail(contato.email);
			setTelefone(contato.telefone);
		}
	}, [contexto, contato]);

	const handleSave = () => {
		switch (contexto) {
			case 'create':
				const novoContato: IContato = {
					nome,
					telefone,
					email,
					favorito: false,
					criadoEm: new Date().toLocaleDateString('pt-Br', {
						dateStyle: 'long',
					}),
				};
				funcaoModificadora((prev) => [...prev, novoContato]);
				break;

			case 'delete':
				funcaoModificadora((prev) => {
					if (contato) {
						return prev.filter(
							(item) => item.email !== contato.email,
						);
					}

					return prev;
				});

				break;

			case 'update':
				// atualiza um determinado item da lista
				funcaoModificadora((prev) => {
					return prev.map((item) => {
						if (contato && contato.email === item.email) {
							return {
								...item,
								nome,
								telefone,
								email,
							};
						}

						return item;
					});
				});
				break;
			default:
		}

		setNome('');
		setTelefone('');
		setEmail('');
		fecharModal();
	};

	return (
		<Dialog
			open={aberto}
			onClose={fecharModal}
			aria-labelledby="alert-dialog-title"
			aria-describedby="alert-dialog-description"
		>
			<DialogTitle id="alert-dialog-title">
				{contexto === 'create' && 'Criar Contato'}
				{contexto === 'delete' && 'Deletar Contato'}
				{contexto === 'update' && 'Atualizar Contato'}
			</DialogTitle>
			<DialogContent>
				{contexto === 'delete' && (
					<DialogContentText id="alert-dialog-description">
						A Exclusão é definitiva. Tem certeza que deseja excluir
						o contato?
					</DialogContentText>
				)}
				{contexto !== 'delete' && (
					<Grid container spacing={2} marginTop={2}>
						<Grid item xs={12}>
							<TextField
								value={nome}
								onChange={(ev) => setNome(ev.target.value)}
								id="nome"
								label="Nome Contato"
								name="nome"
								fullWidth
								color="secondary"
								required
							/>
						</Grid>
						<Grid item xs={12}>
							<TextField
								value={telefone}
								onChange={(ev) => setTelefone(ev.target.value)}
								id="telefone"
								label="Telefone"
								name="telefone"
								fullWidth
								color="secondary"
								required
							/>
						</Grid>
						<Grid item xs={12}>
							<TextField
								value={email}
								onChange={(ev) => setEmail(ev.target.value)}
								label="Email"
								id="email"
								name="email"
								fullWidth
								color="secondary"
								required
							/>
						</Grid>
					</Grid>
				)}
			</DialogContent>
			<DialogActions>
				<Button
					onClick={fecharModal}
					color="primary"
					variant="outlined"
				>
					Cancelar
				</Button>
				<Button
					color="success"
					variant="contained"
					autoFocus
					onClick={handleSave}
				>
					Salvar
				</Button>
			</DialogActions>
		</Dialog>
	);
};
