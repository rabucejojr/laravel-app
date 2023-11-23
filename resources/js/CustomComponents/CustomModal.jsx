// src/EventModal.js
import React, { useState } from "react";
import { Button, Modal, TextField, Box } from "@mui/material";
import "./styles.css";
import axios from "axios";
import { SimpleSnackbar } from ".";

// Modal Styles
const styles = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    // bgcolor: 'background.paper',
    p: 4,

};
const style= {
        padding:'10px',
}
// snackbar
const close = (event, reason) => {
    if (reason === "clickaway") {
        return;
    }
    setOpenSnackBar(false);
    // empty fields if snaclbar is closed
    setValues({
        title: "", // default value if nothing is selected
        date: "",
    });
};
const CustomModal = ({ open, handleClose, handleAddEvent, title, date, clickedDate }) => {
    const [calendarValue, setCalendarValue] = useState({
        title: "",
        date: clickedDate,
    });
    const [openSnackBar, setOpenSnackBar] = useState(false);
    const eventMessage = "Event saved successfully";
    // Submit event to api
    const handleSubmit = (e, message) => {
        // const api = "http://127.0.0.1:8000/api/events/save";
        // axios.post(api, calendarValue);
        e.preventDefault();
        console.log(calendarValue);
    };

    // SET VALUES
    function handleChange(e) {
        setCalendarValue({
            ...calendarValue,
            [e.target.name]: e.target.value,
        });
    }

    return (
        <div id="container">
            <div id="modalContainer">
                <Modal sx={styles} open={open} onClose={handleClose}>
                    <div className="text-center">
                        <TextField
                            label="Title"
                            id='title'
                            name="title"
                            value={calendarValue.title}
                            onChange={handleChange}
                            fullWidth
                            variant="outlined"
                            margin="normal"
                        />
                        <TextField
                            label="Date (YYYY-MM-DD)"
                            id='date'
                            name="date"
                            value={calendarValue.date}
                            onChange={handleChange}
                            fullWidth
                            variant="outlined"
                            margin="normal"
                        />
                        <div id="btnDiv">
                            <Button
                                id="btn"
                                variant="contained"
                                color="primary"
                                onClick={handleSubmit}
                            >
                                Save
                            </Button>
                        </div>
                    </div>
                </Modal>
                <SimpleSnackbar
                    anchorOrigin={{ vertical: "top", horizontal: "center" }}
                    open={openSnackBar}
                    onClose={close}
                    severity="success"
                    message={eventMessage}
                />
            </div>
        </div>
    );
};

export default CustomModal;
