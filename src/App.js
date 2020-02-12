import React from "react";
import CounterHandler from "./components/paginate/helpers";
import Paginate from "./components/paginate";

function App() {
  const lastPage = 10;
  const counter = CounterHandler(1, lastPage);

  return (
    <div>
      <h1>
        This is a little pagination toy. Click whichever button fancies you.
      </h1>
      <Paginate
        first={counter.toFirstPage}
        prev={counter.decrease}
        next={counter.increase}
        last={counter.toLastPage}
        initPage={counter.counter}
        lastPage={lastPage}
      />
    </div>
  );
}

export default App;
