/* 
This component renders a modal to add a donor to donor details without 
going through full edit process.
 */
import React from "react";

const Modal = ({ closeModal, title, message, action }) => {
  console.log("modal open");
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
        action button
        <button type='button' className='btn btn-info' onClick={closeModal}>
          Cancel
        </button>
      </div>
    </div>
  );
};

export default Modal;
