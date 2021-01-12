// This component renders the form used both for creating a new donor record and
// updating an existing record.

import React from "react";

// import Form from "@rjsf/core";
import Form from "@rjsf/material-ui";

import stateAbb from "../../data/stateAbb";
import stateNames from "../../data/stateNames";

import "../../css/donorForm.css";

class DonorForm extends React.Component {
  schema = {
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
            amount: { type: "number", title: "Amount" },
            type: {
              type: "string",
              title: "Type",
              enum: ["gift", "endowment", "scholarship"],
              enumNames: ["Gift", "Endowment", "Scholarship"],
            },
          },
        },
      },
    },
  };

  formData = {
    state: "LA",
  };

  onSubmitForm = ({ formData }) => {
    //conditional statement to either update or create - pass prop of create or edit from parent
    // console.log(formData);
    if (this.props.action === "create") {
      this.props.onSubmitCreateForm(formData);
    } else if (this.props.action === "edit") {
      this.props.onSubmitCreateForm(formData);
    }
  };

  render() {
    return (
      <Form
        schema={this.schema}
        uiSchema={this.uiSchema}
        onSubmit={this.onSubmitForm}
        formData={this.formData}></Form>
    );
  }
}

export default DonorForm;
