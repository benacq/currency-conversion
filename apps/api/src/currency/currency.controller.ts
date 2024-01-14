import { Controller, Get, Query } from '@nestjs/common';
import { CurrencyService } from './currency.service';
import { CurrencyCode } from '@prisma/client';

@Controller('currency')
export class CurrencyController {
  constructor(private readonly currencyService: CurrencyService) { }

  @Get("/rates")
  getFxRate( @Query('from') from: string,  @Query('to') to: string ) {
    // this.currencyService.getFxRates(new CurrencyEntity(0, "GHS", "Ghana Cedi", "GHS"))
    if(to === undefined || to === null || to === ""){
      return this.currencyService.getFxRates(from as CurrencyCode)
    }
    return this.currencyService.getFxRate(from as CurrencyCode, to as CurrencyCode)
  }

}
