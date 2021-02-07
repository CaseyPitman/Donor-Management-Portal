//Helper function to validate zip codes and limit to 5 digits.

const validateZip = input => {
  //No current input return as is
  if (!input) return input;
  //Only number inputs.
  const zip = input.replace(/[^\d]/g, "");
  //Limit to 5 digits.
  if (zip.length < 5) {
    return zip;
  }
  return zip.slice(0, 5);
};

export default validateZip;
