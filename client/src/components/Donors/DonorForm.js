// This component renders the form used both for creating a new donor record and
// updating an existing record.

import React from "react";
import { Field, reduxForm } from "redux-form";


class DonorForm extends React.Component {

  //for testing

  onSubmit = () => {
    console.log("form submitted")
  }



  renderError({ error, touched }) {
    if (touched && error) {
      return (
        <div className='ui error message'>
          <div className='header'>{error}</div>
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

  renderSelectField = () => {
    return (
      <select>
        <option value='blah'>Blah</option>
      </select>
    );
  };

  renderTextField = () => {
    return (<input></input>)
  }

  handleSubmit = formValues => {
    this.props.onSubmit(formValues);
  };

  render() {
    return (
      <form
        className='ui form error'
        onSubmit={this.props.handleSubmit(this.onSubmit)}>
        <Field name='firstName' component={this.renderInput} label='First Name' />
        <Field
          name='lastName'
          component={this.renderInput}
          label='Last Name'
        />
        <Field
          name='state'
          component={this.renderSelectField}
          label='State'
        />
        <button className='ui button primary'>Submit</button>
      </form>
    );
  }
}

const validate = formValues => {
  const errors = {};
  if (!formValues.firstName) {
    //only run if user did not enter a title
    errors.title = "You must enter a title.";
  }
  if (!formValues.LastName) {
    //only run if user did enter a description
    errors.description = "You must enter a description.";
  }
  return errors;
};

export default reduxForm({
  form: "donorForm",
  validate: validate,
})(DonorForm);
