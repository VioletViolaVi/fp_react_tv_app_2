import React, { useState } from 'react';

import { Header } from '../../components';

const FavouritePage = () => {

    const [favourites, setFavourites] = useState([]);

    return <>
            <Header />
            { favourites ? <em>You have no shows saved.</em> : favourites.map(f => <ShowCard key={s["show"].id} data={s["show"]} />) }
           </>

}

export default FavouritePage;