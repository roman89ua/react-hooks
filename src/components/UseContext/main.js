import React from "react";
import {useAlert} from './alert/AlertContext'

const Main = () => {
    const {toggle} = useAlert();
    return (
        <>
            <h1>Hello! This is an exemple of useContext hook</h1>
            <button onClick={toggle} className="btn btn-success">Show Alert</button>
        </>
    )
}
export default Main;
