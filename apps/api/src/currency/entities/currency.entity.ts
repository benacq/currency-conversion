import { Currency, CurrencyCode } from "@prisma/client";

export class CurrencyEntity implements Currency {
    id: number;
    code: CurrencyCode;
    name: string;
    symbol: string;
    flag: string;

    constructor(id: number, code: CurrencyCode, name: string, symbol: string, flag: string) {
        this.id = id;
        this.code = code;
        this.name = name;
        this.symbol = symbol;
        this.flag = flag;
    }
}