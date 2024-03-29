import { Injectable } from '@nestjs/common';
import { CreateWalletDto } from './dto/create-wallet.dto';
import { UpdateWalletDto } from './dto/update-wallet.dto';
import { WalletsRepository } from './wallets.repository';
import { WalletEntity } from './entities/wallet.entity';
import { Money } from 'src/currency/entities/money';
import { ExchangeRatesService } from 'src/exchange-rates/exchange-rates.service';
import { TransactionsService } from 'src/transactions/transactions.service';
import { CreateTransactionDtoUntagged } from 'src/transactions/dto/create-transaction.dto';
import { CurrencyCode, TransactionStatus, TransactionType } from '@prisma/client';
import { ConversionException, TransactionException } from './exceptions/customExceptions';

@Injectable()
export class WalletsService {
  constructor(private walletRepo: WalletsRepository, private exchangeRateService: ExchangeRatesService, private transactionService: TransactionsService) { }


  credit(wallet: WalletEntity, money: Money, sourceWalletId: string): void {
    let transactionData = { type: TransactionType.CREDIT, amount: money.getAmount(), currencyCode: money.getCurrency().code, status: TransactionStatus.IN_PROGRESS, sourceWalletId, destinationWalletId: wallet.id } as CreateTransactionDtoUntagged

    if (wallet.isCompatible(money.getCurrency())) {
      this.walletRepo.update(wallet.id, { balance: wallet.getBalance() + money.getAmount() } as UpdateWalletDto)

      this.transactionService.create({ ...transactionData, status: TransactionStatus.COMPLETED })
      return;
    }

    this.transactionService.create({ ...transactionData, status: TransactionStatus.FAILED })
    throw new TransactionException(`Cannot credit incompatible currencies: ${money.getCurrency().code} => ${wallet.walletType}`)
  }

  debit(wallet: WalletEntity, amount: number, beneficiaryWalletId: string): void {
    let transactionData = { type: TransactionType.DEBIT, amount, currencyCode: wallet.walletType, status: TransactionStatus.IN_PROGRESS, sourceWalletId: wallet.id, destinationWalletId: beneficiaryWalletId } as CreateTransactionDtoUntagged

    if (wallet.getBalance() >= amount) {
      this.walletRepo.update(wallet.id, { balance: wallet.getBalance() - amount } as UpdateWalletDto)
      this.transactionService.create({ ...transactionData, status: TransactionStatus.COMPLETED })
    } else {
      this.transactionService.create({ ...transactionData, status: TransactionStatus.FAILED })
      throw new TransactionException("You do not have sufficient fund to perform this transaction")
    }
  }


  async convert(sourceWalletId: string, targetWalletId: string, amount: number): Promise<void> {
    if (amount <= 0) throw new ConversionException("Minimum conversion amount is 1 unit of all currencies");
    if (sourceWalletId === targetWalletId) throw new ConversionException("Conversion between same wallet is not possible");
    const sourceWallet: WalletEntity = await this.walletRepo.findOne(sourceWalletId, false)//c12831ff-f36a-4933-be7e-4ae80d7f363e GHS   
    const targetWallet: WalletEntity = await this.walletRepo.findOne(targetWalletId, false) // 4a235fa1-abf1-4d2c-b196-03ff5fd8412d NGN

    const rate = await this.exchangeRateService.getRate(sourceWallet.walletType, targetWallet.walletType)
    const rateValue = rate[sourceWallet.walletType][targetWallet.walletType]

    this.debit(sourceWallet, amount, targetWalletId),
    this.credit(targetWallet, Money.from(amount * rateValue, targetWallet.balance.getCurrency()), sourceWalletId)
  }




  create(createWalletDto: CreateWalletDto) {
    return this.walletRepo.create(createWalletDto);
  }

  findAll(addTransactions: boolean) {
    return this.walletRepo.findAll(addTransactions);
  }

  async findOne(id: string, addTransactions: boolean) {
    const wallet = await this.walletRepo.findOne(id, addTransactions);
    return wallet;
  }

  update(id: string, updateWalletDto: UpdateWalletDto) {
    return this.walletRepo.update(id, updateWalletDto);
  }

  remove(id: string) {
    return this.walletRepo.remove(id);
  }





}
