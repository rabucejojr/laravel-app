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

export default function DeleteModal({ row }) {
    const [id, setId] = useState(row.values.id);
    const [loading, setLoading] = useState(false);
    // const handleDelete =()=>{
    //     axios
    //         .delete(`http://127.0.0.1:8000/api/delete/${id}`)
    //         .then((response) => {
    //             console.log(response.data);
    //             setLoading(true);
    //         })
    //         .catch((error) => {
    //             console.error("Error deleting item:", error);
    //             setLoading(false);
    //         });
    // };

    console.log(loading);
    const handleDelete = () => {
        setLoading(true);
        // DELETE
        axios
            .delete(`http://127.0.0.1:8000/api/delete/${id}`)
            .then((response) => {
                // console.log(response.data);
                setLoading(false);
            })
            .catch((error) => {
                console.error("Error deleting item:", error);
                setLoading(false);
            });
        console.log(loading);
    };

    return (
        <div>
            <Button style={btnStyle} onClick={handleDelete}>
                <DeleteIcon />
                {loading && <CircularProgress size={20} />}
            </Button>
        </div>
    );
}
