import React from 'react';

const ShowCard = ({ data }) => {

    return <div className="show-card">
                {data["image"] && <img src={data["image"]["medium"]}></img>}
                <h2>{data.name}</h2>
                <p role="paragraph">{data.summary}</p>
            </div>
}

export default ShowCard;