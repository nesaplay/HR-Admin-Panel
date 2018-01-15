import { takeEvery, put, call } from 'redux-saga/effects';
import {
	FETCH_REPORTS,
	FETCH_REPORTS_SUCCESS,
	FETCH_REPORTS_ERROR
} from '../actions/types';
import { fetch } from '../services/fetch';

function* workerFetchReports(action) {
    const options = {
        method: 'get',
        url: 'reports'
    }
    
    try {
        const data = yield call(fetch, options);
        yield put({ type: FETCH_REPORTS_SUCCESS, payload: data.data })
    } catch (error) {
        yield put({ type: FETCH_REPORTS_ERROR, error: error.data })
    }
}

export default function* watcherFetchReports() {
	yield takeEvery(FETCH_REPORTS, workerFetchReports);
}
