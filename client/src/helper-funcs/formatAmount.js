//Formats dollar amounts with commas, cents, and dollar signs.

const formatAmount = amount => {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(amount);
};

export default formatAmount;
