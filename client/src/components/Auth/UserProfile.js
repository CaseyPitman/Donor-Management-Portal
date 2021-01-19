//This component renders picture and name of logged in user.

import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

// Styles
import "../../css/userInfo.css";

const UserProfile = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return <div className='user-info'></div>;
  }

  console.log(user);
  return (
    isAuthenticated && (
      <div className='user-info'>
        <div className='user-info-content'>
          <h2 className='user-name'>Welcome {user.name}</h2>
          <img src={user.picture} alt={user.name} className='user-image' />
        </div>
      </div>
    )
  );
};

export default UserProfile;
