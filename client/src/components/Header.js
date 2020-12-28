/* 
This component renders a header that will persist throughout app usage. 
The login button will dynamically render based on user login status.
 */

import React from "react";

//Assets
import { BookHalf } from "react-bootstrap-icons";

//Components
import Button from "./Button";

const Header = () => {
  return (
    <div>
      <h1>Header</h1>
      <BookHalf />
      <Button />
    </div>
  );
};

export default Header;
