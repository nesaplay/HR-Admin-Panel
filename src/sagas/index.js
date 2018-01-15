import { all } from 'redux-saga/effects';

import logger from './logger';
import reports from './reports';

export default function* rootSaga() {
	yield all([logger(), reports()]);
}
