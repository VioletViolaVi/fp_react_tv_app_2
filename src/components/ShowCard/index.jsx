import React from 'react';

const ShowCard = ({ data }) => {

    return <div className="show-card">
                <img src={ data["image"] ? data["image"]["medium"] : ""}></img>
                <h2>{data.name}</h2>
                <p dangerouslySetInnerHTML={{__html: data.summary}}></p>
            </div>
}

export default ShowCard;