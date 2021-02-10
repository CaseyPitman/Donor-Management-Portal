/* 
This component renders a search field and handles autosuggest search of all donors.
*/

import React, { useState } from "react";
import Autosuggest from "react-autosuggest";

import { useSelector } from "react-redux";
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
    //Format value for search and get length.
    const inputValue = value.trim().toLowerCase();
    const inputLength = inputValue.length;

    //Return records that contain substring of current input.
    return inputLength === 0
      ? []
      : searchableDonors.filter(donor =>
          donor.fullName.toLowerCase().includes(inputValue)
        );
  };

  //Get the value of the suggestion for display.
  const getSuggestionValue = suggestion =>
    `${suggestion.firstName} ${suggestion.lastName}`;

  // Use your imagination to render suggestions.
  const renderSuggestion = suggestion => (
    <div>{`${suggestion.firstName} ${suggestion.lastName}`}</div>
  );

  //User types in search
  const onChange = (event, { newValue }) => {
    setValue(newValue);
  };

  //Update suggestions
  const onSuggestionsFetchRequested = ({ value }) => {
    setSuggestions(getSuggestions(value));
  };

  // Call to clear suggestions
  const onSuggestionsClearRequested = () => {
    setSuggestions([]);
  };

  //User selects name and action is initiatied.
  const onSuggestionSelected = (event, { suggestion }) => {
    //No match to user's input
    if (!suggestion) {
      //put some error handling in here in case they try to enter some bunk
      console.log("nope");
    }
    //Push to the details page for the record selected
    history.push(`/donor-details/${suggestion.id}`);
  };

  //Props for the input field
  const inputProps = {
    placeholder: "Search Donors",
    value,
    onChange: onChange,
    className: "form-control form-control-sm donor-search-field",
  };

  return (
    <Autosuggest
      suggestions={suggestions}
      onSuggestionsFetchRequested={onSuggestionsFetchRequested}
      onSuggestionsClearRequested={onSuggestionsClearRequested}
      getSuggestionValue={getSuggestionValue}
      renderSuggestion={renderSuggestion}
      inputProps={inputProps}
      onSuggestionSelected={onSuggestionSelected}
      highlightFirstSuggestion={true}
    />
  );
};

export default Search;
