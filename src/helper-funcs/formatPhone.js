//Formats phone numbers as they are input
//(XXX) XXX-XXXX

const formatPhone = input => {
  //No input return empty input
  if (!input) return input;
  //Ensure number input, and assign valid input to phoneNumber
  const phoneNumber = input.replace(/[^\d]/g, "");
  //Get current length of phone number
  const phoneNumberLength = phoneNumber.length;
  //Less than 4 digits input, just return input
  if (phoneNumberLength < 4) return phoneNumber;
  //If less than seven (but more than 3, see above) return with parenthesis around area code.
  if (phoneNumberLength < 7) {
    return `(${phoneNumber.slice(0, 3)}) ${phoneNumber.slice(3)}`;
  }
  //If phoneNumber is currently longer than six digts, return with parenthesis and dash.
  //Also limits length to ten digits.
  return `(${phoneNumber.slice(0, 3)}) ${phoneNumber.slice(
    3,
    6
  )}-${phoneNumber.slice(6, 10)}`;
};

export default formatPhone;
