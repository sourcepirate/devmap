import axios from 'axios';
import {
    put,
    call,
    takeEvery
} from 'redux-saga/effects';
import {
    browserHistory
} from 'react-router';


function getNote(id){
    return axios.get(`/notes/get/${id}`);
}

function getList(){
    return axios.get("notes/list");
}

function deleteNote(id){
    return axios.delete(`notes/delete/${id}`);
}

function createNote(name, content){
    const payload = {
        name,
        content
    };
    return axios.post("notes/create", payload);
}


function *getNotebooksTask(action){
    try{
        const result = yield call(getList);
        yield put({
            type: "UPDATE_NOTES",
            notes: result.data
        });
    }
    catch(e){
        yield put({
            type: "NOTIFY",
            message: "Unable to fetch notebooks"
        })
    }
}


function *createNotebookTask(action){
    try{
        const {name, content}= action.payload;
        const result = yield call(createNote, name, content);
        yield put({
            type: "NEW_NOTE",
            name: result.data.name,
            id: result.data.id
        })
        yield put({
            type: "NOTIFY",
            message: "Notebook created successfully"
        })
    }
    catch(e){
        yield put({
            type: "NOTIFY",
            message: "Unable to create notebooks"
        })
    }

}

function *getByIdTask(action){
    try{
        const {id} = action;
        const result = yield call(getNote, id);
        yield put({
            type: "SHOW_NOTE",
            note: result.data
        })
    }
    catch(e){
        yield put({
            type: "NOTIFY",
            message: "unable get notebook by id"
        })
    }
}

function *deleteNoteTask(action){
    try{
        const {id} = action;
        console.log("deleting", id);
        const result = yield call(deleteNote, id);
        yield put({
           type: "DELETE_NOTE",
           id: id 
        });
        yield put({
            type: "NOTIFY",
            message: "Notebook deleted successfully"
        })
    }
    catch(e){
        yield put({
            type: "NOTIFY",
            message: "Unable to delete notebook by id"
        });
    }
}

export function *viewNotebook(){
    yield takeEvery("VIEW_NOTEBOOK", getByIdTask);
}

export function *deleteNotebook(){
    yield takeEvery("DELETE_NOTEBOOK", deleteNoteTask);
}

export function *fetchNotebook(){
    yield takeEvery("FETCH_NOTEBOOKS", getNotebooksTask);
}

export function *createNotebook(){
    yield takeEvery("CREATE_NOTEBOOK", createNotebookTask);
}