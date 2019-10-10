import * as types from "./actionTypes";

const initialState = {
  quote: null,
  isFetching: false,
  error: ""
};

export const storeReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.FETCHING_QUOTE_START:
      return {
        ...state,
        isFetching: true,
        error: ""
      };
    case types.FETCHING_QUOTE_SUCCESS:
      return {
        ...state,
        quote: action.payload,
        isFetching: false
      };
    default:
      return state;
  }
};
