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
  const onAddDonation = async () => {
    // console.log(`confirmed new donation`);
    // console.log("old donations");
    // console.log(donor.donations);

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

    // console.log(updatedRecord);

    //Add new donation to donation array
    //pass id, formData

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
      <div className='modal-body'>
        <form>
          <div className='form-group'>
            <input
              placeholder='date'
              value={newDate}
              onChange={e => onDateChange(e)}
            />
            <input
              type='number'
              placeholder='amount'
              value={newAmount}
              onChange={e => onAmountChange(e)}
            />
            <InputGroup className=''>
              <Form.Control
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
        </form>
      </div>
      <div className='modal-footer'>
        <Button variant='info' onClick={closeModal}>
          Cancel
        </Button>
        <Button variant='primary' onClick={onAddDonation}>
          Add Donation
        </Button>
      </div>
    </div>
  );
};

export default AddDonationModal;
