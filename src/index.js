import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './App.css';
import AppMachine from './components/AppMachine'
import * as serviceWorker from './serviceWorker';
import devToolsEnhancer from 'remote-redux-devtools';
//IMPORT REDUX
import { Provider } from 'react-redux'
import { createStore } from "redux";
import rootReducer from "./redux/reducers";
import store from './redux/store/store';


ReactDOM.render(
    <Provider store={store}>
      <AppMachine/>
    </Provider> , document.getElementById('drum-machine')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
