import React, { useRef, useState, useEffect } from "react";

const UseRef = () => {
  const [valuee, setValue] = useState("");
  const renderCount = useRef(0);

  const inputRef = useRef(null); /*reference on input */

  const prevValue = useRef(""); /* geting previous value of valuee */

  useEffect(() => {
    renderCount.current++;
    console.log(inputRef.current.value);
  });

  useEffect(() => {
    /* geting previous value of valuee */
    prevValue.current = valuee;
  }, [valuee]);

  /*Focuse input by useRef */
  const focusInput = () => inputRef.current.focus();
  return (
    <React.Fragment>
      <h2>useRef</h2>
      <h4 /* geting previous value of valuee*/>
        Numbers of renders (changes): {renderCount.current}
      </h4>

      <h4>Previous value of valuee verieble: {prevValue.current}</h4>
      <input
        ref={inputRef} /*reference on input */
        type="text"
        onChange={(event) => setValue(event.target.value)}
        value={valuee}
      />
      <button onClick={focusInput} className="btn btn-warning">
        Focus input
      </button>
    </React.Fragment>
  );
};

export default UseRef;
