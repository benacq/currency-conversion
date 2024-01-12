import { Module } from '@nestjs/common';
import { CurrencyService } from './currency.service';
import { CurrencyController } from './currency.controller';
import { PrismaModule } from 'src/prisma/prisma.module';
import { CurrencyRepository } from './currency.repository';

@Module({
  controllers: [CurrencyController],
  providers: [CurrencyService, CurrencyRepository],
  imports: [PrismaModule]
})
export class CurrencyModule {}
