import React, { useState } from 'react';

const SearchForm = ({ handleSearchSubmission }) => {

    const [inputValue, setInputValue] = useState("");

    function handleInput(e) {
        const newInput = e.target.value;
        setInputValue(newInput);
    }

    function handleSubmit(e) {
        e.preventDefault();
        handleSearchSubmission(inputValue);
    }


    return <form onSubmit={handleSubmit}>
            <label htmlFor='search-box'>Query:</label>
            <input type="text" onChange={handleInput} value={inputValue} id="search-box" required/>
            <input type="submit" value="Search"/>
           </form>
}

export default SearchForm;