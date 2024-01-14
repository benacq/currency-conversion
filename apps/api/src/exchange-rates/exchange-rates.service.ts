import { Injectable } from '@nestjs/common';
import { CreateExchangeRateDto } from './dto/create-exchange-rate.dto';
import { UpdateExchangeRateDto } from './dto/update-exchange-rate.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { CurrencyCode } from '@prisma/client';

type ExchangeRateObject = {
  [sourceCurrency: string]: {
    [targetCurrency: string]: number;
  };
};

@Injectable()
export class ExchangeRatesService {

  constructor(private prisma: PrismaService) { }

  async getRate(from: CurrencyCode, to: CurrencyCode): Promise<ExchangeRateObject> {
    const rate = await this.prisma.exchangeRate.findFirst({
      where: {
        sourceCurrency: { code: from },
        targetCurrency: { code: to }
      }, include: { sourceCurrency: true, targetCurrency: true }
    });

    const formatted = {
      [from]: { [rate.targetCurrency.code]: parseFloat(rate.rate.toFixed(4)) }
    }
    return formatted;
  }


  async getRates(from: CurrencyCode): Promise<ExchangeRateObject> {
    const rates = await this.prisma.exchangeRate.findMany({
      where: {
        sourceCurrency: { code: from }
      }, include: { sourceCurrency: true, targetCurrency: true }
    });

    const formattedRate: ExchangeRateObject = rates.reduce((result, item) => {
      const targetCurrencyCode = item.targetCurrency.code;
      const rate = parseFloat(item.rate.toFixed(4));

      if (!result[from]) {
        result[from] = {};
      }
      result[from][targetCurrencyCode] = rate;
      return result;
    }, {});

    return formattedRate;
  }
}
