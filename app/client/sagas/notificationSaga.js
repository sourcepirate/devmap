import {
    put,
    call,
    takeEvery
} from 'redux-saga/effects';
import {show, ACTION_TYPE} from 'js-snackbar';


function *notification(action){
   const {message} = action;
   show({text: message});
}


export default function* watch(){
    yield takeEvery("NOTIFY", notification);
}