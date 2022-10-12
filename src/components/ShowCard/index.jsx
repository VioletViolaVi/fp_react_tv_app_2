import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { addShowAction, removeShowAction } from '../../actions';
import { FavouriteButton } from '../'

const ShowCard = ({ data }) => {

    const saved  = useSelector(state => state.watchList.some(show => show.id === data.id));
    const dispatch = useDispatch();

    function toggleSaved () {
        if (saved) {
        dispatch(removeShowAction(data.id));
            
        } else {
        dispatch(addShowAction(data));
            
        }
    }

    return <div className="show-card" role="figure">
                {/* {console.log("HERE ==> ", data)} */}
                {data["image"] && <img src={data["image"]["medium"]}></img>}
                <h2>{data.name}</h2>
                <p role="paragraph">{data.summary}</p>
                <FavouriteButton status={saved ? "saved" : ""} action={toggleSaved} />
            </div>
}

export default ShowCard;
