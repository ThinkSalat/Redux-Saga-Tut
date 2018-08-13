import { takeEvery, put, take, call } from 'redux-saga/effects';

import { IMAGES } from '../constants';

// worker saga
function* handleImagesLoad() {
  console.log('getching');
}

// watcher saga
function* rootSaga() {
  takeEvery(IMAGES.LOAD, handleImagesLoad);
}

// watcher saga listens to actions, then invokes worker saga

export default rootSaga;