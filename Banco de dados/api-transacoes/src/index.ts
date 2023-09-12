import { randomUUID } from "crypto";
import { Endereco } from "./app/models";
import { RedisConnection } from "./main/database/ioredis.connection";

async function teste() {
	await RedisConnection.connect();

	const redis = RedisConnection.connection;

	console.log(await redis.get("nome"));

	redis.set("nome", "João da Silva");
	redis.set("idade", 21);

	console.log(await redis.get("nome"));
	console.log(await redis.get("idade"));

	await redis.del("nome");
	console.log(await redis.get("nome"));

	const endereco = new Endereco(
		randomUUID(),
		"rua G",
		"Porto Real",
		"RJ",
		new Date(),
		"0"
	);

	await redis.set("endereco-usuario-1", JSON.stringify(endereco.toJSON()));
	const enderecoParse = await redis.get("endereco-usuario-1");
	console.log(JSON.parse(enderecoParse ?? "{}"));
}

teste();
