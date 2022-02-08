import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ApiFeatureConfigModule } from '@restaurant-workspace/api/feature-config';
import { ApiFeatureRestoModule } from '@restaurant-workspace/api/feature-resto';

import {
  MongoConfiguration,
  mongoConfiguration,
} from '@restaurant-workspace/api/utils-config';

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
