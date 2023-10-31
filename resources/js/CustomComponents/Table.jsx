import axios from "axios";
import React, { useEffect, useState } from "react";
import { useTable } from "react-table";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";

import { Update, Delete, SearchBar } from "./index"; //Custom Components

const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

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
            { Header: "Group", accessor: "filegroup" },
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

    const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
        useTable({
            columns,
            data,
        });

    return (
        <>
            <div className="p-2">
                <div className="sm:px-6 lg:px-2">
                    <div className="overflow-hidden sm:rounded-lg">
                        <SearchBar />
                    </div>
                </div>
            </div>
            <table
                {...getTableProps()}
                className="border-collapse border w-full"
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
            <Snackbar
                anchorOrigin={{ vertical: "top", horizontal: "center" }}
                open={openSnackBar}
                autoHideDuration={2000}
                onClose={handleClose}
            >
                <Alert
                    onClose={handleClose}
                    severity="success"
                    sx={{ width: "100%" }}
                >
                    {updateMessage}
                </Alert>
            </Snackbar>
        </>
    );
};

export default TableComponent;
