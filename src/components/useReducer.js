import React, { useReducer } from "react";

const ACTION = {
  INCREMENT: "increment",
  DECREMENT: "decrement",
};

function reducer(state, action) {
  switch (action.type) {
    case ACTION.INCREMENT:
      return { count: state.count + 1 };
    case ACTION.DECREMENT:
      return { count: state.count - 1 };
    default:
      return state;
  }
}
export default function UseReducer() {
  const [state, dispatch] = useReducer(reducer, { count: 0 });
  //   const [count, setCount] = useState(0);

  function increase() {
    dispatch({ type: ACTION.INCREMENT });
    // setCount(() => {
    //   return count + 1;
    // });
  }
  function decrease() {
    dispatch({ type: ACTION.DECREMENT });
    // setCount(() => {
    //   return count - 1;
    // });
  }
  return (
    <React.Fragment>
      <h2>useReducer</h2>
      <button
        onClick={increase}
        type="button"
        className="btn btn-outline-success"
      >
        Success
      </button>
      <h4>{state.count}</h4>
      <button
        onClick={decrease}
        type="button"
        className="btn btn-outline-danger"
      >
        Danger
      </button>
    </React.Fragment>
  );
}
