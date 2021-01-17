// This component renders the form used both for creating a new donor record and
// updating an existing record.

import React from "react";

//Components
import Form from "@rjsf/material-ui";

//Data
import stateAbb from "../../data/stateAbb";
import stateNames from "../../data/stateNames";

//Styles
import "../../css/donorForm.css";

const DonorForm = props => {
  const schema = {
    type: "object",
    required: ["firstName", "lastName", "email", "phone"],
    title: "Contact Info",
    properties: {
      firstName: {
        type: "string",
        title: "First Name",
      },
      lastName: {
        type: "string",
        title: "Last Name",
      },
      organization: {
        type: "string",
        title: "Organization",
      },
      email: {
        type: "string",
        title: "Email",
      },
      phone: {
        type: "string",
        title: "Phone",
        format: "phoneNumberFormat",
      },
      street: {
        type: "string",
        title: "Street",
      },
      city: {
        type: "string",
        title: "City",
      },
      state: {
        type: "string",
        title: "State",
        description: "Select a state",
        enum: stateAbb,
        enumNames: stateNames,
      },
      zip: {
        type: "string",
        title: "Zip Code",
      },
      donations: {
        type: "array",
        minItems: 1,
        title: "Donation History",
        items: {
          type: "object",
          required: ["date", "amount", "type"],
          properties: {
            date: { type: "string", format: "date", title: "Date" },
            amount: { type: "number", title: "Amount", minimum: 0 },
            type: {
              type: "string",
              title: "Type",
              enum: ["cash", "endowment", "property", "sponsorship"],
              enumNames: ["Cash", "Endowment", "Property", "Sponsorship"],
            },
          },
        },
      },
    },
  };

  const uiSchema = {
    firstName: {
      "ui:autofocus": true,
    },
  };

  //Setting form data
  const createFormData = formData => {
    //Editing a record with prexisting form data.
    if (props.action === "edit") {
      // console.log(this.props.donorInfo);
      return (formData = props.donorInfo);
    }
  };

  //User submits form.
  const onSubmitForm = ({ formData }) => {
    props.onSubmitForm(formData);
  };

  return (
    <Form
      schema={schema}
      uiSchema={uiSchema}
      onSubmit={onSubmitForm}
      formData={createFormData()}></Form>
  );
};

export default DonorForm;
