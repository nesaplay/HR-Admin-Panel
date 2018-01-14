import { takeEvery, select } from 'redux-saga/effects';

function* workerLogger(action) {
    const state = yield select();

    console.log('action', action);
    console.log('state after', state);
}

export default function* watcherLogger() {
    yield takeEvery('*', workerLogger)
}