/*  
This app enables non-profit organizations and charities to track the names of past donors, 
including donation history (dates, amounts, and types), and contact information to enable 
soliciation of future donations. 
*/

/* 
"No one has ever become poor by giving."
-Anne Frank
*/

import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import reducers from "./reducers";
import { Auth0Provider } from "@auth0/auth0-react";

// Components
import App from "./components/App";

//Theme
import "bootswatch/dist/minty/bootstrap.min.css";
//Enable redux devtools
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
//Create the store
const store = createStore(reducers, composeEnhancers(applyMiddleware(thunk)));

ReactDOM.render(
  <Provider store={store}>
    <Auth0Provider
      domain='dev-ffw1py4b.us.auth0.com'
      clientId='wVUMCl3SliBeWmfltUuJvjBYPx2LB1De'
      redirectUri={"http://localhost:3000/donor-list"}>
      <App />
    </Auth0Provider>
  </Provider>,
  document.getElementById("root")
);
