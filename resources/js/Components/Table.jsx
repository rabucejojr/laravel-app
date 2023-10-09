import axios from "axios";
import React, { useEffect, useState } from "react";
import { useTable } from "react-table";

const TableComponent = () => {
    const [data, setData] = useState([]);
    useEffect(() => {
        axios.get('http://127.0.0.1:8000/api/data')
            .then(response => {
                setData(response.data);
                console.log(data);
            })
            .catch(error => {
                console.log(error);
            });
    }, []);

    const columns = React.useMemo(
        () => [
            { Header: "ID", accessor: "id" },
            { Header: "Group", accessor: "filegroup" },
            { Header: "Filename", accessor: "filename" },
            { Header: "Description", accessor: "description" },
            { Header: "File Location", accessor: "location" },
            {
                Header: 'Actions',
                accessor: 'actions',
                Cell: ({ row }) => (
                    <div className="space-x-5">
                        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={() => handleEdit(row)}>Edit</button>
                        <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded" onClick={() => handleDelete(row)}>Delete</button>
                    </div>
                ),
            },

        ],
        []
    );
    const handleEdit = (row) => {
        alert('Edit')
    };

    const handleDelete = (row) => {
        alert('Delete')
    };
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
                        className="bg-blue-300"
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
