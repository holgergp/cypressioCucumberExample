import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.scss';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {applyMiddleware, createStore} from 'redux';
import rootReducer from './reducer';
import logger from 'redux-logger';
const store = createStore(
    rootReducer,
    applyMiddleware(logger)
);

ReactDOM.render(<App store={store}/>, document.getElementById('root'));
// expose store when run in Cypress
if (window.Cypress) {
    window.store = store;
}
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
