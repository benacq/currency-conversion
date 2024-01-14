import { HttpException, HttpStatus, Injectable, NotFoundException } from '@nestjs/common';
import { CreateExchangeRateDto } from './dto/create-exchange-rate.dto';
import { UpdateExchangeRateDto } from './dto/update-exchange-rate.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { CurrencyCode } from '@prisma/client';
import { EmptyResourceException } from 'src/wallets/exceptions/customExceptions';

type ExchangeRateObject = {
  [sourceCurrency: string]: {
    [targetCurrency: string]: number;
  };
};

@Injectable()
export class ExchangeRatesService {

  constructor(private prisma: PrismaService) { }

  async getRate(from: CurrencyCode, to: CurrencyCode): Promise<ExchangeRateObject> {
    try {
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
    } catch (error) {
      throw new NotFoundException("Something went wrong whilst getting exchange rate")
    }

  }


  async getRates(from: CurrencyCode): Promise<ExchangeRateObject> {
    try {
      const rates = await this.prisma.exchangeRate.findMany({
        where: {
          sourceCurrency: { code: from }
        }, include: { sourceCurrency: true, targetCurrency: true }
      });

      if (rates.length === 0) {
        throw new EmptyResourceException("Unable to get exchange rates, kindly try again later")
      }

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

    } catch (error) {
      throw new HttpException("Something went wrong whilst getting exchange rates", HttpStatus.BAD_REQUEST)
    }



  }
}
