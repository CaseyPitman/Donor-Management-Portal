/* 
This component renders a search field and handles autosuggest search of all donors.
*/

import React,{useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import Autosuggest from "react-autosuggest";

import Button from "react-bootstrap/Button";
import InputGroup from "react-bootstrap/InputGroup";
import Form from "react-bootstrap/Form";

const Search = () => {

  //Convert donor list object to array of objects.
//   const donorsArr = Object.values(donors);

//Grab the list of donors from redux store.
const donorList = useSelector(state => state.donors)

//Convert list of donors from object to array of objects.
const searchableDonors = Object.values(donorList);

console.log(searchableDonors);



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
