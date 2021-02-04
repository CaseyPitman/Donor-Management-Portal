/* Renders the modal to add a single donation to a donor 
record without going through the full edit process. */

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

  // Make inputs contolled
  //Controlled date
  const onDateChange = e => {
    setNewDate(e.target.value);
  };
  //Controlled amount

  const onAmountChange = e => {
    setNewAmount(e.target.value);
  };

  //Controlled type
  const onTypeChange = e => {
    setNewType(e.target.value);
  };

  //onSubmit, modify into the donor info with the edit actions
  const handleSubmit = async () => {
    let donationsRecord = donor.donations;

    const newDonation = {
      date: newDate,
      amount: parseFloat(newAmount),
      type: newType,
    };

    donationsRecord.push(newDonation);

    const updatedRecord = {
      ...donor,
      donations: donationsRecord,
      totalDonations: totalDonations(donationsRecord),
    };

    closeModal();
    await dispatch(editDonor(donor.id, updatedRecord));
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
      <Form onSubmit = {handleSubmit}>
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
          <Button variant='primary' type="submit" >
            Add Donation
          </Button>
        </div>
      </Form>
    </div>
  );
};

export default AddDonationModal;
