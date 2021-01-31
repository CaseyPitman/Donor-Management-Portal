/* This function will take a list of donors and sort them based on chosen 
criteria - alphabetical or total donation amount */

const sortDonors = (donors, sortBy = "alphabet") => {
  let sortedDonors = [];

  // Sort by total donations
  if (sortBy === "totalDonations") {
    sortedDonors = donors.sort((a, b) => {
      return b.totalDonations - a.totalDonations;
    });
  }
  //Sort Alphabetically
  else {
    sortedDonors = donors.sort((a, b) => {
      const nameA = a.fullName.toUpperCase();
      const nameB = b.fullName.toUpperCase();

      if (nameA < nameB) {
        return -1;
      }
      if (nameA > nameB) {
        return 1;
      }

      //Names Are Equal
      return 0;
    });
  }

  return "sorted donors list";
};

export default sortDonors;
