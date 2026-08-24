import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { CalculationsModule } from './calculations/calculations.module';

@Module({
  imports: [PrismaModule, CalculationsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
