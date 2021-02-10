/* 
This component renders the home page consisting of a header with 
a login button, a splash image and a quote about the value of literacy.
*/

import React from "react";

//Hooks
import { useAuth0 } from "@auth0/auth0-react";
import { useHistory } from "react-router-dom";

import LoginButton from "./Auth/LoginButton";

//Styles
import "../css/home.css";

const Home = () => {
  //Dertermine auth status
  const { isAuthenticated } = useAuth0();
  const history = useHistory();

  //If already logged in, redirect to donor-list
  if (isAuthenticated) {
    history.push("/donor-list");
    return <div></div>;
  }

  return (
    <div className='home'>
      <div className='intro-container'>
        <div className='intro-text'>
          <h1 className='intro-head text-light'>The Literacy Council</h1>
          <h2 className='intro-subhead text-muted'>Donor Management Portal</h2>
        </div>
        <LoginButton />
      </div>
    </div>
  );
};

export default Home;
