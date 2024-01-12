import { $Enums, CurrencyCode, Wallet } from "@prisma/client";
import { Money } from "src/shared/money/money";

export class WalletEntity {
    readonly id: string;
    readonly walletType: CurrencyCode
    readonly balance: Money;
    readonly createdAt: Date;
    readonly updatedAt: Date;

    constructor(id: string, walletType: CurrencyCode, balance: Money, createdAt: Date, updatedAt: Date) {
        this.walletType = walletType;
        this.id = id;
        this.balance = balance;
        this.createdAt = createdAt;
        this.updatedAt = updatedAt;
    }
}
