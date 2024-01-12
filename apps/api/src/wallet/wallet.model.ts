import { Prisma } from "@prisma/client";

export class Wallet implements Prisma.WalletCreateInput{
    id: number
    title: string;
    description: string
    balance: number
    currencyCode: any
    createdAt: any
    sentTransactions: any//Transaction[]
    receivedTransactions : any //Transaction[]
}