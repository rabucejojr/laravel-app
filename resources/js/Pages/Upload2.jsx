import React, {useState} from "react";
import {
    Box,
    TextField,
    InputLabel,
    MenuItem,
    FormControl,
    Select,
    Grid,
} from "@mui/material";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";

const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
    pb: 4,
    margin: "normal",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
};
export default function Upload2({ auth }) {
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
    }
    return (
        <AuthenticatedLayout user={auth.user}>
            <Head title="Upload" />

            <Box sx={style}>
                <FormControl>
                    <InputLabel id="demo-simple-select-label">Group</InputLabel>
                    <Select
                        id="filegroup"
                        name="filegroup"
                        value={values.filegroup}
                        label="Group"
                        onChange={handleChange}
                    >
                        <MenuItem value="SETUP">SETUP</MenuItem>
                        <MenuItem value="GIA">GIA</MenuItem>
                        <MenuItem value="OTHERS">OTHERS</MenuItem>
                    </Select>
                    <TextField
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
                        id="description"
                        name="description"
                        label="Description"
                        value={values.description}
                        onChange={handleChange}
                        variant="outlined"
                        required
                    />
                    <TextField
                        id="location"
                        name="location"
                        label="Location"
                        value={values.location}
                        onChange={handleChange}
                        variant="outlined"
                        required
                    />
                </FormControl>
            </Box>
        </AuthenticatedLayout>
    );
}
