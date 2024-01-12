import { Module } from '@nestjs/common';
import { CurrencyService } from './currency.service';
import { CurrencyController } from './currency.controller';
import { PrismaModule } from 'src/prisma/prisma.module';
import { CurrencyRepository } from './currency.repository';
import { ExchangeRatesModule } from 'src/exchange-rates/exchange-rates.module';

@Module({
  controllers: [CurrencyController],
  providers: [CurrencyService, CurrencyRepository],
  imports: [PrismaModule, ExchangeRatesModule]
})
export class CurrencyModule {}
