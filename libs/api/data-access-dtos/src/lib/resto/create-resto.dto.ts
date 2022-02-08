import { ApiProperty } from '@nestjs/swagger';

export class CreateRestoDto {
  @ApiProperty()
  name: string;
  @ApiProperty()
  address: string;
}
