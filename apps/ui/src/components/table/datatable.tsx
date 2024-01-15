import { ColumnDef, flexRender, getCoreRowModel, getPaginationRowModel, useReactTable } from "@tanstack/react-table";

interface DataTableProps<TData, TValue> {
    columns: ColumnDef<TData, TValue>[]
    data: TData[]
}

export function DataTable<TData, TValue>({ columns, data }: DataTableProps<TData, TValue>) {
    const table = useReactTable({
        data,
        columns,
        getCoreRowModel: getCoreRowModel(),
        getPaginationRowModel: getPaginationRowModel(),
        initialState:{
            columnVisibility: {"currencyCode": false}
        }
    })


    return (
        <>
            <table className="min-w-full divide-y divide-gray-200">
                <thead>
                    <tr className="[&>th]:text-start [&>th]:px-6 [&>th]:py-4 border-t text-xxsm text-gray2">
                        {table.getHeaderGroups()[0].headers.map((header) => (
                            <th key={header.id}>
                                {header.isPlaceholder
                                    ? null
                                    : flexRender(header.column.columnDef.header, header.getContext())
                                }
                            </th>
                        ))}
                    </tr>
                </thead>


                <tbody className="divide-y divide-gray-200">
                    {table.getRowModel().rows.map((row) =>
                    (
                        <tr key={row.id} className="[&>td]:px-6 [&>td]:py-4 text-xsm text-gray3 !border-b">

                            {row.getVisibleCells().map((cell) => (
                                <td key={cell.id}>
                                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                                </td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>

            <div className="flex justify-between px-5 mt-6">
                <div>Page 1 of 10</div>
                <div className="flex gap-3">
                    <button className="border py-1 px-3 rounded-lg">
                        Previous
                    </button>
                    <button className="border py-1 px-3 rounded-lg">
                        Next
                    </button>
                </div>
            </div>

        </>
    )
}




