import { AxiosResponse } from "axios";
import { Wallet } from "../types";
import { axiosInstance } from "../utils/axios-config";


export async function getWallets(): Promise<Wallet[]> {
    return axiosInstance.get("/wallets")
        .then((res: AxiosResponse<Wallet[], any>) => {
            return res.data;
        });
}