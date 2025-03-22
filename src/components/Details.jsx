import React from "react";
export default function details({props}) {
    return(
        <>
            <div id='temp'> temprature : {props.main?.temp??'Not Available'} </div>   
            <div id='humidity'>humidity : {props.main?.humidity !=null ? `${props.main.humidity}%` : 'Not Available'}</div>
            <div id='feels_like'>feels like : {props.main?.feels_like??"Not Available"}</div>
        </>
    )
};