//Helper function to validate zip codes and limit to 5 digits.

const validateZip = input => {
  if (!input) return input;

  const zip = input.replace(/[^\d]/g, "");

  if (zip.length < 5) {
    return zip;
  }
  return zip.slice(0, 5);
};

export default validateZip;
