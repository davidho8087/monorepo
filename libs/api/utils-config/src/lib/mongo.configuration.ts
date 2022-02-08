import { Inject } from '@nestjs/common';
import { registerAs, ConfigType } from '@nestjs/config';

export const mongoConfiguration = registerAs('mongo', () => {
  return {
    uri: process.env.MONGO_URL || 'mongodb://localhost:27017',
    dbName: process.env.MONGO_DB_NAME || 'nx-resto-rest',
  };
});

export type MongoConfiguration = ConfigType<typeof mongoConfiguration>;

export const InjectMongoConfig = () => Inject(mongoConfiguration.KEY);
