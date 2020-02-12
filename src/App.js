import React from "react";
import CounterHandler from "./components/paginate/helpers";
import Paginate from "./components/paginate";

function App() {
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
}

export default App;
