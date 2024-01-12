import { Injectable } from '@nestjs/common';
import { CurrencyRepository } from './currency.repository';
import { UpdateCurrencyDto } from './dto/update-currency.dto';
import { CreateCurrencyDto } from './dto/create-currency.dto';
import { Currency, CurrencyCode } from '@prisma/client';
import { ExchangeRatesService } from 'src/exchange-rates/exchange-rates.service';


@Injectable()
export class CurrencyService {
  constructor(private currencyRepo: CurrencyRepository, private exchangeRateService: ExchangeRatesService) { }


  getFxRate(from:CurrencyCode, to: CurrencyCode){
     return this.exchangeRateService.getRate(from, to)
  }

  getFxRates(from:CurrencyCode){
    return this.exchangeRateService.getRates(from)
 }
}
