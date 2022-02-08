import { Module } from '@nestjs/common';
import { ApiDataAccessRestoModule } from '@restaurant-workspace/api/data-access-resto';
import { RestoController } from './resto-controller';
@Module({
  imports: [ApiDataAccessRestoModule],
  controllers: [RestoController],
  providers: [],
  exports: [],
})
export class ApiFeatureRestoModule {}
