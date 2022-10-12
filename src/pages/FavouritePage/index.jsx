import React from "react";
import { useSelector } from "react-redux";

import { Header, ShowCard } from "../../components";

const FavouritePage = () => {
  const favourites = useSelector((state) => {
    // console.log("HERE ==> ", state);
    return state.watchList;
  });

  return (
    <>
      <Header />
      {favourites ? (
        favourites.map((singleObj) => {
        //   console.log("HERE ==> ", singleObj);
          return <ShowCard key={singleObj.id} data={singleObj} />;
        })
      ) : (
        <em>You have no shows saved.</em>
      )}
    </>
  );
};

export default FavouritePage;
