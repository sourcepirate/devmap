import React from 'react';
import {render} from 'react-dom';
import routes from './routes';
import {Provider} from 'react-redux';
import store from './store';

render((<Provider store={store}>{routes}</Provider>), document.getElementById("app"));