import React from "react";
import {useAlert} from "./AlertContext";

export default function () {
    const alert = useAlert();


    if(!alert.visible) return null;
    return (
        <div className={'alert alert-danger'} onClick={alert.toggle}>
            This is very important message!
        </div>
    )
}