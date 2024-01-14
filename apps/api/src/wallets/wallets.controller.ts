import { Controller, Get, Post, Body, Patch, Param, Delete, HttpCode, Query } from '@nestjs/common';
import { WalletsService } from './wallets.service';
import { CreateWalletDto } from './dto/create-wallet.dto';
import { UpdateWalletDto } from './dto/update-wallet.dto';

@Controller('wallets')
export class WalletsController {
  constructor(private readonly walletsService: WalletsService) { }


  @Post("/convert")
  @HttpCode(200)
  convertCurrency(@Body() convertionDto: { sourceWalletId: string, targetWalletId: string, amount: number }) {
    return this.walletsService.convert(convertionDto.sourceWalletId, convertionDto.targetWalletId, convertionDto.amount).then(() => "Conversion successful");
  }

  @Post()
  create(@Body() createWalletDto: CreateWalletDto) {
    return this.walletsService.create(createWalletDto);
  }

  @Get()
  findAll(@Query('includeTransactions') addTransactions: boolean) {
    return this.walletsService.findAll(addTransactions ?? false);
  }

  @Get(':id')
  findOne(@Param('id') id: string, @Query('includeTransactions') addTransactions: boolean) {
    return this.walletsService.findOne(id, addTransactions ?? false);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateWalletDto: UpdateWalletDto) {
    return this.walletsService.update(id, updateWalletDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.walletsService.remove(id);
  }
}
