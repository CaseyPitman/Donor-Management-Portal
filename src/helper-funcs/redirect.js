//Helper function to redirect user to DonorList after completing an action.

import { withRouter } from "react-router-dom";

//Redirects to DonorList after action is completed.
const redirect = (props, destination) => {
  const { history } = props;
  if (history) history.push(destination);
};

export default redirect;
