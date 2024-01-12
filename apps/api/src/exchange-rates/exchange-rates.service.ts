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
      [from]: { [rate.targetCurrency.code]: rate.rate }
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
      const rate = item.rate;

      if (!result[from]) {
        result[from] = {};
      }
      result[from][targetCurrencyCode] = rate;
      return result;
    }, {});

    console.log(formattedRate)
    return formattedRate;

  }

  // create(createExchangeRateDto: CreateExchangeRateDto) {
  //   return 'This action adds a new exchangeRate';
  // }

  // findAll() {
  //   return `This action returns all exchangeRates`;
  // }

  // findOne(id: number) {
  //   return `This action returns a #${id} exchangeRate`;
  // }

  // update(id: number, updateExchangeRateDto: UpdateExchangeRateDto) {
  //   return `This action updates a #${id} exchangeRate`;
  // }

  // remove(id: number) {
  //   return `This action removes a #${id} exchangeRate`;
  // }
}
