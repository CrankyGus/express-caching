import { Redis } from "ioredis";

function getRedisUrl(): string {
  if (process.env.REDIS_URL) {
    return process.env.REDIS_URL;
  }
  return "redis://localhost:6379";
}

export const redisClient = new Redis(getRedisUrl());
