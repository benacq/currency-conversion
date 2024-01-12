import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from '@nestjs/common';
import { CurrencyService } from './currency.service';
import { CreateCurrencyDto } from './dto/create-currency.dto';
import { UpdateCurrencyDto } from './dto/update-currency.dto';
import { CurrencyEntity } from './entities/currency.entity';
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

  // @Get("/rates")
  // getFxRates( @Query('from') from: string) {
  //   return this.currencyService.getFxRates(from as CurrencyCode)
  // }


  // @Post()
  // create(@Body() createCurrencyDto: CreateCurrencyDto) {
  //   return this.currencyService.create(createCurrencyDto);
  // }

  // @Get()
  // findAll() {
  //   // this.currencyService.getFxRates(new CurrencyEntity(0, "GHS", "Ghana Cedi", "GHS"))
  //   this.currencyService.getFxRate(new CurrencyEntity(0, "GHS", "Ghana Cedi", "GHS"), new CurrencyEntity(0, "EUR", "Ghana Cedi", "GHS"))

  //   return this.currencyService.findAll();
  // }

  // @Get(':id')
  // findOne(@Param('id') id: string) {
  //   return this.currencyService.findOne(+id);
  // }

  // @Patch(':id')
  // update(@Param('id') id: string, @Body() updateCurrencyDto: UpdateCurrencyDto) {
  //   return this.currencyService.update(+id, updateCurrencyDto);
  // }

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.currencyService.remove(+id);
  // }


}
