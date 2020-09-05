import React, { useState, useMemo, useEffect } from "react";

function someComplexCalculations(numb) {
  console.log(someComplexCalculations.name);
  let i = 0;
  while (i < 1000000000) i++;
  return numb * 2;
}

const UseMemo = () => {
  const [numb, setNumb] = useState(42);
  const computed = useMemo(() => {
    return someComplexCalculations(numb);
  }, [numb]);
  const [col, setCol] = useState(false);

  const textCol = useMemo(() => {
    return {
      color: col ? "red" : "black",
    };
  }, [col]);

  useEffect(() => {
    console.log("textCol has been rerendered");
  }, [textCol]);

  return (
    <React.Fragment>
      <h2>useMemo</h2>
      <h4 style={textCol}>Number to calculate: {computed}</h4>
      <button
        onClick={() => setNumb((prev) => prev + 1)}
        type="button"
        className="btn btn-outline-success marginRight1rem"
      >
        Increase
      </button>
      <button
        onClick={() => setNumb((prev) => prev - 1)}
        type="button"
        className="btn btn-outline-danger marginRight1rem"
      >
        Decrease
      </button>
      <button
        onClick={() => setCol((prev) => !prev)}
        type="button"
        className="btn btn-outline-dark"
      >
        Change colour of the text
      </button>
    </React.Fragment>
  );
};
export default UseMemo;
