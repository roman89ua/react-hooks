import React, {useEffect, useState} from 'react';

function useLogger(value) {
    useEffect(() => {
        console.log('Value changed: ', value)
    }, [value])
}

function useInput (initialValue) {
    const [state, setState] = useState(initialValue);
    const onChange = (event) => {
        setState(event.target.value)
    }
    return {
        value: state,
        onChange
    }
}

const UseCustomHook = () => {
    const name = useInput('');
    const surname = useInput('');

    useLogger(name.value);

    return (
        <div className="container">
            <h1>Custom Hook</h1>
            <label className={"p-3"}>Name:
                <input type="text" value={name.value} onChange={name.onChange} />
                <h3>{ name.value }</h3>
            </label>
            <br/>
            <label className={"p-3"}>Surname:
                <input type="text" value={surname.value} onChange={surname.onChange} />
                <h3>{ surname.value }</h3>
            </label>

        </div>
    )
};
export default UseCustomHook;
