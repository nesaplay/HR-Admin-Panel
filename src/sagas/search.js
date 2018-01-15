import { put, call, takeLatest } from 'redux-saga/effects';
import { delay } from 'redux-saga';
import { SEARCH_INIT, SEARCH_RENDER } from '../actions/types';

function* workerSearchReports({ payload }) {
	yield call(delay, 300);
	yield put({ type: SEARCH_RENDER, payload });
}

export default function* watcherSearchReports() {
	yield takeLatest(SEARCH_INIT, workerSearchReports);
}
