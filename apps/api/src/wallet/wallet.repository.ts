import { PrismaService } from "src/prisma.service";
import { Wallet } from "./wallet.model";

export class WalletService{
    constructor(private prisma: PrismaService){}

    async getWallets(): Promise<Wallet[] | void>{

    }
}