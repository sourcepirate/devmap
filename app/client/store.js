import { createStore, applyMiddleware, compose } from "redux";
import { reducers } from "./reducers/index";
import createLogger from "redux-logger";
import createSagaMiddleware from 'redux-saga'
import rootSaga from './sagas';
let enhancers;
const sagaMiddleWare = createSagaMiddleware();
const middleware = applyMiddleware(sagaMiddleWare);
const composeEnhancers =
  typeof window === 'object' &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?   
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
      // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
    }) : compose;
if(process.env.NODE_ENV == 'production'){
  enhancers =  composeEnhancers(middleware);
}
else{
  enhancers =  composeEnhancers(middleware);
}
const store = createStore(reducers, {}, enhancers);
sagaMiddleWare.run(rootSaga);
export default store;