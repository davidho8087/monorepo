import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { ApiProperty } from '@nestjs/swagger';
import { Document } from 'mongoose';

export type RestoDocument = Resto & Document;

@Schema({
  timestamps: true,
})
export class Resto {
  @Prop()
  @ApiProperty()
  name: string;

  @Prop()
  @ApiProperty()
  address: string;
}

export const RestoSchema = SchemaFactory.createForClass(Resto);
