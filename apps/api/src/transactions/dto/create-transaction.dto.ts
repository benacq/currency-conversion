import { $Enums, CurrencyCode, TransactionStatus, TransactionType } from "@prisma/client";

export class CreateTransactionDto {
    constructor(
        public type: TransactionType,
        public amount: number,
        public currencyCode: CurrencyCode,
        public status: TransactionStatus,
        public sourceWalletId: string,
        public destinationWalletId: string,
        public id?: string, 
    ) { }
}

export class CreateTransactionDtoUntagged {
    constructor(
        public type: TransactionType,
        public amount: number,
        public currencyCode: CurrencyCode,
        public status: TransactionStatus,
        public sourceWalletId: string,
        public destinationWalletId: string,
    ) { }
}
