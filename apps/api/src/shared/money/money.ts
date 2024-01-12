import { CurrencyCode } from "@prisma/client";

export abstract class Money {
    public constructor(protected amount: number, protected currencyCode: CurrencyCode) { }

    public getAmount(): number {
        return this.amount;
    }

    public getCurrencyCode(): CurrencyCode {
        return this.currencyCode;
    }


    public static from(amount: number, currencyCode: CurrencyCode): Money {
        switch (currencyCode) {
            case "NGN": return new NGN(amount)
            case "GHS": return new GHS(amount)
            case "USD": return new USD(amount)
            case "KES": return new KES(amount)
            case "EUR": return new EUR(amount)
            default: throw Error("Invalid currency code")
        }

    }

}



export class NGN extends Money {
    constructor(protected amount: number) {
        super(amount, "NGN")
    }
}

export class GHS extends Money {
    constructor(protected amount: number) {
        super(amount, "GHS")
    }
}

export class USD extends Money {
    constructor(protected amount: number) {
        super(amount, "USD")
    }
}

export class KES extends Money {
    constructor(protected amount: number) {
        super(amount, "KES")
    }
}

export class EUR extends Money {
    constructor(protected amount: number) {
        super(amount, "EUR")
    }
}