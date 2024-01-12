import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/prisma/prisma.service";
import { Money } from "src/currencyy/money";
import { CreateCurrencyDto } from "./dto/create-currency.dto";
import { UpdateCurrencyDto } from "./dto/update-currency.dto";
import { CurrencyEntity } from "src/currencyy/currency";

@Injectable()
export class CurrencyRepository {
    constructor(private prisma: PrismaService) { }

    create(createWalletDto: CreateCurrencyDto) {
        return 'This action adds a new wallet';
    }

    async findAll(): Promise<CurrencyEntity[]> {
        const wallets = await this.prisma.currency.findMany();
        return wallets.map((currency) =>
            new CurrencyEntity(currency.id, currency.code, currency.name, currency.symbol)
        )
    }

    async findOne(id: number): Promise<CurrencyEntity> {
        const currency = await this.prisma.currency.findUnique({ where: { id } });
        return new CurrencyEntity(currency.id, currency.code, currency.name, currency.symbol)

    }

    update(id: number, updateWalletDto: UpdateCurrencyDto) {
        return `This action updates a #${id} wallet`;
    }

    remove(id: number) {
        return this.prisma.currency.delete({ where: { id } });
    }
}