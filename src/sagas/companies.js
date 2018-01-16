import { takeEvery, call, put } from 'redux-saga/effects';
import {
	FETCH_COMPANIES,
	FETCH_COMPANIES_ERROR,
	FETCH_COMPANIES_SUCCESS
} from '../actions/types';
import { fetch } from '../services/fetch';

function* workerFetchCompanies() {
	const options = {
		method: 'get',
		url: 'companies'
	};

	try {
		const data = yield call(fetch, options);
		yield put({ type: FETCH_COMPANIES_SUCCESS, payload: data.data });
	} catch (error) {
		yield put({ type: FETCH_COMPANIES_ERROR, error });
	}
}

export default function* watcherFetchCompanies() {
	yield takeEvery(FETCH_COMPANIES, workerFetchCompanies);
}
