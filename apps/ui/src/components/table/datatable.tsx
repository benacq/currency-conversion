import { ColumnDef, flexRender, getCoreRowModel, useReactTable } from "@tanstack/react-table";

interface DataTableProps<TData, TValue> {
    columns: ColumnDef<TData, TValue>[]
    data: TData[]
}

export function DataTable<TData, TValue>({ columns, data }: DataTableProps<TData, TValue>) {
    const table = useReactTable({
        data,
        columns,
        getCoreRowModel: getCoreRowModel(),
        // getPaginationRowModel: getPaginationRowModel()
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
                        <tr key={row.id} className="[&>td]:px-6 [&>td]:py-4 text-xsm !border-b">

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
                <div>page no</div>
                <div className="flex">
                    <button>
                        Previous
                    </button>
                    <button>
                        Next
                    </button>
                </div>
            </div>

        </>
    )
}




