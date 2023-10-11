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
    margin: "5px",
    width: "10px",
};
export default function EditModal() {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <div>
            <Button style={btnStyle} onClick={handleOpen}>
                <EditIcon />
            </Button>
            <Modal
            style={{textAlign:'center'}}
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    {/* <Typography
                        id="modal-modal-title"
                        variant="h6"
                        component="h2"
                    >
                        Update File Info
                    </Typography> */}
                    <TextField
                        sx={{ mt: 2, width:'250px' }}
                        id="standard-basic"
                        label="Filename"
                        variant="outlined"
                    />
                    <TextField
                        sx={{ mt: 2, width:'250px' }}
                        id="standard-basic"
                        label="Description"
                        variant="outlined"
                    />
                    <TextField
                        sx={{ mt: 2, width:'250px' }}
                        id="standard-basic"
                        label="Location"
                        variant="outlined"
                    />
                </Box>
            </Modal>
        </div>
    );
}
