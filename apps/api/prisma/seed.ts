import { PrismaClient } from "@prisma/client";


const prisma = new PrismaClient();






async function createCurrencies() {
    const currency1 = await prisma.currency.upsert({
        where: { id: 1 },
        update: {},
        create: {
            name: "Ghana Cedi",
            code: "GHS",
            symbol: "GH₵",
            flag: "https://flagsapi.com/GH/shiny/64.png"
        }
    })

    const currency2 = await prisma.currency.upsert({
        where: { id: 2 },
        update: {},
        create: {
            name: "Naira",
            code: "NGN",
            symbol: "₦",
            flag: "https://flagsapi.com/NG/shiny/64.png"
        }
    })

    const currency3 = await prisma.currency.upsert({
        where: { id: 3 },
        update: {},
        create: {
            name: "Kenyan Shilling",
            code: "KES",
            symbol: "KSh",
            flag: "https://flagsapi.com/KE/shiny/64.png"
        }
    })


    const currency4 = await prisma.currency.upsert({
        where: { id: 4 },
        update: {},
        create: {
            name: "United States Dollar",
            code: "USD",
            symbol: "$",
            flag: "https://flagsapi.com/US/shiny/64.png"
        }
    })


    const currency5 = await prisma.currency.upsert({
        where: { id: 5 },
        update: {},
        create: {
            name: "Euro",
            code: "EUR",
            symbol: "€",
            flag: "https://upload.wikimedia.org/wikipedia/commons/8/8b/Europe_flag_circle.png"
        }
    })

    console.log({ currency1, currency2, currency3, currency4 })

}



async function createExchangeRates() {
    const fxGH1 = await prisma.exchangeRate.upsert({
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

    const fxGH2 = await prisma.exchangeRate.upsert({
        where: {
            sourceCurrencyId_targetCurrencyId: {
                sourceCurrencyId: 1,
                targetCurrencyId: 2
            }
        },
        update: {},
        create: {
            rate: 80.04,
            sourceCurrency: { connect: { id: 1 } },
            targetCurrency: { connect: { id: 2 } }
        }
    })

    const fxGH3 = await prisma.exchangeRate.upsert({
        where: {
            sourceCurrencyId_targetCurrencyId: {
                sourceCurrencyId: 1,
                targetCurrencyId: 3
            }
        },
        update: {},
        create: {
            rate: 13.22,
            sourceCurrency: { connect: { id: 1 } },
            targetCurrency: { connect: { id: 3 } }
        }
    })

    const fxGH4 = await prisma.exchangeRate.upsert({
        where: {
            sourceCurrencyId_targetCurrencyId: {
                sourceCurrencyId: 1,
                targetCurrencyId: 4
            }
        },
        update: {},
        create: {
            rate: 0.084,
            sourceCurrency: { connect: { id: 1 } },
            targetCurrency: { connect: { id: 4 } }
        }
    })

    const fxGH5 = await prisma.exchangeRate.upsert({
        where: {
            sourceCurrencyId_targetCurrencyId: {
                sourceCurrencyId: 1,
                targetCurrencyId: 5
            }
        },
        update: {},
        create: {
            rate: 0.076,
            sourceCurrency: { connect: { id: 1 } },
            targetCurrency: { connect: { id: 5 } }
        }
    })
    console.log({ fxGH1, fxGH2, fxGH3, fxGH4, fxGH5 })




    const fxNG1 = await prisma.exchangeRate.upsert({
        where: {
            sourceCurrencyId_targetCurrencyId: {
                sourceCurrencyId: 2,
                targetCurrencyId: 1
            }
        },
        update: {},
        create: {
            rate: 1 / 80.04,
            sourceCurrency: { connect: { id: 2 } },
            targetCurrency: { connect: { id: 1 } }
        }
    })

    const fxNG2 = await prisma.exchangeRate.upsert({
        where: {
            sourceCurrencyId_targetCurrencyId: {
                sourceCurrencyId: 2,
                targetCurrencyId: 2
            }
        },
        update: {},
        create: {
            rate: 1,
            sourceCurrency: { connect: { id: 2 } },
            targetCurrency: { connect: { id: 2 } }
        }
    })

    const fxNG3 = await prisma.exchangeRate.upsert({
        where: {
            sourceCurrencyId_targetCurrencyId: {
                sourceCurrencyId: 2,
                targetCurrencyId: 3
            }
        },
        update: {},
        create: {
            rate: 0.17,
            sourceCurrency: { connect: { id: 2 } },
            targetCurrency: { connect: { id: 3 } }
        }
    })

    const fxNG4 = await prisma.exchangeRate.upsert({
        where: {
            sourceCurrencyId_targetCurrencyId: {
                sourceCurrencyId: 2,
                targetCurrencyId: 4
            }
        },
        update: {},
        create: {
            rate: 0.0010,
            sourceCurrency: { connect: { id: 2 } },
            targetCurrency: { connect: { id: 4 } }
        }
    })

    const fxNG5 = await prisma.exchangeRate.upsert({
        where: {
            sourceCurrencyId_targetCurrencyId: {
                sourceCurrencyId: 2,
                targetCurrencyId: 5
            }
        },
        update: {},
        create: {
            rate: 0.00095,
            sourceCurrency: { connect: { id: 2 } },
            targetCurrency: { connect: { id: 5 } }
        }
    })

    console.log({ fxNG1, fxNG2, fxNG3, fxNG4, fxNG5 })




    const fxKES1 = await prisma.exchangeRate.upsert({
        where: {
            sourceCurrencyId_targetCurrencyId: {
                sourceCurrencyId: 3,
                targetCurrencyId: 1
            }
        },
        update: {},
        create: {
            rate: 1 / 13.22,
            sourceCurrency: { connect: { id: 3 } },
            targetCurrency: { connect: { id: 1 } }
        }
    })

    const fxKES2 = await prisma.exchangeRate.upsert({
        where: {
            sourceCurrencyId_targetCurrencyId: {
                sourceCurrencyId: 3,
                targetCurrencyId: 2
            }
        },
        update: {},
        create: {
            rate: 1 / 0.17,
            sourceCurrency: { connect: { id: 3 } },
            targetCurrency: { connect: { id: 2 } }
        }
    })

    const fxKES3 = await prisma.exchangeRate.upsert({
        where: {
            sourceCurrencyId_targetCurrencyId: {
                sourceCurrencyId: 3,
                targetCurrencyId: 3
            }
        },
        update: {},
        create: {
            rate: 1,
            sourceCurrency: { connect: { id: 3 } },
            targetCurrency: { connect: { id: 3 } }
        }
    })

    const fxKES4 = await prisma.exchangeRate.upsert({
        where: {
            sourceCurrencyId_targetCurrencyId: {
                sourceCurrencyId: 3,
                targetCurrencyId: 4
            }
        },
        update: {},
        create: {
            rate: 0.0063,
            sourceCurrency: { connect: { id: 3 } },
            targetCurrency: { connect: { id: 4 } }
        }
    })

    const fxKES5 = await prisma.exchangeRate.upsert({
        where: {
            sourceCurrencyId_targetCurrencyId: {
                sourceCurrencyId: 3,
                targetCurrencyId: 5
            }
        },
        update: {},
        create: {
            rate: 0.0058,
            sourceCurrency: { connect: { id: 3 } },
            targetCurrency: { connect: { id: 5 } }
        }
    })

    console.log({ fxKES1, fxKES2, fxKES3, fxKES4, fxKES5 })






    const fxUSD1 = await prisma.exchangeRate.upsert({
        where: {
            sourceCurrencyId_targetCurrencyId: {
                sourceCurrencyId: 4,
                targetCurrencyId: 1
            }
        },
        update: {},
        create: {
            rate: 1 / 0.084,
            sourceCurrency: { connect: { id: 4 } },
            targetCurrency: { connect: { id: 1 } }
        }
    })

    const fxUSD2 = await prisma.exchangeRate.upsert({
        where: {
            sourceCurrencyId_targetCurrencyId: {
                sourceCurrencyId: 4,
                targetCurrencyId: 2
            }
        },
        update: {},
        create: {
            rate: 1 / 0.0010,
            sourceCurrency: { connect: { id: 4 } },
            targetCurrency: { connect: { id: 2 } }
        }
    })

    const fxUSD3 = await prisma.exchangeRate.upsert({
        where: {
            sourceCurrencyId_targetCurrencyId: {
                sourceCurrencyId: 4,
                targetCurrencyId: 3
            }
        },
        update: {},
        create: {
            rate: 1 / 0.0063,
            sourceCurrency: { connect: { id: 4 } },
            targetCurrency: { connect: { id: 3 } }
        }
    })

    const fxUSD4 = await prisma.exchangeRate.upsert({
        where: {
            sourceCurrencyId_targetCurrencyId: {
                sourceCurrencyId: 4,
                targetCurrencyId: 4
            }
        },
        update: {},
        create: {
            rate: 1,
            sourceCurrency: { connect: { id: 4 } },
            targetCurrency: { connect: { id: 4 } }
        }
    })

    const fxUSD5 = await prisma.exchangeRate.upsert({
        where: {
            sourceCurrencyId_targetCurrencyId: {
                sourceCurrencyId: 4,
                targetCurrencyId: 5
            }
        },
        update: {},
        create: {
            rate: 0.91,
            sourceCurrency: { connect: { id: 4 } },
            targetCurrency: { connect: { id: 5 } }
        }
    })

    console.log({ fxUSD1, fxUSD2, fxUSD3, fxUSD4, fxUSD5 })






    const fxEUR1 = await prisma.exchangeRate.upsert({
        where: {
            sourceCurrencyId_targetCurrencyId: {
                sourceCurrencyId: 5,
                targetCurrencyId: 1
            }
        },
        update: {},
        create: {
            rate: 1 / 0.076,
            sourceCurrency: { connect: { id: 5 } },
            targetCurrency: { connect: { id: 1 } }
        }
    })

    const fxEUR2 = await prisma.exchangeRate.upsert({
        where: {
            sourceCurrencyId_targetCurrencyId: {
                sourceCurrencyId: 5,
                targetCurrencyId: 2
            }
        },
        update: {},
        create: {
            rate: 1 / 0.00095,
            sourceCurrency: { connect: { id: 5 } },
            targetCurrency: { connect: { id: 2 } }
        }
    })

    const fxEUR3 = await prisma.exchangeRate.upsert({
        where: {
            sourceCurrencyId_targetCurrencyId: {
                sourceCurrencyId: 5,
                targetCurrencyId: 3
            }
        },
        update: {},
        create: {
            rate: 1 / 0.0058,
            sourceCurrency: { connect: { id: 5 } },
            targetCurrency: { connect: { id: 3 } }
        }
    })

    const fxEUR4 = await prisma.exchangeRate.upsert({
        where: {
            sourceCurrencyId_targetCurrencyId: {
                sourceCurrencyId: 5,
                targetCurrencyId: 4
            }
        },
        update: {},
        create: {
            rate: 1 / 0.91,
            sourceCurrency: { connect: { id: 5 } },
            targetCurrency: { connect: { id: 4 } }
        }
    })

    const fxEUR5 = await prisma.exchangeRate.upsert({
        where: {
            sourceCurrencyId_targetCurrencyId: {
                sourceCurrencyId: 5,
                targetCurrencyId: 5
            }
        },
        update: {},
        create: {
            rate: 1,
            sourceCurrency: { connect: { id: 5 } },
            targetCurrency: { connect: { id: 5 } }
        }
    })

    console.log({ fxEUR1, fxEUR2, fxEUR3, fxEUR4, fxEUR5 })

}

async function createWallets() {

    const wallet1 = await prisma.wallet.upsert({
        where: { id: "dd4da438-2f9b-474e-b54a-e7edfd135ce8" },
        update: {},
        create: {
            balance: 545200.00,
            currencyId: 1
        }
    })

    const wallet2 = await prisma.wallet.upsert({
        where: { id: "ac48c1d5-1b7f-4f94-b3b8-f4773bfedc32" },
        update: {},
        create: {
            balance: 45500000.00,
            currencyId: 2
        }
    })


    const wallet3 = await prisma.wallet.upsert({
        where: { id: "49c48e25-b4bf-4e17-9823-cd3e36ec3f0e" },
        update: {},
        create: {
            balance: 432300.00,
            currencyId: 4

        }
    })

    const wallet4 = await prisma.wallet.upsert({
        where: { id: "0e5f8d40-38c9-4d68-9245-35e6b801a8a8" },
        update: {},
        create: {
            balance: 134500.00,
            currencyId: 5

        }
    })

    const wallet5 = await prisma.wallet.upsert({
        where: { id: "dd4da438-2f9b-474e-b54a-e7edfd135ce8" },
        update: {},
        create: {
            balance: 83900.00,
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