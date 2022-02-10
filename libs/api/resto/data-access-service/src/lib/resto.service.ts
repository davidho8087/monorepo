import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { CreateRestoDto } from '@restaurant-workspace/api-resto-data-access-dtos';
import { Resto, RestoDocument } from './resto.model';

@Injectable()
export class RestoService {
  constructor(
    @InjectModel(Resto.name) private restoModel: Model<RestoDocument>
  ) {}

  async findAll() {
    return this.restoModel.find().exec();
  }

  async createResto(dto: CreateRestoDto) {
    const resto = new this.restoModel(dto);

    return await this.restoModel.create(resto);
  }
}
