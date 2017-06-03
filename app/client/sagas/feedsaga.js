import axios from 'axios';
import {
    put,
    call,
    takeEvery
} from 'redux-saga/effects';

function getFeeds(id){
    const feedUrl = `/api/${id}/feeds`;
    return axios.get(feedUrl);
}

function parseFeeds(response) {
    let hits = response.map((value) => (value.hits));
    let feeds = hits.reduce((acc, x) => acc.concat(x));
    let parsed_feeds = feeds.map((value, i) => ({title: value.title || value.story_title, url: value.url || value.story_url, id: i}));
    console.log(parsed_feeds);
    return parsed_feeds;
}

function *fetchFeeds(action){
    const {id} = action;
    try{
        const result = yield call(getFeeds, id);
        const feeds = parseFeeds(result.data);
        yield put({
            type: "UPDATE_FEEDS",
            feeds
        })
    }
    catch(e){
        console.error(e);
        yield put({
            type: "NOTIFY",
            message: "Error while fetching feeds"
        })
    }
}


export default function *feedSaga(){
    yield takeEvery('FETCH_FEEDS', fetchFeeds);
}