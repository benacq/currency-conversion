import { ColumnDef } from "@tanstack/react-table"
import { Transaction } from "../../core/types";
import moment from 'moment';


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
    cell: ({ row }) => {
      const amount: string = row.getValue("amount");

      return `${row.getValue("currencyCode")} ${parseFloat(amount).toLocaleString()}`;
    }
  },
  {
    accessorKey: 'status',
    header: 'Status',
    cell: ({ row }) => {
      return (
        <div>
          <span className="bg-green1 text-green2 inline-block px-2 rounded-full">
            <span className="h-[5px] w-[5px] bg-green2 rounded-full inline-block relative -top-[2px]" /> <span>{row.getValue('status')}</span>
          </span>
        </div>
      );
    }
  },
  {
    accessorKey: 'timestamp',
    header: 'Date',
    cell: ({ row }) => {
      return moment(row.getValue('timestamp')).format('MM/DD/YYYY')
    }
  },

  {
    accessorKey: 'currencyCode',
    header: 'Currency',
  },

]


