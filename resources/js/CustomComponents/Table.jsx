import axios from "axios";
import React, { useEffect, useState } from "react";
import { useTable, useGlobalFilter } from "react-table";
import { Update, Delete, SimpleSnackbar } from "./index"; //Custom Components
import { TextField, Snackbar, Alert } from "@mui/material";


const TableComponent = () => {
    const [data, setData] = useState([]);
    const [openSnackBar, setOpenSnackBar] = useState(false);
    const [updateMessage, setUpdateMessage] = useState("");

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = () => {
        axios
            .get("http://127.0.0.1:8000/api/data")
            .then((response) => {
                setData(response.data.data);
            })
            .catch((error) => {
                console.error(error);
            });
    };

    const handleDelete = (id) => {
        console.log("Id being deleted: ", id);
        fetchData();
    };

    const handleUpdate = (id, message) => {
        console.log("Id being updated: ", id);
        setOpenSnackBar(true);
        setUpdateMessage(message);
        fetchData();
    };

    const handleClose = (event, reason) => {
        setOpenSnackBar(false);
    };

    const columns = React.useMemo(
        () => [
            { Header: "ID", accessor: "id" },
            { Header: "Category", accessor: "filegroup" },
            { Header: "Filename", accessor: "filename" },
            { Header: "Description", accessor: "description" },
            { Header: "File Location", accessor: "location" },
            {
                Header: "Actions",
                accessor: "actions",
                Cell: ({ row }) => (
                    <>
                        <Update row={row} onUpdate={handleUpdate} />
                        <Delete row={row} onDelete={handleDelete} />
                    </>
                ),
            },
        ],
        []
    );

    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow,
        state,
        setGlobalFilter,
    } = useTable(
        {
            columns,
            data,
        },
        useGlobalFilter
    );

    const { globalFilter } = state;

    const handleGlobalFilterChange = (e) => {
        const value = e.target.value || undefined;
        setGlobalFilter(value);
    };

    return (
        <>
            <div>
                <TextField
                    type="text"
                    value={globalFilter || ""}
                    onChange={handleGlobalFilterChange}
                    placeholder="Search..."
                    sx={{ paddingBottom: "10px" }}
                />
            </div>
            <table
                {...getTableProps()}
                className="border-collapse border w-full bg-gray-100"
            >
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
            {/* <Snackbar
                anchorOrigin={{ vertical: "top", horizontal: "center" }}
                open={openSnackBar}
                autoHideDuration={3000}
                onClose={handleClose}
            >
            <Alert>
                {updateMessage}
            </Alert>

            </Snackbar> */}
            <SimpleSnackbar open={openSnackBar}
                anchorOrigin={{ vertical: "top", horizontal: "center" }}
                onClose={handleClose}
                severity="success"
                message={updateMessage}
                vertical='top'
                horizontal='center' />
        </>
    );
};

export default TableComponent;
