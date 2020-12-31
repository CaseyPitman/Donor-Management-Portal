import React from "react";

import LogoutButton from "../LogoutButton";
import UserProfile from "../UserProfile";

const ListDonors = () => {
  return (
    <div>
      <h1>Donor List</h1>

      <LogoutButton />
      <UserProfile />
    </div>
  );
};

export default ListDonors;
