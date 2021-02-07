/* 
This component renders a form component for a user to create a new recored with 
information on a new donor.
*/

import React, { useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import { connect, useDispatch } from "react-redux";

//Generate random id for record
import { nanoid } from "nanoid";

//Actions
import { createDonor } from "../../actions";

//Components
import DonorForm from "./DonorForm";
import Button from "react-bootstrap/Button";

//Styles
import "../../css/create-edit-donor.css";

const CreateDonor = props => {
  const dispatch = useDispatch();
  const history = useHistory();

  //Scroll to top of viewport on render
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  //Dispatch CREATE_DONOR action and then redirect to DonorList
  const onSubmitForm = formData => {
    //Creates id for newly created record
    formData.id = nanoid(19);
    //Await successful post of new record
    dispatch(createDonor(formData, props));
    //Redirect to home list view
    history.push("/donor-list");
  };

  return (
    <div className='create-donor'>
      <div className='create-donor-wrapper'>
        <div className='create-donor-container'>
          <div className='create-donor-heading'>
            <h1 className='create-donor-title'>Add New Donor</h1>
            <Link to='./donor-list'>
              <Button variant='info'>Cancel</Button>
            </Link>
          </div>
          <DonorForm onSubmitForm={onSubmitForm} action='create' />
        </div>
      </div>
    </div>
  );
};

export default connect(null, { createDonor })(CreateDonor);
