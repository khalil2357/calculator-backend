import { Controller, Get, Post, Body } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { CalculationsService } from './calculations.service';
import { CreateCalculationDto } from './dto/create-calculation.dto';

@ApiTags('calculations')

@Controller('calculations')
export class CalculationsController {
  constructor(private readonly calculationsService: CalculationsService) {}

  @Post()
  @ApiOperation({ summary: 'Save a new calculation' })
  @ApiResponse({ status: 201, description: 'The calculation has been successfully saved.' })
  create(@Body() createCalculationDto: CreateCalculationDto) {
    return this.calculationsService.create(createCalculationDto.expression, createCalculationDto.result);
  }

  @Get()
  @ApiOperation({ summary: 'Get recent calculation history' })
  @ApiResponse({ status: 200, description: 'Return all recent calculations.' })
  findAll() {
    return this.calculationsService.findAll();
  }
}
