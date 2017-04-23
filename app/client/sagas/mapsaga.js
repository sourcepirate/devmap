import axios from 'axios';
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