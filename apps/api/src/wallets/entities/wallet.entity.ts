import { $Enums, Currency, CurrencyCode, Transaction, Wallet } from "@prisma/client";
import { Money } from "src/currency/entities/money";

export class WalletEntity {
    readonly id: string;
    readonly walletType: CurrencyCode
    readonly balance: Money;
    readonly createdAt: Date;
    readonly updatedAt: Date;
    readonly transactionHistory: Transaction[];


    constructor(id: string, walletType: CurrencyCode, balance: Money, createdAt: Date, updatedAt: Date, transactionHistory: Transaction[]) {
        this.walletType = walletType;
        this.id = id;
        this.balance = balance;
        this.createdAt = createdAt;
        this.updatedAt = updatedAt;
        this.transactionHistory = transactionHistory;
    }

    getBalance(): number {
        return this.balance.getAmount();
    }

    public isCompatible(currency: Currency){
        return this.walletType === currency.code
    }


}
