//Sets up base axios call for donor api.

import axios from "axios";

export default axios.create({
  baseURL: "https://alabaster-plum-help.glitch.me/",
});
