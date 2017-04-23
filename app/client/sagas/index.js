import {
  createMapSaga
} from './mapsaga';

export default function* rootSaga() {
  console.log("sagas spawned");
  yield [
    createMapSaga()
  ];
}