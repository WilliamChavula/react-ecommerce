import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { PersistGate } from 'redux-persist/integration/react'

import {store, persistor } from './redux/store'

import App from './App';

import {GlobalStyles} from "./global.styles";


ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <PersistGate persistor={persistor}>
                <GlobalStyles />
                <App />
            </PersistGate>
        </BrowserRouter>
    </Provider>,
  document.getElementById('root')
);