import { useState } from "react";
import {
    Box,
    Button,
    Modal,
    FormControl,
    TextField,
    Select,
    MenuItem,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import axios from "axios";

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

const btnStyle = {
    // width: "200px",
};

const styles = {
    margin: "10px",
};

export default function Update({ row, onUpdate }) {
    //MODAL HOOKS
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    // TEXTFIELD INPUT HOOKS
    const id = row.values.id;
    const [filegroup, setFilegroup] = useState(row.values.filegroup);
    const [filename, setFilename] = useState(row.values.filename);
    const [description, setDescription] = useState(row.values.description);
    const [location, setLocation] = useState(row.values.location);

    // HOOKS FOR NEW DATA INPUTS
    const newData = {
        filegroup,
        filename,
        description,
        location,
    };

    // HANDLE UPDATE FUNCTION
    const handleUpdate = (e) => {
        // ADD NEW DATA THEN UPDATE VIA API PUT
        const api = `http://127.0.0.1:8000/api/update/${id}`;
        e.preventDefault();
        // AXIOS IS USED TO PREVENT A JSON RESPONSE
        // CREATED IN THE ROUTES, THIS CODE SENDS UPDATED
        // DATA AND FETCHED AUTOMATICALLY IN THE TABLE
        axios
            .put(api, newData)
            .then((response) => {
                console.log("Data updated successfully:", response.data);
                onUpdate(id, response.data.message);
                setOpen(false);
            })
            .catch((error) => {
                console.log("Error updating data:", error);
            });
    };

    return (
        <>
            <div>
                <Button style={btnStyle} onClick={handleOpen}>
                    <EditIcon />
                </Button>
                <FormControl>
                    <Modal
                        style={{ textAlign: "center" }}
                        open={open}
                        onClose={handleClose}
                        aria-labelledby="modal-modal-title"
                        aria-describedby="modal-modal-description"
                    >
                        <Box sx={style}>
                            <Select
                                sx={{ mt: 2, width: "250px" }}
                                id="filegroup"
                                name="filegroup"
                                value={filegroup} // for setting data to dropdown
                                onChange={(event) => {
                                    setFilegroup(event.target.value);
                                }}
                            >
                                <MenuItem value="SETUP">SETUP</MenuItem>
                                <MenuItem value="GIA">GIA</MenuItem>
                                <MenuItem value="OTHERS">OTHERS</MenuItem>
                            </Select>
                            <TextField
                                sx={{ mt: 2, width: "250px" }}
                                id="filename"
                                label="Filename"
                                variant="outlined"
                                value={filename}
                                onChange={(event) => {
                                    setFilename(event.target.value);
                                }}
                            />
                            <TextField
                                sx={{ mt: 2, width: "250px" }}
                                id="description"
                                label="Description"
                                variant="outlined"
                                value={description}
                                onChange={(event) => {
                                    setDescription(event.target.value);
                                }}
                            />
                            <TextField
                                sx={{ m: 2, width: "250px" }}
                                id="location"
                                label="Location"
                                variant="outlined"
                                value={location}
                                onChange={(event) => {
                                    setLocation(event.target.value);
                                }}
                            />
                            <Box>
                                <Button
                                    onClick={handleUpdate}
                                    variant="contained"
                                    sx={btnStyle}
                                >
                                    Update
                                </Button>
                            </Box>
                        </Box>
                    </Modal>
                </FormControl>
            </div>
        </>
    );
}
