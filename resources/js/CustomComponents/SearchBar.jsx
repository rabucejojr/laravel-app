import React, { useState } from "react";
import { Box, InputAdornment, OutlinedInput, FormControl } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { useEffect } from "react";

export default function SearchBar({onSearch}) {
    const [data, setData] = useState('');

const handleInputChange=(e)=>{
    setData(e.target.value);
}
const handleSearch=(e)=>{
    onSearch(data);
}

    return (
        <Box sx={{ display: "flex", flexWrap: "wrap" }}>
            <div>
                <FormControl sx={{ m: 1, width: "25ch" }} variant="outlined">
                    <OutlinedInput
                        id="outlined-adornment-weight"
                        endAdornment={
                            <InputAdornment
                            value={setData}
                            onChange={handleInputChange}
                            onClick={handleSearch}
                            position="end">
                                <SearchIcon />
                            </InputAdornment>
                        }
                        placeholder="Search"
                    />
                </FormControl>
            </div>
        </Box>
    );
}
