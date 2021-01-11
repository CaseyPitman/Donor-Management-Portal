// This component renders the form used both for creating a new donor record and
// updating an existing record.

import React from "react";

import Form from "@rjsf/core";


class DonorForm extends React.Component {

schema = {
  type: "object",
  required: ["firstName", "lastName", "email", "phone"],
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
      enum: ['a', 'b', 'c'], 
      enumNames: ['aligator', 'bear', 'cat']
    },
  },
};

uiSchema = {
  state: {
    "ui:widget": "select", // could also be "select"
  },
};



  //for testing

  onSubmit = ({formData}) => {
    console.log(formData)
  };



  render() {
    return <Form schema={this.schema} uiSchema={this.uiSchema} onSubmit = {this.onSubmit}></Form>;
  }
}

export default DonorForm;
