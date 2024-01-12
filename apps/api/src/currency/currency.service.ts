import { Injectable } from '@nestjs/common';
import { CurrencyRepository } from './currency.repository';
import { UpdateCurrencyDto } from './dto/update-currency.dto';
import { CreateCurrencyDto } from './dto/create-currency.dto';


@Injectable()
export class CurrencyService {
  constructor(private currencyRepo: CurrencyRepository) { }

  create(createWalletDto: CreateCurrencyDto) {
    return this.currencyRepo.create(createWalletDto);
  }

  findAll() {
    // const money: Money = new GHS(345.43)

    return this.currencyRepo.findAll();
  }

  async findOne(id: number) {
    const wallet = await this.currencyRepo.findOne(id);
    return wallet;
  }

  update(id: number, updateWalletDto: UpdateCurrencyDto) {
    return this.currencyRepo.update(id, updateWalletDto);
  }

  remove(id: number) {
    return this.currencyRepo.remove(id);
  }
}
