import { takeEvery, call, put } from 'redux-saga/effects';
import {
	DELETE_REPORT,
	DELETE_REPORT_SUCCESS,
	DELETE_REPORT_ERROR
} from '../actions/types';
import { fetch } from '../services/fetch';

function* workerDeleteReport({ payload }) {
	const options = {
		method: 'delete',
		url: `reports/${payload}`
	};

	try {
		yield call(fetch, options);
		yield put({ type: DELETE_REPORT_SUCCESS });
	} catch (error) {
		yield put({ type: DELETE_REPORT_ERROR, error: error.data });
	}
}

export default function* watcherDeleteReport() {
	yield takeEvery(DELETE_REPORT, workerDeleteReport);
}
