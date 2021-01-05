//App parent component

import React from "react";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

//Components
import Header from "./Header";
import Home from "./Home";
import {
  DonorList,
  CreateDonor,
  DonorDetails,
  EditDonor,
  DeleteDonor,
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
            <DonorList/>
          </Route>
          <Route path='/create-donor' exact>
            <CreateDonor />
          </Route>
          <Route path='/donor-details' exact>
            <DonorDetails />
          </Route>
          <Route path='/edit-donor' exact>
            <EditDonor />
          </Route>
          <Route path='/delete-donor' exact>
            <DeleteDonor />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
