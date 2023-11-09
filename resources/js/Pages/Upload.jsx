import React, { useState } from "react";
import {
    Box,
    TextField,
    MenuItem,
    FormControl,
    Select,
    Button,
} from "@mui/material";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";
import { SimpleSnackbar } from "@/CustomComponents";

const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 380,
    bgcolor: "background.paper",
    borderRadius: "20px",
    boxShadow: 24,
    p: 4,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
};

const styles = {
    margin: "10px",
};

export default function Upload2({ auth }) {
    const [openSnackBar, setOpenSnackBar] = useState(false);
    const uploadMessage = "File saved successfully";

    // CREATE AN ARRAY OF VALUES FROM INPUTS
    const [values, setValues] = useState({
        filegroup: "SETUP", // default value if nothing is selected
        filename: "",
        description: "",
        location: "",
    });

    // SET VALUES
    function handleChange(e) {
        setValues({
            ...values,
            [e.target.name]: e.target.value,
        });
    }

    // SUBMIT/SAVE DATA
    const handleSubmit = (e, message) => {
        const api = "http://127.0.0.1:8000/api/save";
        e.preventDefault();
        setOpenSnackBar(true); // opens snackbar
        axios.post(api, values);
    };
    // close snackbar
    const handleClose = (event, reason) => {
        if (reason === "clickaway") {
            return;
        }
        setOpenSnackBar(false);
        // empty fields if snaclbar is closed
        setValues({
            filegroup: "SETUP", // default value if nothing is selected
            filename: "",
            description: "",
            location: "",
        });
    };

    return (
        <AuthenticatedLayout user={auth.user}>
            <Head title="Upload" />

            <Box sx={style}>
                <FormControl>
                    <Select
                        sx={styles}
                        id="filegroup"
                        name="filegroup"
                        value={values.filegroup}
                        onChange={handleChange}
                    >
                        <MenuItem value="SETUP">SETUP</MenuItem>
                        <MenuItem value="GIA">GIA</MenuItem>
                        <MenuItem value="OTHERS">OTHERS</MenuItem>
                    </Select>
                    <TextField
                        sx={styles}
                        type="text"
                        id="filename"
                        name="filename"
                        label="Filename"
                        placeholder="Filename"
                        value={values.filename}
                        onChange={handleChange}
                        variant="outlined"
                        required
                    />
                    <TextField
                        sx={styles}
                        id="description"
                        name="description"
                        label="Description"
                        value={values.description}
                        onChange={handleChange}
                        variant="outlined"
                        required
                    />
                    <TextField
                        sx={styles}
                        id="location"
                        name="location"
                        label="Location"
                        value={values.location}
                        onChange={handleChange}
                        variant="outlined"
                        required
                    />
                    <Button
                        sx={styles}
                        onClick={handleSubmit}
                        variant="contained"
                    >
                        SAVE
                    </Button>
                </FormControl>
            </Box>
            <SimpleSnackbar
                open={openSnackBar}
                anchorOrigin={{ vertical: "top", horizontal: "center" }}
                onClose={handleClose}
                severity="success"
                message={uploadMessage}
                vertical="bottom"
                horizontal="center"
            />
        </AuthenticatedLayout>
    );
}
