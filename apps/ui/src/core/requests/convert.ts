import { AxiosResponse } from "axios";
import { axiosInstance } from "../utils/axios-config";
export interface ConvertionPayload {
    sourceWalletId: string;
    targetWalletId: string;
    amount: number;
}
export async function convert(payload: ConvertionPayload): Promise<any> {
    return axiosInstance.post("/wallets/convert", payload)
        .then((res: AxiosResponse<any, any>) => {
            return res.data;
        });
}