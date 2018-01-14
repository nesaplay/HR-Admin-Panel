import { takeEvery, put, call } from 'redux-saga/effects';
import {
	FETCH_REPORTS,
	FETCH_REPORTS_SUCCESS,
	FETCH_REPORTS_ERROR
} from '../actions/types';
import { fetch } from '../services/fetch';

function* workerFetchReports(action) {
    try {
        const data = yield call(fetch, 'reports');
        yield put({ type: FETCH_REPORTS_SUCCESS, payload: data.data })
    } catch (error) {
        yield put({ type: FETCH_REPORTS_ERROR, payload: error.data })
    }
}

export default function* watcherFetchReports() {
	yield takeEvery(FETCH_REPORTS, workerFetchReports);
}
