import React, { useState, useEffect } from 'react';
import axios from 'axios';

import { ShowCard, SearchForm } from './components';

import './App.css';

const App = () => {

    const [showData, setShowData] = useState([]);
    const [searchString, setSearchString] = useState("Friends");

    useEffect(() => {

        async function searchAPI() {
            const result = await axios.get(`https://api.tvmaze.com/search/shows?q=${searchString}`);
            setShowData(result.data);
        }

        searchAPI();

    }, [searchString]);

    function handleSearch(userInput){
        setSearchString(userInput);
    }

    return <>
            <SearchForm handleSearchSubmission={handleSearch}/>
            {showData.map((s) => <ShowCard key={s["show"]["id"]} data={s["show"]} />)}
            </>
}

export default App;