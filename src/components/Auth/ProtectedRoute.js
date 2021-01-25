//This component ensures protection of routes from !Auth users.

import React from "react";

import { Route } from "react-router-dom";

import { withAuthenticationRequired } from "@auth0/auth0-react";

// import LoadingAnimation from "../LoadingAnimation";

const ProtectedRoute = ({ component, ...args }) => (
  <Route
    component={withAuthenticationRequired(component)}
    {...args}
  />
);

export default ProtectedRoute;
