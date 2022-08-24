import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return <header>
            <h1>Matt's TV Extravaganza</h1>
            <em>Copyright gleefully violated!</em>
            <nav>
                <NavLink to="/">Search</NavLink>
                <NavLink to="/saved">Watchlist</NavLink>
            </nav>
           </header>
}

export default Header;