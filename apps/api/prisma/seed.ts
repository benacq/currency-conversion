import { PrismaClient } from "@prisma/client";


const prisma = new PrismaClient();

async function main() {
    const wallet1 = await prisma.wallet.upsert({
        where: { id: 1 },
        update: {},
        create: {
            balance: 500.00,
            currencyCode: "GHS"
        }
    })

    const wallet2 = await prisma.wallet.upsert({
        where: { id: 2 },
        update: {},
        create: {
            balance: 500000.00,
            currencyCode: "NGN"
        }
    })


    const wallet3 = await prisma.wallet.upsert({
        where: { id: 3 },
        update: {},
        create: {
            balance: 2300.00,
            currencyCode: "USD"
        }
    })


    const wallet4 = await prisma.wallet.upsert({
        where: { id: 4 },
        update: {},
        create: {
            balance: 1500.00,
            currencyCode: "EUR"
        }
    })

    console.log({ wallet1, wallet2, wallet3, wallet4 })

}

main()
    .catch((e) => {
        console.error(e)
        process.exit(1)
    }).finally(async () => { await prisma.$disconnect() })