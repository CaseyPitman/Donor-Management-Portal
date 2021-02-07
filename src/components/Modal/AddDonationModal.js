/* 
Renders the modal to add a single donation to a donor 
record without going through the full edit process. 
*/

import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

//Components
import Button from "react-bootstrap/Button";
import InputGroup from "react-bootstrap/InputGroup";
import Form from "react-bootstrap/Form";

//Actions
import { editDonor } from "../../actions/index.js";

//Helper Functions
import totalDonations from "../../helper-funcs/totalDonations";

const AddDonationModal = ({ closeModal, donor }) => {
  const [newDate, setNewDate] = useState("");
  const [newAmount, setNewAmount] = useState("");
  const [newType, setNewType] = useState("");

  const history = useHistory();
  const dispatch = useDispatch();

  //Isolate donations array
  const donations = donor.donations;

  // CONTROLLED INPUTS
  //Date
  const onDateChange = e => {
    setNewDate(e.target.value);
  };

  //Amount
  const onAmountChange = e => {
    setNewAmount(e.target.value);
  };

  //Donation type
  const onTypeChange = e => {
    setNewType(e.target.value);
  };

  //Use submits new donation
  const handleSubmit = () => {
    let donationsRecord = donations;

    //Assemble new donation object
    const newDonation = {
      date: newDate,
      amount: parseFloat(newAmount),
      type: newType,
    };

    //Insert new donation object into donation record
    donationsRecord.push(newDonation);

    //Assemble full record with new donation and new total donations
    const updatedRecord = {
      ...donor,
      donations: donationsRecord,
      totalDonations: totalDonations(donationsRecord),
    };

    closeModal();
    //Call edit donor action
    dispatch(editDonor(donor.id, updatedRecord));
    //Send back to donor details
    history.push(`/donor-details/${donor.id}`);
  };

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
      <Form onSubmit={handleSubmit}>
        <div className='modal-body'>
          <div className='form-group'>
            <InputGroup>
              <Form.Control
                required
                className='form-control'
                type='date'
                placeholder='Date'
                value={newDate}
                onChange={e => onDateChange(e)}
              />
            </InputGroup>
            <InputGroup className='my-3'>
              <Form.Control
                required
                type='number'
                placeholder='Amount'
                value={newAmount}
                onChange={e => onAmountChange(e)}
              />
            </InputGroup>

            <InputGroup>
              <Form.Control
                required
                size='sm'
                as='select'
                value={newType}
                onChange={e => onTypeChange(e)}>
                <option defaultValue>Type</option>
                <option value='Cash'>Cash</option>
                <option value='Endowment'>Endowment</option>
                <option value='Property'>Property</option>
                <option value='Sponsorship'>Sponsorship</option>
              </Form.Control>
            </InputGroup>
          </div>
        </div>
        <div className='modal-footer'>
          <Button variant='info' onClick={closeModal}>
            Cancel
          </Button>
          <Button variant='primary' type='submit'>
            Add Donation
          </Button>
        </div>
      </Form>
    </div>
  );
};

export default AddDonationModal;
