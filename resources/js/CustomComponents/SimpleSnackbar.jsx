import React from 'react';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';

const SimpleSnackbar = ({ open, onClose, severity, message, vertical, horizontal, ...props }) => {
    return (
        <Snackbar open={open} autoHideDuration={3000} onClose={onClose} key={vertical + horizontal } {...props}>
        <MuiAlert elevation={6} variant="standard" onClose={onClose} severity={severity}>
            {message}
        </MuiAlert>
        </Snackbar >
    );
};

export default SimpleSnackbar;
