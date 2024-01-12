import { PrismaClient } from "@prisma/client";


const prisma = new PrismaClient();

async function createCurrencies() {
    const currency1 = await prisma.currency.upsert({
        where: { id: 1 },
        update: {},
        create: {
            name: "Ghana Cedi",
            code: "GHS",
            symbol: "GH₵"
        }
    })

    const currency2 = await prisma.currency.upsert({
        where: { id: 2 },
        update: {},
        create: {
            name: "Naira",
            code: "NGN",
            symbol: "₦"
        }
    })

    const currency3 = await prisma.currency.upsert({
        where: { id: 3 },
        update: {},
        create: {
            name: "Kenyan Shilling",
            code: "KES",
            symbol: "KSh"
        }
    })


    const currency4 = await prisma.currency.upsert({
        where: { id: 4 },
        update: {},
        create: {
            name: "United States Dollar",
            code: "USD",
            symbol: "$"
        }
    })


    const currency5 = await prisma.currency.upsert({
        where: { id: 5 },
        update: {},
        create: {
            name: "Euro",
            code: "EUR",
            symbol: "€"
        }
    })

    console.log({ currency1, currency2, currency3, currency4 })

}


async function createExchangeRates() {
    const fx1 = await prisma.exchangeRate.upsert({
        where: {
            sourceCurrencyId_targetCurrencyId: {
                sourceCurrencyId: 1,
                targetCurrencyId: 1
            }
        },
        update: {},
        create: {
            rate: 1,
            sourceCurrency: { connect: { id: 1 } },
            targetCurrency: { connect: { id: 1 } }
        }
    })


    const fx2 = await prisma.exchangeRate.upsert({
        where: {
            sourceCurrencyId_targetCurrencyId: {
                sourceCurrencyId: 1,
                targetCurrencyId: 2
            }
        },
        update: {},
        create: {
            rate: 2.533,
            sourceCurrency: { connect: { id: 1 } },
            targetCurrency: { connect: { id: 2 } }
        }
    })


    const fx3 = await prisma.exchangeRate.upsert({
        where: {
            sourceCurrencyId_targetCurrencyId: {
                sourceCurrencyId: 1,
                targetCurrencyId: 3
            }
        },
        update: {},
        create: {
            rate: 4.533,
            sourceCurrency: { connect: { id: 1 } },
            targetCurrency: { connect: { id: 3 } }
        }
    })


    const fx4 = await prisma.exchangeRate.upsert({
        where: {
            sourceCurrencyId_targetCurrencyId: {
                sourceCurrencyId: 1,
                targetCurrencyId: 4
            }
        },
        update: {},
        create: {
            rate: 0.533,
            sourceCurrency: { connect: { id: 1 } },
            targetCurrency: { connect: { id: 4 } }
        }
    })


    const fx5 = await prisma.exchangeRate.upsert({
        where: {
            sourceCurrencyId_targetCurrencyId: {
                sourceCurrencyId: 1,
                targetCurrencyId: 5
            }
        },
        update: {},
        create: {
            rate: 6.533,
            sourceCurrency: { connect: { id: 1 } },
            targetCurrency: { connect: { id: 5 } }
        }
    })

    console.log({ fx1, fx2, fx3, fx4, fx5 })

}

async function createWallets() {

    const wallet1 = await prisma.wallet.upsert({
        where: { id: "dd4da438-2f9b-474e-b54a-e7edfd135ce8" },
        update: {},
        create: {
            balance: 500.00,
            currencyId: 1
        }
    })

    const wallet2 = await prisma.wallet.upsert({
        where: { id: "ac48c1d5-1b7f-4f94-b3b8-f4773bfedc32" },
        update: {},
        create: {
            balance: 500000.00,
            currencyId: 2
        }
    })


    const wallet3 = await prisma.wallet.upsert({
        where: { id: "49c48e25-b4bf-4e17-9823-cd3e36ec3f0e" },
        update: {},
        create: {
            balance: 2300.00,
            currencyId: 4

        }
    })


    const wallet4 = await prisma.wallet.upsert({
        where: { id: "0e5f8d40-38c9-4d68-9245-35e6b801a8a8" },
        update: {},
        create: {
            balance: 1500.00,
            currencyId: 5

        }
    })

    const wallet5 = await prisma.wallet.upsert({
        where: { id: "dd4da438-2f9b-474e-b54a-e7edfd135ce8" },
        update: {},
        create: {
            balance: 8900.00,
            currencyId: 3
        }
    })
    console.log({ wallet1, wallet2, wallet3, wallet4, wallet5 })
}


async function main() {

    createCurrencies().then(() =>
        createExchangeRates().then(() =>
            createWallets())
    );






}

main()
    .catch((e) => {
        console.error(e)
        process.exit(1)
    }).finally(async () => { await prisma.$disconnect() })