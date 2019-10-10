import React, { useEffect } from "react";
import { connect } from "react-redux";
import * as actionCreators from "../state/actionCreators";

const Quotes = ({ getQuote, quote, isFetching }) => {
  useEffect(() => {
    getQuote();
  }, []);

  if (isFetching) {
    return <h2>Fetching quote for ya!</h2>;
  }

  return (
    <>
      <h2>Kanye says: {quote}</h2>
      <button onClick={getQuote}>Get new quote</button>
    </>
  );
};

export default connect(
  state => state,
  actionCreators
)(Quotes);
