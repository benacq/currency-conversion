type Currency = {
    id: number;
    code: string;
    name: string;
    symbol: string;
}
type Money = {
    amount: number;
    currency: Currency;
}

export type Transaction = {
    transactionId: string;
    transactionType: 'Debit' | 'Credit'
    amount: string;
    status: string;
    date: string;
}


export interface Wallet {
    id: string;
    walletType: string;
    balance: Money;
    createdAt: string;
    updatedAt: string;
}

export interface WalletWithTransactions extends Wallet {
    creditHistory: Transaction[]
    debitHistory: Transaction[]
}


