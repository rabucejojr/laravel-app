import axios from "axios";
import React, { useEffect, useState } from "react";
import { useTable } from "react-table";
import EditModal from "./EditModal";
import { Button } from "@mui/material";
import DeleteModal from "./DeleteModal";

const TableComponent = () => {
    const [data, setData] = useState([]);
    useEffect(() => {
        axios
            .get("http://127.0.0.1:8000/api/data")
            .then((response) => {
                setData(response.data);
            })
            .catch((error) => {
                alert(error);
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
                Header: "Actions",
                accessor: "actions",
                Cell: ({row}) => (
                    <>
                        <EditModal row={row}/>
                        <DeleteModal />
                    </>
                ),
            },
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
