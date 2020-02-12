import React from "react";

export const CounterHandler = (pageStart, pageEnd) => {
  const [counter, setCounter] = React.useState(pageStart);
  const increase = () => (counter === pageEnd ? null : setCounter(counter + 1));
  const decrease = () =>
    counter === pageStart ? null : setCounter(counter - 1);
  const toLastPage = () => setCounter(pageEnd);
  const toFirstPage = () => setCounter(pageStart);

  return {
    counter,
    increase,
    decrease,
    toFirstPage,
    toLastPage
  };
};
