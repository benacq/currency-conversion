import { Currency } from '.prisma/client';


export abstract class Money {
    protected fxRateService: FxRate;

    public constructor(protected amount: number, protected currency: Currency) {
    }

    public getAmount(): number {
        return this.amount;
    }

    public getCurrency(): Currency {
        return this.currency;
    }


    public static from(amount: number, currency: Currency): Money {
        switch (currency.code) {
            case "NGN": return new NGN(amount, currency)
            case "GHS": return new GHS(amount, currency)
            case "USD": return new USD(amount, currency)
            case "KES": return new KES(amount, currency)
            case "EUR": return new EUR(amount, currency)
            default: throw Error("Invalid currency code")
        }
    }

    // abstract convertTo(money: Currency): Money;
}



class NGN extends Money {
    constructor(protected amount: number, protected currency: Currency) {
        super(amount, currency)
    }
}

class GHS extends Money {
    constructor(protected amount: number, protected currency: Currency) {
        super(amount, currency)
    }
}

class USD extends Money {
    constructor(protected amount: number, protected currency: Currency) {
        super(amount, currency)
    }
}

class KES extends Money {

    constructor(protected amount: number, protected currency: Currency) {
        super(amount, currency)
    }
}

class EUR extends Money {

    constructor(protected amount: number, protected currency: Currency) {
        super(amount, currency)
    }
}