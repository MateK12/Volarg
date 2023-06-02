import React from 'react';
import ReactDOM from 'react-dom/client';

export function Prueba_props(props) {
    console.log(props)
    return <>
    <h1>{props}</h1>
    </>
}