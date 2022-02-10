import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { RestoService } from './resto.service';
import { Resto, RestoSchema } from './resto.model';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Resto.name, schema: RestoSchema }]),
  ],

  providers: [RestoService],
  exports: [RestoService],
})
export class ApiDataAccessRestoModule {}
