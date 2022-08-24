import React, { useState } from 'react';

import { FavouriteButton } from '../'

const ShowCard = ({ data }) => {

    const [saved, setSaved] = useState(false);

    function toggleSaved () {
        setSaved(prev => !prev);
    }

    return <div className="show-card" role="figure">
                {data["image"] && <img src={data["image"]["medium"]}></img>}
                <h2>{data.name}</h2>
                <p role="paragraph">{data.summary}</p>
                <FavouriteButton status={saved ? "saved" : ""} action={toggleSaved} />
            </div>
}

export default ShowCard;