import React, { useState } from "react";
import {
    Box,
    TextField,
    InputLabel,
    MenuItem,
    FormControl,
    Select,
    Grid,
    Button,
    Backdrop,
    CircularProgress
} from "@mui/material";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, router } from "@inertiajs/react";
import Modal from "@/Components/Modal";

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
    const [success, setSuccess] = useState(false);
    // CREATE AN ARRAY OF VALUES FROM INPUTS
    const [values, setValues] = useState({
        filegroup: "SETUP",
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
    function handleSubmit(e) {
        const api = "http://127.0.0.1:8000/api/save";
        e.preventDefault();
        console.log(values);
        router.post(api, values);
        loading();
    }
    function loading() {
        <Backdrop
            sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
            open
        >
            <CircularProgress color="inherit" />
        </Backdrop>;
    }

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
        </AuthenticatedLayout>
    );
}
