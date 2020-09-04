import React, { useState } from "react";

/*some very heavy calculations*/
function calculateSomeValue() {
  console.log("Calculation...");
  return Math.floor(Math.random() * 100);
}

const UseState = () => {
  // const [counter, setCounter] = useState(0);
  // const [counter, setCounter] = useState(calculateSomeValue());// bad way
  const [counter, setCounter] = useState(() => calculateSomeValue()); // good way

  const [state, setState] = useState({
    title: "Some title",
    date: new Date(),
  });

  const increment = () => {
    setCounter(counter + 1);
  };
  const incrementTwo = () => {
    setCounter((prev) => {
      return prev + 1;
    });
    setCounter((prev) => prev + 1);
  };
  const decrement = () => {
    setCounter(counter - 1);
  };

  const changeObjValue = () => {
    setState({
      ...state,
      title: "new value of title field",
    });
  };

  return (
    <>
      <h2>useState</h2>
      <h4>Counter: {counter}</h4>
      <button
        onClick={incrementTwo}
        type="button"
        className="btn btn-primary marginRight1rem"
      >
        Increment two times
      </button>
      <button
        onClick={increment}
        type="button"
        className="btn btn-primary marginRight1rem"
      >
        Increment
      </button>
      <button onClick={decrement} type="button" className="btn btn-danger ">
        Decrement
      </button>

      <h4>Work with objects</h4>

      <pre>{JSON.stringify(state, null, 2)}</pre>
      <button
        onClick={changeObjValue}
        type="button"
        className="btn btn-warning"
      >
        Change value of object
      </button>
    </>
  );
};

export default UseState;
