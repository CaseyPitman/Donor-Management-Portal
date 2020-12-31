//App parent component

import React from "react";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

//Components
import Header from "./Header";
import Home from "./Home";
import {
  ListDonors,
  CreateDonor,
  DonorDetails,
  EditDonors,
  DeleteDonors,
} from "./Donors/index";

//Styles
import "../css/app.css";

const App = props => {
  return (
    <Router>
      <div className='app'>
        <Header />
        <Switch>
          <Route path='/' exact>
            <Home />
          </Route>
          <Route path='/donor-list' exact>
            <ListDonors />
          </Route>
          <Route path='/create-donor' exact>
            <CreateDonor />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
