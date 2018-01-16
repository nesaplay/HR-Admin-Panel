import { put, call, takeEvery } from 'redux-saga/effects';
import {
	FETCH_USERS,
	FETCH_USERS_ERROR,
	FETCH_USERS_SUCCESS
} from '../actions/types';
import { fetch } from '../services/fetch';

function* workerFetchUsers(action) {
	const options = {
		method: 'get',
		url: 'candidates'
	};
	try {
		const data = yield call(fetch, options);
		yield put({ type: FETCH_USERS_SUCCESS, payload: data.data });
	} catch (error) {
		yield put({ type: FETCH_USERS_ERROR, error });
	}
}

export default function* watcherFetchUsers() {
	yield takeEvery(FETCH_USERS, workerFetchUsers);
}
