//This function totals all donations by all donors.

import formatAmount from "./formatAmount";

const totalDonations = (donations) => {
  const donationsArr = donations.map(
    donation => donation.amount
  );
  return donationsArr.reduce((a, b) => a + b);
};
export default totalDonations;
