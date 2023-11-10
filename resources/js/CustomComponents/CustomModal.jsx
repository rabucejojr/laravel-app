// src/EventModal.js
import React, { useState } from "react";
import { Button, Modal, TextField, Box } from "@mui/material";
import "./styles.css";
// Modal Styles
const styles = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
};
const CustomModal = ({ open, handleClose, handleAddEvent, title, date }) => {
    const [calendarValue, setCalendarValue] = useState({
        title: "",
        date: ""
    });
    // Submit event to api
    const handleAddEvent = (e, message) => {
        const api = "";
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
        <>
            <div id="modalContainer">
                <Modal sx={styles} open={open} onClose={handleClose}>
                    <div className="text-center">
                        <h2>Add Event</h2>
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
                                onClick={handleAddEvent}
                            >
                                Save
                            </Button>
                        </div>
                    </div>
                </Modal>
            </div>
        </>
    );
};

export default CustomModal;
