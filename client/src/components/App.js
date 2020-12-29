//App parent component

import React from "react";

//Components
import Home from "./Home";
import Header from "./Header";

//Styles
import "../css/app.css";

const App = () => {
  return (
    <div className = 'app'>
      <Header />
      <Home />
    </div>
  );
};

export default App;
