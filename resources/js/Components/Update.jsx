import { useState, useEffect } from "react";
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
import { router } from "@inertiajs/react";

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
        const api = `http://127.0.0.1:8000/api/update/id`;
        e.preventDefault();
        // console.log(newData);
        router.put(api, newData);
    }
    // function handleChange(e) {
    //     setNewData({
    //         ...newData,
    //         [e.target.name]: e.target.value,
    //     });
    //     console.log(newData);
    // }

    useEffect((e) => {
        // Update newData state when formData changes
        setNewData({
          ...newData,
          [e.target.name]: e.target.value,
        });
      }, [newData]);
    

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = () => {
        axios
            .get("http://127.0.0.1:8000/api/data")
            .then((response) => {
                setNewData(response.data.data);
            })
            .catch((error) => {
                console.error(error);
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
                            <TextField
                                sx={{ mt: 2, width: "100px" }}
                                id="id"
                                label="Unique ID"
                                variant="outlined"
                                value={id}
                                disabled
                            />
                            <Select
                                sx={{ mt: 2, width: "250px" }}
                                id="filegroup"
                                name="filegroup"
                                value={filegroup} // for setting data to dropdown
                                onChange={(event)=>{
                                    setFilegroup(event.target.value)
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
                                    variant="contained"
                                    sx={btnStyle}
                                    onClick={handleUpdate}
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
