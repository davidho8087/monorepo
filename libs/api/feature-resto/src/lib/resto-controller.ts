import { Controller, Get } from '@nestjs/common';
import { RestoService } from '@restaurant-workspace/api/data-access-resto';

@Controller('restaurants')
export class RestoController {
  constructor(private restoService: RestoService) {}
  @Get()
  async findAllResto() {
    return await this.restoService.findAll();
  }
}
