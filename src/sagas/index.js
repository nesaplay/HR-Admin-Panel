import { all } from 'redux-saga/effects';

import logger from './logger';

export default function* rootSaga() {
    yield all([
        logger()
    ])
}