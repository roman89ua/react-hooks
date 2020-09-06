import React, { useState, useCallback } from "react";
import ItemList from './itemsForUseCallback';

const UseCallback = () => {
    const [count, setCount] = useState(1);
    const [col, setCol] = useState(false);

    const textCol = {
        color: col ? "red" : "black",
    };

    const generateItems = useCallback((someValue) => {
        return new Array(count).fill('').map((item, index) => `Element ${index + someValue}`)
    }, [count])

    return (
        <React.Fragment>
            <h2>useMemo</h2>
            <h4 style={textCol}>Number to calculate: {count}</h4>
            <button
                onClick={() => setCount((prev) => prev + 1)}
                type="button"
                className="btn btn-outline-success marginRight1rem"
            >
                Increase
      </button>
            <button
                onClick={() => setCol((prev) => !prev)}
                type="button"
                className="btn btn-outline-dark"
            >
                Change colour of the text
      </button>
            <ItemList getItems={generateItems} />
        </React.Fragment>
    );
};
export default UseCallback;
