//Sets up base axios call for donor api.

import axios from "axios";

export default axios.create({
  baseURL: "http:localhost:3001",
});
