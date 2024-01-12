import { PrismaClient } from "@prisma/client";


const prisma = new PrismaClient();

async function main() {
    const wallet1 = await prisma.wallet.upsert({
        where: { id: "dd4da438-2f9b-474e-b54a-e7edfd135ce8" },
        update: {},
        create: {
            balance: 500.00,
            currencyCode: "GHS"
        }
    })

    const wallet2 = await prisma.wallet.upsert({
        where: { id: "ac48c1d5-1b7f-4f94-b3b8-f4773bfedc32" },
        update: {},
        create: {
            balance: 500000.00,
            currencyCode: "NGN"
        }
    })


    const wallet3 = await prisma.wallet.upsert({
        where: { id: "49c48e25-b4bf-4e17-9823-cd3e36ec3f0e" },
        update: {},
        create: {
            balance: 2300.00,
            currencyCode: "USD"
        }
    })


    const wallet4 = await prisma.wallet.upsert({
        where: { id: "0e5f8d40-38c9-4d68-9245-35e6b801a8a8" },
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