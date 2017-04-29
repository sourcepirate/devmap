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
import Sloader from './serviceloader';

// if ('serviceWorker' in navigator) {
//     const loader = new Sloader('./sw.js');
//     loader.on('update', function(reg){
//         console.log('updating');
//         reg.postMessage({
//             action: 'skip'
//         });
//     });
//     loader.on('installed', () => {console.log("installed")});
// }
render((<Provider store={store}>{routes}</Provider>), document.getElementById("app"));
