import { Module } from '@nestjs/common';
import { ExchangeRatesService } from './exchange-rates.service';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  // controllers: [],
  providers: [ExchangeRatesService],
  exports: [ExchangeRatesService],
  imports: [PrismaModule]
})
export class ExchangeRatesModule {}
