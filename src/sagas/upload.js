import { takeEvery, call, put } from 'redux-saga/effects';
import { fetch } from '../services/fetch';
import { UPLOAD_REPORT, UPLOAD_REPORT_ERROR, UPLOAD_REPORT_SUCCESS } from '../actions/types';

function* workerUploadReport({ report }) {
    const options = {
        method: 'post',
        url: 'reports',
        data: report
    }

    try {
        const data = yield call(fetch, options);
        yield put({ type: UPLOAD_REPORT_SUCCESS, data: data.data })    
    } catch(error) {
        yield put({ type: UPLOAD_REPORT_ERROR, error })
    }
}

export default function* watcherUploadReport() {
    yield takeEvery(UPLOAD_REPORT, workerUploadReport)
}