import { v4 } from "uuid";

type NovoEndereco = {
	logradouro: string;
	numero: string;
	bairro: string;
	cidade: string;
	uf: string;
	cep: string;
};

type AtualizarEndereco = Partial<NovoEndereco>;

class Endereco {
	private _id: string;
	private _logradouro: string;
	private _numero: string;
	private _bairro: string;
	private _cidade: string;
	private _uf: string;
	private _cep: string;

	constructor(dadosNovoEndereco: NovoEndereco) {
		this._id = v4();
		this._logradouro = dadosNovoEndereco.logradouro;
		this._numero = dadosNovoEndereco.numero;
		this._cep = dadosNovoEndereco.cep;
		this._bairro = dadosNovoEndereco.bairro;
		this._uf = dadosNovoEndereco.uf;
		this._cidade = dadosNovoEndereco.cidade;
	}

	public atualizarDados(dados: AtualizarEndereco) {
		this._logradouro = dados.logradouro ?? this._logradouro;
		this._numero = dados.numero ?? this._numero;
		this._bairro = dados.bairro ?? this._bairro;
		this._cep = dados.cep ?? this._cep;
		this._cidade = dados.cidade ?? this._cidade;
		this._uf = dados.uf ?? this._uf;
	}

	public get logradouro(): string {
		return this._logradouro;
	}
	public get numero(): string {
		return this._numero;
	}
	public get cidade(): string {
		return this._cidade;
	}
	public get bairro(): string {
		return this._bairro;
	}
	public get cep(): string {
		return this._cep;
	}
	public get uf(): string {
		return this._uf;
	}
}

export default Endereco;
