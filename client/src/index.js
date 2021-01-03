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
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import reducers from "./reducers";
//Auth0
import { Auth0Provider } from "@auth0/auth0-react";

// Components
import App from "./components/App";

const store = createStore(reducers, applyMiddleware(thunk));

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

//
