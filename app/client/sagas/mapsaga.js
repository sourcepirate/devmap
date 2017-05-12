import axios from 'axios';
import {
    browserHistory
} from 'react-router';
import {
    put,
    call,
    takeEvery
} from 'redux-saga/effects';

function getMaps() {
    return axios.get("/api/list");
}

function* getMapDetails() {
    const results = yield call(getMaps);
    // console.log(results.data);
    yield put({
        type: 'UPDATE_MAPS',
        maps: results.data
    });
}

export function* createMapSaga() {
    yield takeEvery('FETCH_MAPS', getMapDetails);
}

function createMap(payload){
    return axios.post('/api/new', payload);
}

function* createNewMap(action){
    try{
        const results = yield call(createMap, action.data);
        yield put({
            type: 'FETCH_MAPS'
        });
        yield put({
            type: "NOTIFY",
            message: "Map Creates Successfully"
        })
        browserHistory.goBack();
    }
    catch(e){
        yield put({
            type: "NOTIFY",
            message: "Failed Creating New Map"
        })
    }
}

export function *newMapSaga(){
    yield takeEvery("NEW_MAP", createNewMap)
}

function deleteMap(id){
    return axios.delete(`/api/delete/${id}`)
}


function *deleteMapDetails(action){
    try{
        const result = yield call(deleteMap, action.id);
        console.log(result);
        yield put({type: 'FETCH_MAPS'})
        yield put({type: 'NOTIFY', message: "Deleted Successfully"})
        browserHistory.goBack()
    }
    catch(e){
        yield put({type: 'NOTIFY', message: "Failed To delete"})
    }
}

export function *deleteMapSage(){
    yield takeEvery("REMOVE_MAP", deleteMapDetails);
}