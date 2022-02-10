import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ApiFeatureConfigModule } from '@restaurant-workspace/api-core-config';
import { ApiFeatureRestoModule } from '@restaurant-workspace/api-resto-controller';

import {
  MongoConfiguration,
  mongoConfiguration,
} from '@restaurant-workspace/api-core-utils-config';

@Module({
  imports: [
    ApiFeatureConfigModule,
    ApiFeatureRestoModule,
    MongooseModule.forRootAsync({
      inject: [mongoConfiguration.KEY],
      useFactory: (config: MongoConfiguration) => {
        return {
          uri: config.uri,
          dbName: config.dbName,
        };
      },
    }),
  ],
  controllers: [],
})
export class AppModule {}
