import { useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import EditIcon from "@mui/icons-material/Edit";
import { TextField } from "@mui/material";

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
};
const btnStyle = {
    // width: "200px",
};
export default function EditModal({ row }) {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const [filename, setFilename] = useState(row.values.filename);
    const [description, setDescription] = useState(row.values.description);
    const [location, setLocation] = useState(row.values.location);

    return (
        <>
            <form type="submit">
                <div>
                    <Button style={btnStyle} onClick={handleOpen}>
                        <EditIcon />
                    </Button>
                    <Modal
                        style={{ textAlign: "center" }}
                        open={open}
                        onClose={handleClose}
                        aria-labelledby="modal-modal-title"
                        aria-describedby="modal-modal-description"
                    >
                        <Box sx={style}>
                            <TextField
                                sx={{ mt: 2, width: "250px" }}
                                id="standard-basic"
                                label="Filename"
                                variant="outlined"
                                value={filename}
                                onChange={(event) => {
                                    setFilename(event.target.value);
                                    console.log(filename);
                                }}
                            />
                            <TextField
                                sx={{ mt: 2, width: "250px" }}
                                id="standard-basic"
                                label="Description"
                                variant="outlined"
                                value={description}
                                onChange={(event) => {
                                    setDescription(event.target.value);
                                    console.log(description);
                                }}
                            />
                            <TextField
                                sx={{ m: 2, width: "250px" }}
                                id="standard-basic"
                                label="Location"
                                variant="outlined"
                                value={location}
                                onChange={(event) => {
                                    setLocation(event.target.value);
                                    console.log(location);
                                }}
                            />
                            <Box>
                                <Button variant="contained" sx={btnStyle}>
                                    Update
                                </Button>
                            </Box>
                        </Box>
                    </Modal>
                </div>
            </form>
        </>
    );
}
