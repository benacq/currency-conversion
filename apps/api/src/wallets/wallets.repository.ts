import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { UpdateWalletDto } from "./dto/update-wallet.dto";
import { CreateWalletDto } from "./dto/create-wallet.dto";
import { PrismaService } from "src/prisma/prisma.service";
import { WalletEntity } from "./entities/wallet.entity";
import { Money } from "src/currency/entities/money";
import { Prisma, PrismaClient } from "@prisma/client";
import { DefaultArgs } from "@prisma/client/runtime/library";
import { NotFoundException } from "./exceptions/customExceptions";

@Injectable()
export class WalletsRepository {
  constructor(private prisma: PrismaService) { }

  create(createWalletDto: CreateWalletDto) {
    return 'This action adds a new wallet';
  }

  async findAll(addTransactions: boolean | string): Promise<WalletEntity[]> {
    let transactionHistoryFlag = false;

    if (addTransactions === "true") {
      transactionHistoryFlag = true;
    } else {
      transactionHistoryFlag = false;
    }

    try {
      const wallets = await this.prisma.wallet.findMany({ include: { currency: true, creditHistory: transactionHistoryFlag, debitHistory: transactionHistoryFlag } });
      if (wallets.length === 0) {
        console.info("Wallet is empty")
      }
      return wallets.map((wallet) =>
        new WalletEntity(wallet.id, wallet.currency.code, Money.from(parseFloat(wallet.balance.toFixed(2)), wallet.currency), wallet.createdAt, wallet.updatedAt, transactionHistoryFlag ? [...wallet.debitHistory, ...wallet.creditHistory] : undefined)
      )
    } catch (e) {
      console.error(e)
      throw new HttpException("Something went wrong while getting wallets", HttpStatus.BAD_REQUEST)
    }
  }


  async findOne(id: string, addTransactions: boolean | string): Promise<WalletEntity> {
    let transactionHistoryFlag = false;

    if (addTransactions === "true") {
      transactionHistoryFlag = true;
    } else {
      transactionHistoryFlag = false;
    }

    try {
      const wallet = await this.prisma.wallet.findUnique({ where: { id }, include: { currency: true, creditHistory: transactionHistoryFlag, debitHistory: transactionHistoryFlag } });
      return new WalletEntity(wallet.id, wallet.currency.code, Money.from(parseFloat(wallet.balance.toFixed(2)), wallet.currency), wallet.createdAt, wallet.updatedAt, transactionHistoryFlag ? [...wallet.debitHistory, ...wallet.creditHistory] : undefined);
    } catch (error) {
      console.error(error)
      throw new NotFoundException("This wallet does not exist in our records")
    }

  }

  async update(id: string, updateWalletDto: UpdateWalletDto) {
    try {
      return await this.prisma.wallet.update({
        where: { id },
        data: updateWalletDto
      });
    } catch (err) {
      console.error(err)
      throw new HttpException("Could not update wallet", HttpStatus.BAD_REQUEST)
    }
  }

  remove(id: string) {
    return this.prisma.wallet.delete({ where: { id } });
  }

  async transaction(callback: (txn: Omit<PrismaClient<Prisma.PrismaClientOptions, never, DefaultArgs>, "$connect" | "$disconnect" | "$on" | "$transaction" | "$use" | "$extends">) => Promise<any>) {
    await this.prisma.$transaction((txn) => callback(txn));
  }
}