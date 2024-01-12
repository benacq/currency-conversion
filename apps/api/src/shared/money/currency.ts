import { Money } from "./money";

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