import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';

import { Resto, RestoDocument } from './resto.model';

@Injectable()
export class RestoService {
  constructor(
    @InjectModel(Resto.name) private restoModel: Model<RestoDocument>
  ) {}

  async findAll() {
    return this.restoModel.find().exec();
  }
}
