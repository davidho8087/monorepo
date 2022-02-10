import { Module } from '@nestjs/common';
import { ApiDataAccessRestoModule } from '@restaurant-workspace/api-resto-data-access-service';
import { RestoController } from './resto-controller';
@Module({
  imports: [ApiDataAccessRestoModule],
  controllers: [RestoController],
  providers: [],
  exports: [],
})
export class ApiFeatureRestoModule {}
