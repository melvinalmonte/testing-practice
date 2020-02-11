import React from "react";
import CounterHandler from "./components/button/helpers";
import Button from "./components/button";

function App() {
  const counter = CounterHandler(0);

  return (
    <div className="App">
      <Button btnTitle="increase" btnAction={counter.increase} />
      <Button btnTitle="decrease" btnAction={counter.decrease} />
      <h1>counter: {counter.counter}</h1>
    </div>
  );
}

export default App;
