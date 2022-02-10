import { Body, Controller, Get, Post } from '@nestjs/common';
import { ApiCreatedResponse, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import {
  RestoService,
  Resto,
} from '@restaurant-workspace/api-resto-data-access-service';
import { CreateRestoDto } from '@restaurant-workspace/api-resto-data-access-dtos';

@Controller('restaurants')
@ApiTags('RestoController')
export class RestoController {
  constructor(private restoService: RestoService) {}
  @Get()
  @ApiOkResponse({
    type: Resto,
    isArray: true,
  })
  async findAllResto() {
    return await this.restoService.findAll();
  }

  @Post()
  @ApiCreatedResponse({
    type: Resto,
  })
  async createArticle(@Body() article: CreateRestoDto) {
    return await this.restoService.createResto(article);
  }
}
