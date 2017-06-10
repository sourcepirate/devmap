import {
  createMapSaga,
  newMapSaga,
  deleteMapSage
} from './mapsaga';
import {editNodeForTree,addNodeForTree, removeNodeForTree} from './nodesaga';
import NotifySaga from './notificationSaga';
import FeedSaga from './feedsaga';
import {
  createNotebook,
  viewNotebook,
  deleteNotebook,
  fetchNotebook
} from './notebooksaga';

export default function* rootSaga() {
  yield [
    createMapSaga(),
    editNodeForTree(),
    addNodeForTree(),
    removeNodeForTree(),
    NotifySaga(),
    newMapSaga(),
    deleteMapSage(),
    FeedSaga(),
    createNotebook(),
    viewNotebook(),
    deleteNotebook(),
    fetchNotebook()
  ];
}