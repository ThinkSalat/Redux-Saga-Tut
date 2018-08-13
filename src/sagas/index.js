import { takeEvery, put, take, call } from 'redux-saga/effects';

// worker saga
function* workerSaga() {
  yield put({type:'ACTION_FROM_WORKER'});
}

// watcher saga
function* rootSaga() {
  yield take('LOGIN');
  yield call(workerSaga);
  // yield take('ADD_TO_CART');
  // yield take('BUY');
  yield take('LOGOUT');
}

// watch saga listens to actions, then invokes worker saga

export default rootSaga;