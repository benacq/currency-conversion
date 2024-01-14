import { Wallet } from "../types";

export function transformWallet(wallets: Wallet[]): { label: string, value: string }[] {
    return wallets.map((item) => {
        return { value: item.id, label: item.walletType };
    }) as { label: string; value: string; }[];
}


export function findWalletById(wallets: Wallet[], id: string): Wallet {
    return wallets.find((wallet) => wallet.id === id) as Wallet;
}