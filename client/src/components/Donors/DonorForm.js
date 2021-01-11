// This component renders the form used both for creating a new donor record and
// updating an existing record.

import React from "react";

import Form from "@rjsf/core";

const schema = {
  type: "object",
  required: ["firstName"],
  properties: {
    firstName: {
      type: "string",
      title: "First Name",
    },
    lastName: {
      type: "string",
      title: "Last Name",
    },
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
