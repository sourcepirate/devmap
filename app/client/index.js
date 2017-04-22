import React from 'react';
import {
    render
}
from 'react-dom';
import routes from './routes';
import {
    Provider
}
from 'react-redux';
import store from './store';

if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('./sw.js')
        .then(() => console.log('Service worker registered'))
        .catch(err => console.log(`Service worker registration failed! ${err}`))
}


render((<Provider store={store}>{routes}</Provider>), document.getElementById("app"));
