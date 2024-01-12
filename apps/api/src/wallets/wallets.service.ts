import { Injectable } from '@nestjs/common';
import { CreateWalletDto } from './dto/create-wallet.dto';
import { UpdateWalletDto } from './dto/update-wallet.dto';
import { WalletsRepository } from './wallets.repository';
import { WalletEntity } from './entities/wallet.entity';
import { Money } from 'src/currency/entities/money';
import { Wallet } from '@prisma/client';
import { ExchangeRatesService } from 'src/exchange-rates/exchange-rates.service';

@Injectable()
export class WalletsService {
  constructor(private walletRepo: WalletsRepository, private exchangeRateService: ExchangeRatesService) { }


  credit(wallet: WalletEntity, money: Money): void {
    if (wallet.isCompatible(money.getCurrency())) {
      this.walletRepo.update(wallet.id, { balance: wallet.getBalance() + money.getAmount() } as UpdateWalletDto)
      // this.recordTransaction('Deposit', amount);
      return;
    }
    throw new Error(`Cannot credit incompatible currencies: ${money.getCurrency().code} => ${wallet.walletType}`)
  }

  debit(wallet: WalletEntity, amount: number): void {
    if (wallet.getBalance() >= amount) {
      this.walletRepo.update(wallet.id, { balance: wallet.getBalance() - amount } as UpdateWalletDto)
      // this.recordTransaction('Withdrawal', amount);
    } else {
      throw new Error("Insufficient funds")
    }
  }



  async convert(sourceWalletId: string, targetWalletId: string, amount: number): Promise<void> {
    if (sourceWalletId === targetWalletId) throw new Error("Conversion between same wallet is not possible");
    const sourceWallet: WalletEntity = await this.walletRepo.findOne(sourceWalletId)//c12831ff-f36a-4933-be7e-4ae80d7f363e GHS   
    const targetWallet: WalletEntity = await this.walletRepo.findOne(targetWalletId) // 4a235fa1-abf1-4d2c-b196-03ff5fd8412d NGN

    const rate = await this.exchangeRateService.getRate(sourceWallet.walletType, targetWallet.walletType)
    const rateValue = rate[sourceWallet.walletType][targetWallet.walletType]
    this.debit(sourceWallet, amount)
    this.credit(targetWallet, Money.from(amount * rateValue, targetWallet.balance.getCurrency()));

  }


  // private recordTransaction(type: string, amount: number): void {
  //   const transaction: Transaction = { type, amount, timestamp: new Date() };
  //   this.transactions.push(transaction);
  // }



  create(createWalletDto: CreateWalletDto) {
    return this.walletRepo.create(createWalletDto);
  }

  findAll() {
    // const money: Money = new GHS(345.43)

    return this.walletRepo.findAll();
  }

  async findOne(id: string) {
    const wallet = await this.walletRepo.findOne(id);
    return wallet;
  }

  update(id: string, updateWalletDto: UpdateWalletDto) {
    return this.walletRepo.update(id, updateWalletDto);
  }

  remove(id: string) {
    return this.walletRepo.remove(id);
  }





}
