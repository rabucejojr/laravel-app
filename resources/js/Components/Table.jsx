import React from "react";
import { useTable } from "react-table";

const TableComponent = () => {
    const data = React.useMemo(
        () => [
            { fileID: "01", filename: "John", description: "Doe", filepath: 25 },
            { fileID: "01", filename: "Jane", description: "Doe", filepath: 30 },
            { fileID: "01", filename: "James", description: "Smith", filepath: 35 },
            // Add more data rows as needed
        ],
        []
    );

    const columns = React.useMemo(
        () => [
            { Header: "UUID", accessor: "fileID" },
            { Header: "Filename", accessor: "filename" },
            { Header: "Description", accessor: "description" },
            { Header: "Filepath", accessor: "filepath" },
        ],
        []
    );

    const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
        useTable({
            columns,
            data,
        });

    return (
        <table {...getTableProps()} className="border-collapse border w-full">
            <thead>
                {headerGroups.map((headerGroup) => (
                    <tr
                        {...headerGroup.getHeaderGroupProps()}
                        className="bg-gray-100"
                    >
                        {headerGroup.headers.map((column) => (
                            <th
                                {...column.getHeaderProps()}
                                className="border p-2"
                            >
                                {column.render("Header")}
                            </th>
                        ))}
                    </tr>
                ))}
            </thead>
            <tbody {...getTableBodyProps()}>
                {rows.map((row) => {
                    prepareRow(row);
                    return (
                        <tr {...row.getRowProps()}>
                            {row.cells.map((cell) => (
                                <td
                                    {...cell.getCellProps()}
                                    className="border p-2 text-center"
                                >
                                    {cell.render("Cell")}
                                </td>
                            ))}
                        </tr>
                    );
                })}
            </tbody>
        </table>
    );
};

export default TableComponent;
