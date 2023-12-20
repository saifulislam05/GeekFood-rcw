import React from "react";
import SingleQuote from "./SingleQuote";
import quoteList from "../../Data/Quotes.json";

const QuotesList = () => {
  return (
    <div className="max-w-screen-xl mx-auto [column-fill:_balance] columns-1 px-4 md:px-6  md:columns-2  gap-6 my-8 ">
      {quoteList.map((quote, index) => {
        return <SingleQuote key={index} {...quote} />;
      })}
    </div>
  );
};

export default QuotesList;
