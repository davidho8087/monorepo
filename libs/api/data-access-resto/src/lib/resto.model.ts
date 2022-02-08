import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type RestoDocument = Resto & Document;

@Schema({
  timestamps: true,
})
export class Resto {
  @Prop()
  name: string;

  @Prop()
  address: number;
}

export const RestoSchema = SchemaFactory.createForClass(Resto);
