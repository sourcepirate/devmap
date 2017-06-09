import { combineReducers } from "redux";
import maps from './maps';
import nodes from './node';
import feeds from './feeds';
import {notebook, showing} from './notebooks';
export const reducers = combineReducers({maps, nodes, feeds, notebook, showing});