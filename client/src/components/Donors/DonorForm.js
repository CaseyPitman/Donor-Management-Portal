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

    //  STYLE INPUT & LABEL FROM HERE.
    return (
      <div className={className}>
        <label>{label}</label>
        <input {...input} autoComplete='off' />
        {this.renderError(meta)}
      </div>
    );
  };



  renderSelector = selectorType => {
    if (selectorType === "state") {
      return (
        <select>
          <option>State</option>
        </select>
      );
    } else if (selectorType === "type") {
      return (
        <select>
          <option>type</option>
        </select>
      );
    }
  };

  handleSubmit = formValues => {
    this.props.onSubmit(formValues);
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <h2>Contact</h2>
          <Field
            name='firstName'
            component={this.renderInput}
            label='First Name'
          />
          <Field
            name='lastName'
            component={this.renderInput}
            label='Last Name'
          />
          <Field
            name='organization'
            component={this.renderInput}
            label='Organization'
          />
          <Field name='email' component={this.renderInput} label='Email' />
          <Field name='phone' component={this.renderInput} label='Phone' />
          <h3>Address</h3>
          <Field name='street' component={this.renderInput} label='Street' />
          <Field name='city' component={this.renderInput} label='City' />
          <Field
            name='state'
            component={() => this.renderSelector("state")}
            label='State'
          />
          <Field name='zip' component={this.renderInput} label='Zip Code' />
          <h2>Donation Information</h2>
          <Field
          name="donation"
          label = "Donation Date"
          component={this.renderInput}
        />
          <Field name='amount' component={this.renderInput} label='Amount' />
          <Field
            name='type'
            component={() => this.renderSelector("type")}
            label='Type'
          />
        </form>
      </div>
    );
  }
}

export default reduxForm({
  form: "donorForm",
  //   validate: validate,
})(DonorForm);
