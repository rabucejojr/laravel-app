import React from "react";
import { useTable } from "react-table";

const TableComponent = () => {
    const data = React.useMemo(
        () => [
            { firstName: "John", lastName: "Doe", age: 25 },
            { firstName: "Jane", lastName: "Doe", age: 30 },
            { firstName: "James", lastName: "Smith", age: 35 },
            // Add more data rows as needed
        ],
        []
    );

    const columns = React.useMemo(
        () => [
            { Header: "First Name", accessor: "firstName" },
            { Header: "Last Name", accessor: "lastName" },
            { Header: "Age", accessor: "age" },
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
                                    className="border p-2"
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
