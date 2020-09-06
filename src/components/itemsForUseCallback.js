import React, { useState, useEffect } from 'react';


export default function ItemList({ getItems }) {

    const [items, setItems] = useState([]);

    useEffect(() => {
        const newItems = getItems(100);// the parameter 100 that we use in getItems function is generateItems = useCallback((parameter))
        setItems(newItems);
    }, [getItems]);


    return (
        <React.Fragment>
            <ul>
                {items.map(item => <li key={item}>{item}</li>)}
            </ul>
        </React.Fragment>

    )
}
