import { $Enums, Currency, CurrencyCode, Transaction, Wallet } from "@prisma/client";
import { Money } from "src/currency/entities/money";

export class WalletEntity {
    readonly id: string;
    readonly walletType: CurrencyCode
    readonly balance: Money;
    readonly createdAt: Date;
    readonly updatedAt: Date;

    readonly debitHistory: Transaction[];
    readonly creditHistory: Transaction[];


    constructor(id: string, walletType: CurrencyCode, balance: Money, createdAt: Date, updatedAt: Date, debitHistory: Transaction[], creditHistory: Transaction[]) {
        this.walletType = walletType;
        this.id = id;
        this.balance = balance;
        this.createdAt = createdAt;
        this.updatedAt = updatedAt;
        this.debitHistory = debitHistory;
        this.creditHistory = creditHistory;
    }

    getBalance(): number {
        return this.balance.getAmount();
    }

    public isCompatible(currency: Currency){
        return this.walletType === currency.code
    }

    // deposit(amount: number): void {
    //     this.balance.getAmount() += amount;
    //     this.recordTransaction('Deposit', amount);
    // }

    // withdraw(amount: number): void {
    //     if (this.balance.getAmount() >= amount) {
    //         // this.balance.getAmount() - amount;
    //         this.recordTransaction('Withdrawal', amount);
    //     } else {
    //         console.log('Insufficient funds.');
    //     }
    // }



    // transferFunds(targetWallet: Wallet, amount: number): void {
    //     if (this.balance.getAmount() >= amount) {
    //         this.withdraw(amount);
    //         targetWallet.deposit(amount);
    //         this.recordTransaction('Transfer', amount);
    //     } else {
    //         console.log('Insufficient funds for transfer.');
    //     }
    // }

    // convertCurrency(targetCurrency: string, amount: number): number {
    //     // perform currency conversion logic
    //     // (implementation depends on the specific requirements)
    //     return amount;
    // }

    // verifyPIN(enteredPIN: string): boolean {
    //     return this.pin === enteredPIN;
    // }

    // getAccountInfo(): string {
    //     // return information about the wallet owner
    //     return 'Account Information';
    // }

    // private recordTransaction(type: string, amount: number): void {
    //     const transaction: Transaction = { type, amount, timestamp: new Date() };
    //     this.transactions.push(transaction);
    // }


}
