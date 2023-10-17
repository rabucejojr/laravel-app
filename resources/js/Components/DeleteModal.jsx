import { useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import DeleteIcon from "@mui/icons-material/Delete";
import CircularProgress from "@mui/material/CircularProgress";
import Table from "./Table";

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
    width: "20px",
};

export default function DeleteModal({ row, onDelete }) {
    // const [id, setId] = useState(row.values.id);
    const id = row.values.id;
    const [loading, setLoading] = useState(false);

    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const handleDelete = () => {
        setLoading(true);
        axios
            .delete(`http://127.0.0.1:8000/api/delete/${id}`)
            .then((response) => {
                onDelete(id);
                setLoading(false);
                setOpen(false);
            })
            .catch((error) => {
                console.error("Error deleting item:", error);
                setLoading(false);
                setOpen(false);
            });
    };

    return (
        <div>
            <Button style={btnStyle} onClick={handleOpen}>
                <DeleteIcon />
                {loading && <CircularProgress size={20} />}
            </Button>

            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Typography
                        id="modal-modal-title"
                        variant="h6"
                        component="h2"
                    >
                        Delete
                    </Typography>
                    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                        Are you sure you want to delete this item?
                    </Typography>
                    <div>
                        <Button onClick={handleDelete} color="primary">
                            Delete
                        </Button>
                        <Button onClick={handleClose} color="secondary">
                            Cancel
                        </Button>
                    </div>
                </Box>
            </Modal>
        </div>
    );
}
