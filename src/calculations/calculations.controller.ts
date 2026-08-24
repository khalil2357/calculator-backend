import { Controller, Get, Post, Body } from '@nestjs/common';
import { CalculationsService } from './calculations.service';

@Controller('calculations')
export class CalculationsController {
  constructor(private readonly calculationsService: CalculationsService) {}

  @Post()
  create(@Body() createCalculationDto: { expression: string; result: string }) {
    return this.calculationsService.create(createCalculationDto.expression, createCalculationDto.result);
  }

  @Get()
  findAll() {
    return this.calculationsService.findAll();
  }
}
