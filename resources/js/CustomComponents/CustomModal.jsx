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

    const handleSave = () => {
        if (title && date) {
            handleAddEvent({ title, date });
            handleClose();
        }
    };

    return (
        <>
            <div id="modalContainer">
                <Modal sx={styles} open={open} onClose={handleClose}>
                    <div className="text-center">
                        <h2>Add Event</h2>
                        <TextField
                            label="Title"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            fullWidth
                            variant="outlined"
                            margin="normal"
                        />
                        <TextField
                            label="Date (YYYY-MM-DD)"
                            value={date}
                            onChange={(e) => setDate(e.target.value)}
                            fullWidth
                            variant="outlined"
                            margin="normal"
                        />
                        <div id="btnDiv">
                            <Button
                                id="btn"
                                variant="contained"
                                color="primary"
                                onClick={handleSave}
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
