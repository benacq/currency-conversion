import { ColumnDef } from "@tanstack/react-table"
import { Transaction } from "../../core/types";


export const columns: ColumnDef<Transaction>[] = [
  {
    accessorKey: 'id',
    header: 'Trx ID',
    cell: ({ row }) => {
      return (
        <div className="text-sm">
          {row.getValue('id')}
        </div>
      );
    }
  },
  {
    accessorKey: 'type',
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
    header: 'Status',
    cell: ({ row }) => {
      return (
        <div>
          <span className="bg-green1 text-green2 inline-block px-2 rounded-full">
            <span className="h-[5px] w-[5px] bg-green2 rounded-full inline-block relative -top-[2px]"/> <span>{row.getValue('status')}</span>
          </span>
        </div>
      );
    }
  },
  {
    accessorKey: 'timestamp',
    header: 'Date',
    // cell: ({ row }) => {
    //   console.log(row)
    //   // return (
    //   //   <div>
    //   //     <span className="bg-green1 text-green2 inline-block px-2 rounded-full">
    //   //       <span className="h-[5px] w-[5px] bg-green2 rounded-full inline-block relative -top-[2px]"/> <span>{row.getValue('status')}</span>
    //   //     </span>
    //   //   </div>
    //   // );
    // }
  },
  
]





export const dummyTransactions: Transaction[] = [
  {
    id: '1',
    type: 'DEBIT',
    amount: '50.00',
    status: 'Completed',
    timestamp: '2024-01-13T12:30:00Z',
  },
  {
    id: '2',
    type: 'CREDIT',
    amount: '100.00',
    status: 'Pending',
    timestamp: '2024-01-13T14:45:00Z',
  },
  {
    id: '3',
    type: 'DEBIT',
    amount: '30.00',
    status: 'Failed',
    timestamp: '2024-01-14T08:15:00Z',
  },
  {
    id: '4',
    type: 'CREDIT',
    amount: '75.50',
    status: 'Completed',
    timestamp: '2024-01-15T20:00:00Z',
  },
  {
    id: '5',
    type: 'DEBIT',
    amount: '60.00',
    status: 'Pending',
    timestamp: '2024-01-16T09:30:00Z',
  },
  {
    id: '6',
    type: 'CREDIT',
    amount: '25.50',
    status: 'Completed',
    timestamp: '2024-01-17T18:45:00Z',
  },
  {
    id: '7',
    type: 'DEBIT',
    amount: '40.00',
    status: 'Failed',
    timestamp: '2024-01-18T11:00:00Z',
  },
  {
    id: '8',
    type: 'CREDIT',
    amount: '90.75',
    status: 'Pending',
    timestamp: '2024-01-19T15:20:00Z',
  },
  {
    id: '9',
    type: 'DEBIT',
    amount: '55.00',
    status: 'Completed',
    timestamp: '2024-01-20T22:10:00Z',
  },
  {
    id: '10',
    type: 'CREDIT',
    amount: '120.00',
    status: 'Pending',
    timestamp: '2024-01-21T16:30:00Z',
  },
];