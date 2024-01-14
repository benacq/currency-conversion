import { AxiosResponse } from "axios";
import { axiosInstance } from "../utils/axios-config";

export async function convert(payload: { sourceWallet: string, targetWallet: string, amount: number }): Promise<any> {
    return axiosInstance.post("/wallets/convert", payload)
        .then((res: AxiosResponse<any, any>) => {
            return res.data;
        });
}