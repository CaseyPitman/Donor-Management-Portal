//This function totals all of a donor's donations. 


const totalDonations = (donations) => {
  const donationsArr = donations.map(
    donation => donation.amount
  );
  return donationsArr.reduce((a, b) => a + b);
};
export default totalDonations;
