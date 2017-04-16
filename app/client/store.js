import { createStore, applyMiddleware, compose } from "redux";
import DevTools from "./devtool";
import { reducers } from "./reducers/index";
import createLogger from "redux-logger";
import createSagaMiddleware from 'redux-saga'
import rootSaga from './sagas';
let enhancers;
const sagaMiddleWare = createSagaMiddleware();
const middleware = applyMiddleware(sagaMiddleWare);
if(process.env.NODE_ENV == 'production'){
  enhancers =  compose(middleware);
}
else{
  enhancers =  compose(middleware, DevTools.instrument());
}
const store = createStore(reducers, {}, enhancers);
sagaMiddleWare.run(rootSaga);
export default store;