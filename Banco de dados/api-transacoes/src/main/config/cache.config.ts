import { Redis } from "ioredis";
import { redisEnvs } from "../../app/envs/redis.env";

export const redis = new Redis(redisEnvs.url as string);
