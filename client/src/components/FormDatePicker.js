/* 
This component renders the date picker used in DonorForm
*/
import React from "react"
import DatePicker from 'react-datepicker';


const FormDatePicker = (props) => {
   return (
       <DatePicker
           selected={props.input.value || null}
           onChange={props.input.onChange}
       />
   )
}

export default FormDatePicker;