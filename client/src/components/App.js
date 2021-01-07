//App parent component

import React from "react";

//Routing
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ProtectedRoute from "./Auth/ProtectedRoute";

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
import { deleteDonor } from "../actions";

const App = props => {
  return (
    <Router>
      <div className='app'>
        <Header />
        <Switch>
          <Route path='/' exact component={Home} />
          <ProtectedRoute path='/donor-list' component={DonorList} />
          <ProtectedRoute path='/create-donor' component={CreateDonor} />
          <ProtectedRoute path='/donor-details/:id' component={DonorDetails} />
          <ProtectedRoute path='/edit-donor/:id' component={EditDonor} />
          <ProtectedRoute path='/delete-donor/:id' component={DeleteDonor} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
