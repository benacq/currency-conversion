import { AxiosResponse } from "axios";
import { axiosInstance } from "../utils/axios-config";

export interface RateResponse {
    sourceToTarget: number;
    targetToSource: number;
}

export async function getExchangeRate(query: Record<string, Record<string, string>>): Promise<RateResponse> {
    const from = query["sourceWallet"]["label"]
    const to = query["targetWallet"]["label"]


    return axiosInstance.get(`/currency/rates?from=${from}&to=${to}`)
        .then((res: AxiosResponse<Record<string, Record<string, string>>, any>) => {
            const rate = res.data[from][to]
            const targetToSource = 1 / Number(rate);
            return { sourceToTarget: rate, targetToSource: targetToSource.toFixed(4) } as unknown as RateResponse;
        });
}