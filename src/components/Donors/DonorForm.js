// This component renders the form used both for creating a new donor record and
// updating an existing record.

import React, { useState, useEffect } from "react";

//Components

import Form from "@rjsf/bootstrap-4";

import Button from "../Button";

//Data
import stateAbb from "../../data/stateAbb";
import stateNames from "../../data/stateNames";

const DonorForm = props => {
  const [formData, setFormData] = useState(null);

  useEffect(() => {
    if (props.donorInfo) {
      setFormData(props.donorInfo);
    }
  }, [props.donorInfo]);

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
        // description: "Select a state",
        enum: stateAbb,
        enumNames: stateNames,
      },
      zip: {
        type: "string",
        title: "Zip Code",
      },
      notes: {
        type: "string",
        title: "Notes",
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
              enum: ["Cash", "Endowment", "Property", "Sponsorship"],
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
    notes: {
      "ui:widget": "textarea",
      "ui:options": {
        rows: 5,
      },
    },
  };

  //User submits form.
  const onSubmitForm = ({ formData }) => {
    if (!formData.notes) {
      formData.notes = "none";
    }
    props.onSubmitForm(formData);
  };

  return (
    <Form
      className='form'
      schema={schema}
      uiSchema={uiSchema}
      onSubmit={onSubmitForm}
      formData={formData}
      onChange={e => {
        setFormData(e.formData);
      }}>
      {/* <button type = "button">add stuff</button> add the submit button i want */}
    </Form>
  );
};

export default DonorForm;
