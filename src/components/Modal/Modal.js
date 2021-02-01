/* 
This component renders a modal to add a donor to donor details without 
going through full edit process.
 */
import React from "react";
import Button from "react-bootstrap/Button";

const Modal = ({ closeModal, title, message, action }) => {
  
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
        <p>content</p>
        <p>content</p>
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

export default Modal;