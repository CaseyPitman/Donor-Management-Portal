/* 
Renders the modal to confirm deletion of a donor record
*/
import React from "react";

// Components
import Button from "react-bootstrap/Button";

const DeleteDonorModal = ({ closeModal, donor }) => {


console.log(donor);

  const confirmDelete = () => {
    console.log('you confirmed deletion ');
    closeModal();
  }



  return (
    <div className='modal-content'>
      <div className='modal-header'>
        <h5 className='modal-title'>Confirm Delete</h5>
        <button
          type='button'
          className='close'
          aria-label='Close'
          onClick={closeModal}>
          <span aria-hidden='true'>&times;</span>
        </button>
      </div>
      <div className='modal-body'>
      
        <strong className='text-dark'>
          Are you sure you want to delete&nbsp;
          {donor.firstName} {donor.lastName}?
        </strong>
      </div>
      <div className='modal-footer'>
        <Button variant='info' onClick={closeModal}>
          Cancel
        </Button>
        <Button variant='danger' onClick = {confirmDelete}>Confirm</Button>
      </div>
    </div>
  );
};

export default DeleteDonorModal;
