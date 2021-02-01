/* This function will take a list of donors and sort them based on chosen 
criteria - alphabetical or total donation amount */

const sortDonors = (data, dataType, sortBy) => {
  let sortedData = [];

  if (dataType === "donor list") {
    //User wishes to sort full list of donors

    // Sort by total donations
    if (sortBy === "totalDonations") {
      sortedData = data.sort((a, b) => {
        return b.totalDonations - a.totalDonations;
      });
    }

    //Sort Alphabetically
    else {
      sortedData = data.sort((a, b) => {
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
  } else if (dataType === "donations") {
    //User wishes to sort list of single donor's donations.
    if (sortBy === "donation amount") {
      sortedData = data.sort((a, b) => {
        return b.amount - a.amount;
      });
    } else if (sortBy === "date ascending") {
      //Oldest Date First
      sortedData = data.sort((a, b) => {
        //Use regex to remove dashes from the date during sort.
        return a.date.replace(/-/g, "") - b.date.replace(/-/g, "");
      });
    } else {
      sortedData = data.sort((a, b) => {
        //Newest date first - default
        //Use regex to remove dashes from the date during sort.
        return b.date.replace(/-/g, "") - a.date.replace(/-/g, "");
      });
    }
  }

  return sortedData;
};

export default sortDonors;
