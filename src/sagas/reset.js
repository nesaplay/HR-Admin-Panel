import { takeLatest, put } from 'redux-saga/effects';
import { STAGE_UP, STAGE_DOWN, SEARCH_RESET } from '../actions/types';

function* workerResetStage() {
    yield put({ type: SEARCH_RESET });
}

export default function* watcherResetStage() {
	yield takeLatest(
		({ type }) => type === STAGE_DOWN || type === STAGE_UP,
		workerResetStage
	);
}
