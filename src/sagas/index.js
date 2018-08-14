import imagesSaga from './imagesSaga';
import { takeEvery, put, take, call } from 'redux-saga/effects';

import { IMAGES } from '../constants';

// worker saga
function* handleImagesLoad() {
  console.log('getching');
}

// watcher saga: listens for actions and then calls whatever sagas it needs
function* rootSaga() {
  yield takeEvery(IMAGES.LOAD, handleImagesLoad);
}


export default imagesSaga;