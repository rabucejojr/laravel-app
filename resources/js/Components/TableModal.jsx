import React from 'react';
import { Modal, Fade, Button } from '@mui/material';

const TableModal = ({ isOpen, closeModal }) => {
  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  }
  return (
    <Modal
      style={style}
      className={`modal ${isOpen ? 'open' : 'closed'}`}
      closeAfterTransition
    >
      <Fade>
        <div className="modal">
          <div className="modal-content">
            <Button variant="contained" color="primary">
              Modal
            </Button>
          </div>
        </div>
      </Fade>
    </Modal>
  );
};

export default TableModal;
