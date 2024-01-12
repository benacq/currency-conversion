import { CurrencyCode } from "@prisma/client";

abstract class Currency { }

export abstract class Money extends Currency {
    protected fxRateService: FxRate;

    public constructor(protected amount: number, protected currencyCode: CurrencyCode) {
        super();
    }

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

    abstract convertTo(money: Currency): Money;
}



export class NGN extends Money {
    convertTo(money: Currency): Money {
        this.fxRateService.getFxRate(this.currencyCode, (money as Money).getCurrencyCode())
        throw new Error("Method not implemented.");
    }
    constructor(protected amount: number) {
        super(amount, "NGN")
    }
}

export class GHS extends Money {
    convertTo(money: Currency): Money {
        this.fxRateService.getFxRate(this.currencyCode, (money as Money).getCurrencyCode())
        throw new Error("Method not implemented.");
    }
    constructor(protected amount: number) {
        super(amount, "GHS")
    }
}

export class USD extends Money {
    convertTo(money: Currency): Money {
        throw new Error("Method not implemented.");
    }
    constructor(protected amount: number) {
        super(amount, "USD")
    }
}

export class KES extends Money {
    convertTo(money: Currency): Money {
        throw new Error("Method not implemented.");
    }
    constructor(protected amount: number) {
        super(amount, "KES")
    }
}

export class EUR extends Money {
    convertTo(money: Currency): Money {
        throw new Error("Method not implemented.");
    }
    constructor(protected amount: number) {
        super(amount, "EUR")
    }
}