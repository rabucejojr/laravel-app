import * as React from "react";
import { Box, InputAdornment, OutlinedInput, FormControl } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

export default function SearchBar() {
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
                        placeholder="Search"
                    />
                </FormControl>
            </div>
        </Box>
    );
}
