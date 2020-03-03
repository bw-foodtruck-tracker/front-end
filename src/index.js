import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { createStore, compose, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import { BrowserRouter as Router } from "react-router-dom";
import thunk from 'redux-thunk';
import * as serviceWorker from './serviceWorker';


//allows all users to view app
const store = createStore(compose (
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ 
        && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__() || compose
))

ReactDOM.render(
    <Provider store={store}>
        <Router>
        <App />
        </Router>
    </Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
