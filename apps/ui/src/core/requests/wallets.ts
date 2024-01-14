import { AxiosResponse } from "axios";
import { Wallet } from "../types";
import { axiosInstance } from "../utils/axios-config";


// export async function getWalletsForSelect(): Promise<{ value: string, label: string }[]> {
//     return axiosInstance.get("/wallets")
//         .then((res: AxiosResponse<Wallet[], any>) => {
//             return res.data.map((item) => {
//                 return { value: item.id, label: item.walletType };
//             }) as { label: string; value: string; }[];
//         });
// }

export async function getWallets(): Promise<Wallet[]> {
    return axiosInstance.get("/wallets")
        .then((res: AxiosResponse<Wallet[], any>) => {
            return res.data;
        });
}