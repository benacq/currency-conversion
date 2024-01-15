import { AxiosResponse } from "axios";
import { Wallet } from "../types";
import { axiosInstance } from "../utils/axios-config";


export async function getWallets(addTransaction?: boolean): Promise<Wallet[]> {
    return axiosInstance.get(`/wallets?includeTransactions=${addTransaction}`)
        .then((res: AxiosResponse<Wallet[], any>) => {
            return res.data;
        });
}