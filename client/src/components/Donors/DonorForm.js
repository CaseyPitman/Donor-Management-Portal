// This component renders the form used both for creating a new donor record and
// updating an existing record.

import React from "react";
import { Field, reduxForm } from "redux-form";

class DonorForm extends React.Component {
  renderError({ error, touched }) {
    if (touched && error) {
      return (
        <div>
          <div>{error}</div>
        </div>
      );
    }
  }

  renderInput = ({ input, label, meta }) => {
    const className = `field ${meta.error && meta.touched ? "error" : ""}`;

    return (
      <div className={className}>
        <label>{label}</label>
        <input {...input} autoComplete='off' />
        {this.renderError(meta)}
      </div>
    );
  };

  handleSubmit = formValues => {
    this.props.onSubmit(formValues);
  };

  render() {
    return (
      <div>
        <form onSubmit = {this.handleSubmit}>
           



        </form>
      </div>
    );
  }
}

export default reduxForm({
  form: "donorForm",
//   validate: validate,
})(DonorForm);
