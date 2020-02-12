import React from "react";
import Paginate from "../components/paginate";
import CounterHandler from "../components/paginate/helpers";

export const MockPaginate = () => {
  const lastPage = 5;
  const counter = CounterHandler(1, lastPage);

  return (
    <Paginate
      first={counter.toFirstPage}
      prev={counter.decrease}
      next={counter.increase}
      last={counter.toLastPage}
      initPage={counter.counter}
      lastPage={lastPage}
    />
  );
};
