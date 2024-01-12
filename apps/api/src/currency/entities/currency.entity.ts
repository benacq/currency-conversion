import { Currency, CurrencyCode } from "@prisma/client";

export class CurrencyEntity implements Currency {
    id: number;
    code: CurrencyCode;
    name: string;
    symbol: string;

    constructor(id: number, code: CurrencyCode, name: string, symbol: string) {
        this.id = id;
        this.code = code;
        this.name = name;
        this.symbol = symbol;
    }
}