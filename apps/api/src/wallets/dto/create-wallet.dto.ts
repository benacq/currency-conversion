import { Wallet } from "@prisma/client";

export class CreateWalletDto {
    id: string;
    balance: number;
    currencyId: number;
    createdAt: Date;
    updatedAt: Date;
    
}
