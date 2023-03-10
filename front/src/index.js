import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import ProjectRouter from "./ProjectRouter";
import './bootstrap.min.css';
import {createStore} from "redux";
import reducer from "./store";
import {Provider, useSelector} from "react-redux";
import {persistStore} from "redux-persist";
import {PersistGate} from "redux-persist/integration/react";
import "./Fonts/Font.css";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById('root'));
const store = createStore(reducer);


root.render(
    <React.StrictMode>
        <Provider store={store}>
            <ProjectRouter/>
        </Provider>
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();