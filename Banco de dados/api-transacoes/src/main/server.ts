import { appEnvs } from "../app/envs";
import { criaServidor } from "./config";
import { DatabaseConnection } from "./database";
import { RedisConnection } from "./database/ioredis.connection";

Promise.all([DatabaseConnection.connect(), RedisConnection.connect()])
	.then(() => {
		// executa aqui quando as promises de conexão forem resolvidas
		const app = criaServidor();

		// START DO SERVER
		app.listen(appEnvs.porta, () =>
			console.log(`Servidor rodando na porta ${appEnvs.porta} 🚀`)
		);
	})
	.catch((err) => {
		// executa aqui se estourar algum erro nas promises (conexão rejeitada)
		console.log(err);
	});
