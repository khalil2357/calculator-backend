import { Injectable, OnModuleInit } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit {
  constructor() {
    // In Prisma 7, the connection URL needs to be passed in the constructor if not using an adapter
    super({
      url: process.env.DATABASE_URL,
    });
  }

  async onModuleInit() {
    await this.$connect();
  }
}
