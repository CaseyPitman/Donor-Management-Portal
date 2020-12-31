/* 
This component renders the home page consisting of a header with 
a login button, a splash image and a quote about the value of literacy.
*/

import React from "react";

//Styles
import "../css/home.css";

const Home = () => {
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
          <i className='fas fa-quote-right quotation-mark'></i>
        </h1>
        <h2 className='quote-attribution'>- Dr. Seuss</h2>
      </div>
    </div>
  );
};

export default Home;
