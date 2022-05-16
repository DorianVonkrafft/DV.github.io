import * as React from 'react';
import { StrictMode } from "react";
import ReactDOM from "react-dom";
import App from './Views/app';


const rootElement = document.getElementById("root");
ReactDOM.render(
    <StrictMode>
        <App />
    </StrictMode>,
    rootElement
);

