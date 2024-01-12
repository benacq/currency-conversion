import { Injectable } from "@nestjs/common";
import { UpdateWalletDto } from "./dto/update-wallet.dto";
import { CreateWalletDto } from "./dto/create-wallet.dto";
import { PrismaService } from "src/prisma/prisma.service";
import { WalletEntity } from "./entities/wallet.entity";
import { Money } from "src/currencyy/money";

@Injectable()
export class WalletsRepository {
  constructor(private prisma: PrismaService) { }

  create(createWalletDto: CreateWalletDto) {
    return 'This action adds a new wallet';
  }

  async findAll(): Promise<WalletEntity[]> {
    const wallets = await this.prisma.wallet.findMany({ include: { currency: true } });
    return wallets.map((wallet) =>
      new WalletEntity(wallet.id, wallet.currency.code, Money.from(wallet.balance, wallet.currency), wallet.createdAt, wallet.updatedAt)
    )
  }

  async findOne(id: string): Promise<WalletEntity> {
    const wallet = await this.prisma.wallet.findUnique({ where: { id }, include: { currency: true } });
    return new WalletEntity(wallet.id, wallet.currency.code, Money.from(wallet.balance, wallet.currency), wallet.createdAt, wallet.updatedAt);
  }

  update(id: string, updateWalletDto: UpdateWalletDto) {
    return `This action updates a #${id} wallet`;
  }

  remove(id: string) {
    return this.prisma.wallet.delete({ where: { id } });
  }
}