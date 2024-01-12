import { Injectable } from "@nestjs/common";
import { UpdateWalletDto } from "./dto/update-wallet.dto";
import { CreateWalletDto } from "./dto/create-wallet.dto";
import { PrismaService } from "src/prisma/prisma.service";
import { WalletEntity } from "./entities/wallet.entity";
import { Money } from "src/currency/entities/money";
import { Prisma, PrismaClient } from "@prisma/client";
import { DefaultArgs } from "@prisma/client/runtime/library";

@Injectable()
export class WalletsRepository {
  constructor(private prisma: PrismaService) { }

  create(createWalletDto: CreateWalletDto) {
    return 'This action adds a new wallet';
  }

  async findAll(): Promise<WalletEntity[]> {
    const wallets = await this.prisma.wallet.findMany({ include: { currency: true, creditHistory: true, debitHistory: true } });
    console.log(wallets)
    return wallets.map((wallet) =>
      new WalletEntity(wallet.id, wallet.currency.code, Money.from(wallet.balance, wallet.currency), wallet.createdAt, wallet.updatedAt)
    )
  }

  async findOne(id: string): Promise<WalletEntity> {
    const wallet = await this.prisma.wallet.findUnique({ where: { id }, include: { currency: true, creditHistory: true, debitHistory: true } });
    return new WalletEntity(wallet.id, wallet.currency.code, Money.from(wallet.balance, wallet.currency), wallet.createdAt, wallet.updatedAt);
  }

  async update(id: string, updateWalletDto: UpdateWalletDto) {
    try {
      return await this.prisma.wallet.update({
        where: { id },
        data: updateWalletDto
      });
    } catch (err) {
      console.log(err);
    }
  }

  remove(id: string) {
    return this.prisma.wallet.delete({ where: { id } });
  }

  // transaction(func: any){
  //   // return this.prisma.$transaction((txn)=>func(txn))
    
  // }

  async transaction(callback: (txn: Omit<PrismaClient<Prisma.PrismaClientOptions, never, DefaultArgs>, "$connect" | "$disconnect" | "$on" | "$transaction" | "$use" | "$extends">) => Promise<any>) {
    await this.prisma.$transaction((txn)=>callback(txn));
  }
}