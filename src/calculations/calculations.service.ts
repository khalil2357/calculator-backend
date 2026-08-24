import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class CalculationsService {
  constructor(private prisma: PrismaService) {}

  async create(expression: string, result: string) {
    return this.prisma.calculation.create({
      data: {
        expression,
        result,
      },
    });
  }

  async findAll() {
    return this.prisma.calculation.findMany({
      orderBy: { createdAt: 'desc' },
      take: 50,
    });
  }
}
