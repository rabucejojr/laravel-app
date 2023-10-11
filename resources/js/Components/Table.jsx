import axios from "axios";
import React, { useEffect, useState } from "react";
import { useTable } from "react-table";
import TableModal from "./TableModal";
import { Button } from "@mui/material";
import styled from "@emotion/styled";

const TableComponent = () => {
    const [data, setData] = useState([]);
    // Modal
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    useEffect(() => {
        axios
            .get("http://127.0.0.1:8000/api/data")
            .then((response) => {
                setData(response.data);
                console.log(data);
            })
            .catch((error) => {
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
                Cell: () => (
                    <div className="space-x-5">
                        <Button
                            variant="contained"
                            color="primary"
                            onClick={handleOpen}
                        >
                            Edit
                        </Button>
                        {/* Modal goes here... */}
                        <Button variant="contained" color="secondary"
                        onClick={handleDelete}>
                            Delete
                        </Button>
                        
                    </div>
                ),
            },
        ],
        []
    );

    const handleDelete = () => {
        // alert("Delete");
        alert("here here");
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
