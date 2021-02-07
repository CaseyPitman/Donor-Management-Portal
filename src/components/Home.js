/* 
This component renders the home page consisting of a header with 
a login button, a splash image and a quote about the value of literacy.
*/

import React from "react";

//Hooks
import { useAuth0 } from "@auth0/auth0-react";
import { useHistory } from "react-router-dom";

//Styles
import "../css/home.css";

const Home = () => {
  const { isAuthenticated } = useAuth0();
  const history = useHistory();

  //If already logged in, redirect to donor-list
  if (isAuthenticated) {
    history.push("/donor-list");
    return <div></div>;
  } 
  

    return (
      <div className='home'>
        <div className='quote-container'>
          <h1 className='quote'>
            <i className='fas fa-quote-left quotation-mark'></i>
            The more that you read,
            <br></br>
            the more things you will know.
            <br></br>
            The more that you learn,
            <br></br>
            the more places you’ll go.
          </h1>
          <h2 className='quote-attribution'>- Dr. Seuss</h2>
        </div>
      </div>
    );

};

export default Home;
