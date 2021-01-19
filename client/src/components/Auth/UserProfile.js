//This component renders picture and name of logged in user.

import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

// Styles
import "../../css/userInfo.css";

const UserProfile = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return <div className='user-image-container'></div>;
  }

  return (
    isAuthenticated && (
      <div className='user-image-container'>
        <img src={user.picture} alt={user.name} className='user-image' />
      </div>
    )
  );
};

export default UserProfile;
