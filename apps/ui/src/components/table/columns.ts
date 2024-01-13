import { ColumnDef } from "@tanstack/react-table"

export type Transaction = {
    transactionId: string;
    transactionType: 'Debit' | 'Credit'
    amount: string;
    status: string;
    date: string;
}

export const columns: ColumnDef<Transaction>[] = [
    {
        accessorKey: 'transactionId',
        header: 'Trx ID'
    },
    {
        accessorKey: 'transactionType',
        header: 'Trx Type'
    },
    {
        accessorKey: 'amount',
        header: 'Amount',
        // cell: ({ row }) => {
        //     const amountCol = (row.getValue('amount') as string).split(" ");
        //     const amount = parseFloat(amountCol[1])
        //     const formatted = new Intl.NumberFormat('en-US', {
        //         style: "currency"
        //     }).format(amount)

        //     return `${amountCol[0]} ${formatted}`;
        // }
    },
    {
        accessorKey: 'status',
        header: 'Status'
    },
    {
        accessorKey: 'date',
        header: 'Date'
    },
]





export const dummyTransactions: Transaction[] = [
    {
      transactionId: '1',
      transactionType: 'Debit',
      amount: '50.00',
      status: 'Completed',
      date: '2024-01-13T12:30:00Z',
    },
    {
      transactionId: '2',
      transactionType: 'Credit',
      amount: '100.00',
      status: 'Pending',
      date: '2024-01-13T14:45:00Z',
    },
    {
      transactionId: '3',
      transactionType: 'Debit',
      amount: '30.00',
      status: 'Failed',
      date: '2024-01-14T08:15:00Z',
    },
    {
      transactionId: '4',
      transactionType: 'Credit',
      amount: '75.50',
      status: 'Completed',
      date: '2024-01-15T20:00:00Z',
    },
    {
      transactionId: '5',
      transactionType: 'Debit',
      amount: '60.00',
      status: 'Pending',
      date: '2024-01-16T09:30:00Z',
    },
    {
      transactionId: '6',
      transactionType: 'Credit',
      amount: '25.50',
      status: 'Completed',
      date: '2024-01-17T18:45:00Z',
    },
    {
      transactionId: '7',
      transactionType: 'Debit',
      amount: '40.00',
      status: 'Failed',
      date: '2024-01-18T11:00:00Z',
    },
    {
      transactionId: '8',
      transactionType: 'Credit',
      amount: '90.75',
      status: 'Pending',
      date: '2024-01-19T15:20:00Z',
    },
    {
      transactionId: '9',
      transactionType: 'Debit',
      amount: '55.00',
      status: 'Completed',
      date: '2024-01-20T22:10:00Z',
    },
    {
      transactionId: '10',
      transactionType: 'Credit',
      amount: '120.00',
      status: 'Pending',
      date: '2024-01-21T16:30:00Z',
    },
  ];