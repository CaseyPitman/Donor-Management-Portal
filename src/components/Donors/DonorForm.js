/* 
This component renders the form used both for creating a new donor record and
updating an existing record. react-jsonschema-form used to build the form.
 */

import React, { useState, useEffect } from "react";

//Components
import Form from "@rjsf/bootstrap-4";

//Data
import stateAbb from "../../data/stateAbb";
import stateNames from "../../data/stateNames";

//Helper Functions
import totalDonations from "../../helper-funcs/totalDonations";
import formatPhone from "../../helper-funcs/formatPhone";
import validateZip from "../../helper-funcs/validateZip";


const DonorForm = props => {
  const [formData, setFormData] = useState(null);

  //If donor info passed as props (i.e. - editing a record) populate the form with existing
  useEffect(() => {
    if (props.donorInfo) {
      setFormData(props.donorInfo);
    }
  }, [props.donorInfo]);

  //Form schema
  const schema = {
    type: "object",
    required: [
      "firstName",
      "lastName",
      "email",
      "phone",
      "street",
      "city",
      "state",
      "zip",
    ],
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
        formt: "email",
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

  //Schema for UI
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
    //If there are no notes, set notes value as none.
    if (!formData.notes) {
      formData.notes = "none";
    }
    //If no organization, set organization as none.
    if (!formData.organization) {
      formData.organization = "None";
    }

    //Create key value totalDonations
    formData.totalDonations = totalDonations(formData.donations);

    //Create key value fullName for sorting later
    formData.fullName = `${formData.lastName}, ${formData.firstName}`;

    //Submit form via func passed from parent.
    props.onSubmitForm(formData);
  };

  //User changes input values
  const onChangeFormData = e => {
    //phone and zip will be formatted via helper funcs.
    const newData = {
      ...e.formData,
      phone: formatPhone(e.formData.phone),
      zip: validateZip(e.formData.zip),
    };

    setFormData(newData);
  };

  return (
    <Form
      className='form rounded border border-primary'
      schema={schema}
      uiSchema={uiSchema}
      onSubmit={onSubmitForm}
      formData={formData}
      onChange={onChangeFormData}></Form>
  );
};

export default DonorForm;
