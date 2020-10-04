import React from 'react';
import Main from './main';
import Alert from "./alert/Alert";
import {AlertProvider} from "./alert/AlertContext";

const UseContext = () => {

    return (
        <AlertProvider>
            <div className='container'>
                <Alert />
                <h1>UseContext</h1>
                <Main />
            </div>
        </AlertProvider>
    )
}
export default UseContext;