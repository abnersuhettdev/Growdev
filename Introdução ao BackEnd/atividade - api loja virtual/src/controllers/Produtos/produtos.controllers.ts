import { Request, Response } from "express";
import { AdicionarProdutoDTO, CadastrarProduto } from "../../usecases/Produtos";

export class ProdutosController {
	public criar(req: Request, res: Response) {
		const { nome, preco, descricao, numeroSerie }: AdicionarProdutoDTO = req.body;

		const usecase = new CadastrarProduto({ nome, preco, descricao, numeroSerie });

		const retorno = usecase.execute();

		if (!retorno.sucesso) {
			return res.status(400).json(retorno);
		}

		return res.status(201).json(retorno);
	}
}
