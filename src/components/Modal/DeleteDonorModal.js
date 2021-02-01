/* 
Renders the modal to confirm deletion of a donor record
*/
import React from "react";
import { useSelector, useDispatch } from "react-redux";

// Components
import Button from "react-bootstrap/Button";

//Actions
import { deleteDonor } from "../../actions/index";

//Hooks
import { useHistory } from "react-router-dom";

const DeleteDonorModal = ({ closeModal, donor }) => {
  const dispatch = useDispatch();
  const history = useHistory();

  //Confirm deletion of donor record.
  const confirmDelete = async () => {
    closeModal();
    history.push("/donor-list")
    await dispatch(deleteDonor(donor.id));
  };

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
        <Button variant='danger' onClick={confirmDelete}>
          Confirm
        </Button>
      </div>
    </div>
  );
};

export default DeleteDonorModal;
