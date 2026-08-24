import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNotEmpty } from 'class-validator';

export class CreateCalculationDto {
  @ApiProperty({ example: 'sin(30) + 5 * (2 + 1)', description: 'The mathematical expression evaluated' })
  @IsString()
  @IsNotEmpty()
  expression: string;

  @ApiProperty({ example: '14.5', description: 'The result of the evaluated expression' })
  @IsString()
  @IsNotEmpty()
  result: string;
}
