import axios from 'axios';
import {
    put,
    call,
    takeEvery
} from 'redux-saga/effects';
import {
    browserHistory
} from 'react-router';

function editNode(id, parent, data) {
    return axios.put(`/api/${id}/edit/${parent}`, data);
}

function* editNodeDetails(action) {
    const {
        id,
        parent,
        data
    } = action.payload;
    try {
        const result = yield call(editNode, id, parent, data);
        console.log(result);
        yield put({
            type: 'FETCH_MAPS'
        });
        yield put({
            type: "NOTIFY",
            message: "Node updated done successfully"
        });
        browserHistory.goBack();
    } catch (e) {
        yield put({
            type: "NOTIFY",
            message: "Error while updating node info"
        });
    }
}

function addNode(id, parent, data) {
    return axios.post(`/api/${id}/add/${parent}`, data);
}

function removeNode(id, parent){
    return axios.delete(`/api/${id}/delete/${parent}`);
}

function* addNodeDetails(action) {
    const {
        id,
        parent,
        data
    } = action.payload;
    try {
        const result = yield call(addNode, id, parent, data);
        console.log(result);
        yield put({
            type: 'FETCH_MAPS'
        });
        yield put({
            type: "NOTIFY",
            message: "Node updated done successfully"
        });
        browserHistory.goBack();
    } catch (e) {
        yield put({
            type: "NOTIFY",
            message: "Error while updating node info"
        });
    }
}

function* removeNodeDetails(action) {
    const {
        id,
        parent
    } = action.payload;
    try {
        const result = yield call(removeNode, id, parent);
        yield put({
            type: 'FETCH_MAPS'
        });
        yield put({
            type: "NOTIFY",
            message: "Node updated done successfully"
        });
        browserHistory.goBack();

    } catch (e) {
        yield put({
            type: "NOTIFY",
            message: "Error while updating node info"
        });
    }
}



export function* editNodeForTree() {
    yield takeEvery('EDIT_TREE_NODE', editNodeDetails);
}

export function* addNodeForTree() {
    yield takeEvery('CREATE_TREE_NODE', addNodeDetails);
}

export function* removeNodeForTree(){
    yield takeEvery('REMOVE_TREE_NODE', removeNodeDetails);
}