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
        getPaginationRowModel: getPaginationRowModel()
    })



    return (
        <>
            <table>
                <thead>
                    <tr>
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


                <tbody>
                    {table.getRowModel().rows.map((row) =>
                    (
                        <tr key={row.id}>

                            {row.getVisibleCells().map((cell) => (
                                <td key={cell.id}>
                                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                                </td>
                            ))}

                        </tr>
                    )
                    )}
                </tbody>
            </table>

        </>
    )
}




