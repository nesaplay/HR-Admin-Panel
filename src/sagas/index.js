import { all } from 'redux-saga/effects';

import logger from './logger';
import reports from './reports';
import search from './search';
import remove from './delete';

export default function* rootSaga() {
	yield all([logger(), reports(), search(), remove()]);
}
