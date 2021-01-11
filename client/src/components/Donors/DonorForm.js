// This component renders the form used both for creating a new donor record and
// updating an existing record.

import React from "react";

import Form from "@rjsf/core";

const schema = {
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
      type: 'string',
      title: 'State'
    }
  },
};

class DonorForm extends React.Component {
  //for testing

  onSubmit = () => {};

  handleSubmit = formValues => {};

  render() {
    return <Form schema={schema}></Form>;
  }
}

export default DonorForm;
