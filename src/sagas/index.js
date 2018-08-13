import { takeEvery, put } from 'redux-saga/effects';

// worker saga
function* workerSaga() {
  console.log('her from workers');
  yield put({type:'ACTION_FROM_WORKER'});
}

// watcher saga
function* rootSaga() {
  yield takeEvery('HELLO', workerSaga);
}

// watch saga listens to actions, then invokes worker saga

export default rootSaga;