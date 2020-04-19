import React from 'react';
import { hydrate, render } from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import { BrowserRouter } from 'react-router-dom'

const rootElement = document.getElementById('root');

if (rootElement && rootElement.hasChildNodes()) {
    hydrate(
        <BrowserRouter>
            <App />
        </BrowserRouter>,
        rootElement);
} else {
    render(
        <BrowserRouter>
            <App />
        </BrowserRouter>,
        rootElement);
}

serviceWorker.register();