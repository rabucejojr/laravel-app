import React, { useState } from "react";
import { Box, InputAdornment, OutlinedInput, FormControl } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { useEffect } from "react";

export default function SearchBar() {
    const [data, setData] = useState([]);
    const [records, setRecords] = useState([]);

    useEffect(() => {
        axios
            .get("http://127.0.0.1:8000/api/data")
            .then((res) => {
                setData(res.data.data);
                console.log(data);
            })
            .catch((error) => {
                console.error(error);
            });
    }, []);

    return (
        <Box sx={{ display: "flex", flexWrap: "wrap" }}>
            <div>
                <FormControl sx={{ m: 1, width: "25ch" }} variant="outlined">
                    <OutlinedInput
                        id="outlined-adornment-weight"
                        endAdornment={
                            <InputAdornment position="end">
                                <SearchIcon />
                            </InputAdornment>
                        }
                        placeholder="Search test"
                    />
                </FormControl>
            </div>
        </Box>
    );
}
