/* This function will take a list of donors and sort them based on chosen 
criteria - alphabetical or total donation amount */

const sortDonors = (donors, sortBy = "alphabet") => {
  console.log(donors);
  let sortedDonors = [];

  //Sort Alphabetically
  if (sortBy === "alphabet") {
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
  // Sort by total donations
  else if (sortBy=== 'totalDonations')



  console.log(sortedDonors);

  return "sorted donors list";
};

export default sortDonors;
