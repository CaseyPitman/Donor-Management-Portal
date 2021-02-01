/* Renders the modal to add a single donation to a donor 
record without going through the full edit process. */

import React from "react";

import Button from "react-bootstrap/Button";

const AddDonationModal = ({ closeModal, message, action }) => {
  return (
    <div className='modal-content'>
      <div className='modal-header'>
        <h5 className='modal-title'>Add a Donation</h5>
        <button
          type='button'
          className='close'
          aria-label='Close'
          onClick={closeModal}>
          <span aria-hidden='true'>&times;</span>
        </button>
      </div>
      <div className='modal-body'>




        <form>
          <div className='form-group'>
            <input placeholder='date' />
            <input placeholder='amount' />
            <select>
              <option>Cash</option>
              <option>Property</option>
              <option>Endowment</option>
              <option>Sponsorship</option>
            </select>
          </div>
        </form>




      </div>
      <div className='modal-footer'>
        <Button variant='info' onClick={closeModal}>
          Cancel
        </Button>
        <Button variant='primary'>Add Donation</Button>
      </div>
    </div>
  );
};

export default AddDonationModal;
