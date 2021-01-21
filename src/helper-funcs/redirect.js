//Helper function to redirect user to DonorList after completing an action.



import {withRouter} from "react-router-dom";

//Redirects to DonorList after action is completed.
const redirectToList = (props) => {
  const { history } = props;
  if (history) history.push("/donor-list");
};

export default redirectToList;