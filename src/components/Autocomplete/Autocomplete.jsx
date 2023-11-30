import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {
    Input,
  } from '@chakra-ui/react'
import './Autocomplete.css';
const Autocomplete = (props) => {
  const [query, setQuery] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const token = '87305d59c4b74ea94b224da07841dfeb';
  let headers = {'Content-type': 'application/json','X-Requested-With': 'XMLHttpRequest'};
  if (token) {
    headers['Authorization'] = `Bearer ${token}`;
  }    
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`http://127.0.0.1:7000/api/v1/postcodes?search=${query}`, {headers});
        setSuggestions(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    if (query.trim() !== '') {
      fetchData();
    } else {
      setSuggestions([]);
    }
  }, [query]);

  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };

  const handleSuggestionClick = (suggestion) => {
    setQuery(suggestion.customer);
    setSuggestions([]); // Clear suggestions when a suggestion is clicked
  };

  return (
    <div className="autocomplete-container">
      <Input
        type="text"
        value={query}
        onChange={handleInputChange}
        placeholder={props.placeholder}
      />
      <ul className="autocomplete-list">
        {suggestions.map((suggestion) => (
          <li key={suggestion.id} onClick={() => handleSuggestionClick(suggestion)}>
            {suggestion.customer}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Autocomplete;
