import axios from "axios";
import * as types from "./actionTypes";

export const getQuote = () => dispatch => {
  dispatch({ type: types.FETCHING_QUOTE_START });
  axios
    .get("https://api.kanye.rest")
    .then(res => {
      dispatch({ type: types.FETCHING_QUOTE_SUCCESS, payload: res.data.quote });
    })
    .catch(err => {
      dispatch({
        type: types.FETCHING_QUOTE_FAILURE,
        payload: `${err.response.message} code: ${err.response.code}`
      });
    });
};
