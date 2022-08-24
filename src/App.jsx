import React from 'react';
import { Routes, Route } from 'react-router-dom';

import './App.css';

import { SearchPage, FavouritePage } from './pages';

const App = () => {

    return <Routes>
            <Route path="/" element={<SearchPage />}/>
            <Route path="/saved" element={<FavouritePage />}/>
           </Routes>
}

export default App;