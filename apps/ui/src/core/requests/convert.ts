import { AxiosResponse } from "axios";
import { axiosInstance } from "../utils/axios-config";
export interface ConvertionPayload {
    sourceWalletId: string;
    targetWalletId: string;
    amount: number;
}
export async function convert(payload: ConvertionPayload): Promise<any> {
    console.log(payload)
    return axiosInstance.post("/wallets/convert", payload)
        .then((res: AxiosResponse<any, any>) => {
            console.log(res.data)
            return res.data;
        });
}