import { RedisConnection } from "../../../../main/database/ioredis.connection";

export class CacheRepository {
	private _redis = RedisConnection.connection;

	public async get<T>(chave: string): Promise<T | null> {
		const data = await this._redis.get(chave);

		if (!data) return null;

		return JSON.parse(data);
	}

	public async set<T>(chave: string, dado: T): Promise<"OK"> {
		const dataString = JSON.stringify(dado);

		return await this._redis.set(chave, dataString);
	}

	public async delete(chave: string): Promise<number> {
		return await this._redis.del(chave);
	}
}
