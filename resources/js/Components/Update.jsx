import { useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import EditIcon from "@mui/icons-material/Edit";
import { TextField } from "@mui/material";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";

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
export default function Update({ row }) {
    //MODAL HOOKS
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    // TEXTFIELD INPUT HOOKS
    const [id, setId] = useState(row.values.id);
    const [filegroup, setFilegroup] = useState(row.values.filegroup);
    const [filename, setFilename] = useState(row.values.filename);
    const [description, setDescription] = useState(row.values.description);
    const [location, setLocation] = useState(row.values.location);
    // HOOKS FOR NEW DATA INPUTS
    const [newData, setNewData] = useState({
        filegroup: filegroup,
        filename: filename,
        description: description,
        location: location,
    });
    // HANDLE SAVE FUNC
    function handleUpdate(e) {
        const api = `http://127.0.0.1:8000/api/update/{$id}`;
        e.preventDefault();
        // console.log(newData);
        router.put(api, newData);
    }
    function handleChange(e) {
        setNewData({
            ...newData,
            [e.target.name]: e.target.value,
        });
        console.log(newData);
    }


    return (
        <>
            <div>
                <Button style={btnStyle} onClick={handleOpen}>
                    <EditIcon />
                </Button>
                <form onSubmit={handleUpdate}>
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
                                onChange={handleChange}
                            >
                                <MenuItem value="SETUP">SETUP</MenuItem>
                                <MenuItem value="GIA">GIA</MenuItem>
                                <MenuItem value="OTHERS">OTHERS</MenuItem>
                            </Select>
                            <TextField
                                sx={{ mt: 2, width: "250px" }}
                                id="standard-basic"
                                label="Filename"
                                variant="outlined"
                                value={filename}
                                onChange={(event) => {
                                    setFilename(event.target.value);
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
                                }}
                            />
                            <Box>
                                <Button variant="contained" sx={btnStyle}>
                                    Update
                                </Button>
                            </Box>
                        </Box>
                    </Modal>
                </form>
            </div>
        </>
    );
}
