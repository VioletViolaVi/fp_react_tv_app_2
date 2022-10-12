import axios from "axios";

export function addShowAction(show) {
  return {
    type: "ADD_SHOW",
    payload: show
  };
}

export function removeShowAction(id) {
  return {
    type: "REMOVE_SHOW",
    payload: id
  };
}

export function setLoadingAction(status) {
  return {
    type: "SET_LOADING",
    payload: status
  };
}

export function loadShowsAction(searchString) {
  return async (dispatch) => {
    try {
      const result = await axios.get(`https://api.tvmaze.com/search/shows?q=${searchString}`);
      dispatch({
        type: "LOAD_SHOWS",
        payload: result.data
      });
    } catch (err) {
      dispatch({
        type:"SET_ERROR",
        payload: err
      })
    }
  };
}
