/* 
This component renders a search field and handles autosuggest search of all donors.
*/

import React from "react";

import Button from "react-bootstrap/Button";
import InputGroup from "react-bootstrap/InputGroup";
import Form from "react-bootstrap/Form";

const Search = () => {
  return (
    <InputGroup className='donation-list-search'>
      <Form.Control
        placeholder='Search Coming Soon'
        aria-label='Search Donor'
        aria-describedby='basic-addon2'
        size='sm'
        className='donor-search-field'
      />
      <InputGroup.Append>
        <Button variant='dark' size='sm' className='search-donor-button'>
          Search
        </Button>
      </InputGroup.Append>
    </InputGroup>
  );
};

export default Search;
