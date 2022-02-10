import { Inject } from '@nestjs/common';
import { registerAs, ConfigType } from '@nestjs/config';

export const mongoConfiguration = registerAs('mongo', () => {
  const username = process.env.MONGO_USERNAME || 'admin';
  const password = process.env.MONGO_PASSWORD || 'admin';
  const host = process.env.MONGO_HOST || 'localhost:27017';

  return {
    uri: process.env.MONGO_URL || `mongodb://${username}:${password}@${host}`,
    dbName: process.env.MONGO_DB_NAME || 'nx-resto-rest',
  };
});

export type MongoConfiguration = ConfigType<typeof mongoConfiguration>;

export const InjectMongoConfig = () => Inject(mongoConfiguration.KEY);
