import React from 'react';

const EditModal = ({ isOpen, handleClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="modal">
        <div className="modal-content">
          <span className="modal-close" onClick={handleClose}>
            &times;
          </span>
          <h2>Modal Content</h2>
          {/* Add your modal content here */}
        </div>
      </div>
    </div>
  );
};

export default EditModal;