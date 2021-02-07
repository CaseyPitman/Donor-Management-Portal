/* 
This function takes data, a dataType (donor list or donations), and sortBy (a method by which
to sort - i.e. alphabetically,  numerically, etc)
 */

const sortData = (data, dataType, sortBy) => {
  //Store sorted data.
  let sortedData = [];

  //USER WISHES TO SORT THE FULL LIST OF DONORS
  if (dataType === "donor list") {
    // Sort donor list by total donations
    if (sortBy === "totalDonations") {
      sortedData = data.sort((a, b) => {
        return b.totalDonations - a.totalDonations;
      });
    }
    //Sort donor list alphabetically
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
  }
  
  //USER WISHES TO SORT INDIVIDUAL DONOR'S DONATION HISTORY
  else if (dataType === "donations") {
    //Sort donations by donation amount descending
    if (sortBy === "donation amount") {
      sortedData = data.sort((a, b) => {
        return b.amount - a.amount;
      });
    }
    //Sort donations by donation type.
    else if (sortBy === "donation type") {
      sortedData = data.sort((a, b) => {
        const typeA = a.type.toUpperCase();
        const typeB = b.type.toUpperCase();
        if (typeA < typeB) {
          return -1;
        }
        if (typeA > typeB) {
          return 1;
        }
        //Same types
        return 0;
      });
    }
    //Sort donations by data, oldest to newest.
    else if (sortBy === "date ascending") {
      sortedData = data.sort((a, b) => {
        //Use regex to remove dashes from the date during sort.
        return a.date.replace(/-/g, "") - b.date.replace(/-/g, "");
      });
    }
    //Sort donations by data, newest to oldest
    else {
      sortedData = data.sort((a, b) => {
        //Use regex to remove dashes from the date during sort.
        return b.date.replace(/-/g, "") - a.date.replace(/-/g, "");
      });
    }
  }

  return sortedData;
};

export default sortData;
