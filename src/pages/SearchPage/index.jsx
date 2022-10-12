import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { loadShowsAction, setLoadingAction } from '../../actions';
import { ShowCard, SearchForm, Header } from '../../components';

const SearchPage = () => {

    const dispatch = useDispatch();

    const showData = useSelector(state => state.showData);
    const [searchString, setSearchString] = useState("Friends");
    const isLoading = useSelector(state => state.loading);
    const error = useSelector(state => state.error);

    useEffect(() => {

        dispatch(setLoadingAction(true));
        dispatch(loadShowsAction(searchString));

    }, [searchString]);

    function handleSearch(userInput){
        setSearchString(userInput);
    }

    return <>
            <Header />
            <SearchForm handleSearchSubmission={handleSearch}/>
            {error ? <em>Something has gone wrong...</em> : false}
            {isLoading ? <em>Loading...</em> : showData.map((s) => <ShowCard key={s["show"]["id"]} data={s["show"]} />)}
            </>
}

export default SearchPage;
