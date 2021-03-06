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
} from "./Donors/index";

import { usePromiseTracker } from "react-promise-tracker";
import Loader from "react-promise-loader";

//Styles
import "../css/app.css";

const App = () => {
  return (
    <Router>
      <div className='app'>
        <div className='app-viewport'>
          <Switch>
            <Route path='/' exact component={Home} />
            <div>
              <Header />
              <ProtectedRoute path='/donor-list' component={DonorList} />
              <ProtectedRoute path='/create-donor' component={CreateDonor} />
              <ProtectedRoute
                path='/donor-details/:id'
                component={DonorDetails}
              />
              <ProtectedRoute path='/edit-donor/:id' component={EditDonor} />
            </div>
          </Switch>
        </div>
        <Loader promiseTracker={usePromiseTracker} />
      </div>
    </Router>
  );
};

export default App;
