/* 
This component renders a search field and handles autosuggest search of all donors.
*/

import React, { useState } from "react";
import Autosuggest from "react-autosuggest";

import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

const Search = () => {
  const [value, setValue] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const history = useHistory();

  //Grab the list of donors from redux store.
  const donorList = useSelector(state => state.donors);

  //Convert list of donors from object to array of objects.
  const searchableDonors = Object.values(donorList);

  //Retrieve suggestions
  const getSuggestions = value => {
    const inputValue = value.trim().toLowerCase();
    const inputLength = inputValue.length;

    return inputLength === 0
      ? []
      : searchableDonors.filter(
          //  donor => donor.fullName.toLowerCase().slice(0, inputLength) === inputValue
          donor => donor.fullName.toLowerCase().includes(inputValue)
        );
  };

  const getSuggestionValue = suggestion =>
    `${suggestion.firstName} ${suggestion.lastName}`;

  // Use your imagination to render suggestions.
  const renderSuggestion = suggestion => (
    <div>{`${suggestion.firstName} ${suggestion.lastName}`}</div>
  );

  const onChange = (event, { newValue }) => {
    setValue(newValue);
  };

  const onSuggestionsFetchRequested = ({ value }) => {
    setSuggestions(getSuggestions(value));
  };

  // Call to clear suggestions
  const onSuggestionsClearRequested = () => {
    setSuggestions([]);
  };

  //User selects name and action is initiatied.
  const onSuggestionSelected = (event, { suggestion }) => {
    //put some error handling in here in case they try to enter some bunk

    if (!suggestion){
       console.log('nope');
    }

    history.push(`/donor-details/${suggestion.id}`);
  };

  const inputProps = {
    placeholder: "SearchDonors",
    value,
    onChange: onChange,
    className: "form-control form-control-sm donor-search-field",
  };

  return (
    //  <InputGroup className='donation-list-search'>
    //    <Form.Control
    //      placeholder='Search Coming Soon'
    //      aria-label='Search Donor'
    //      aria-describedby='basic-addon2'
    //      size='sm'
    //      className='donor-search-field'
    //    />
    //    <InputGroup.Append>
    //      <Button variant='dark' size='sm' className='search-donor-button'>
    //        Search
    //      </Button>
    //    </InputGroup.Append>
    //  </InputGroup>

    <Autosuggest
      suggestions={suggestions}
      onSuggestionsFetchRequested={onSuggestionsFetchRequested}
      onSuggestionsClearRequested={onSuggestionsClearRequested}
      getSuggestionValue={getSuggestionValue}
      renderSuggestion={renderSuggestion}
      inputProps={inputProps}
      onSuggestionSelected={onSuggestionSelected}
    />
  );
};

export default Search;
