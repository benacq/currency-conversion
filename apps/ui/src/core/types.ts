type Currency = {
    flag: string;
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
    id: string;
    type: 'DEBIT' | 'CREDIT'
    amount: string;
    status: string;
    timestamp: string;
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


