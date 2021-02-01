/* 
Renders the modal to confirm deletion of a donor record
*/
import React from "react";

// Components
import Button from "react-bootstrap/Button"



const DeleteDonorModal = ({closeModal}) => {
  return (
    <div className='modal-content'>
      <div className='modal-header'>
        <h5 className='modal-title'>Title</h5>
        <button
          type='button'
          className='close'
          aria-label='Close'
          onClick={closeModal}>
          <span aria-hidden='true'>&times;</span>
        </button>
      </div>
      <div className='modal-body'>
        delte modal content
      </div>
      <div className='modal-footer'>
        <Button type='button' variant='info' onClick={closeModal}>
          Cancel
        </Button>
        action button
      </div>
    </div>
  );
};

export default DeleteDonorModal;
