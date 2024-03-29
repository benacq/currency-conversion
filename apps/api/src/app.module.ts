import { Module } from '@nestjs/common';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { WalletsModule } from './wallets/wallets.module';
import { PrismaModule } from './prisma/prisma.module';
import { CurrencyModule } from './currency/currency.module';
import { ExchangeRatesModule } from './exchange-rates/exchange-rates.module';
import { TransactionsModule } from './transactions/transactions.module';

@Module({
  imports: [
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '../..', 'ui', 'dist'),
    }),
    PrismaModule,
    WalletsModule,
    CurrencyModule,
    ExchangeRatesModule,
    TransactionsModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule { }
