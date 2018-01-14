import { combineReducers } from 'redux';
import test from './test_reducer';
import reports from './reports_reducer';

const rootReducer = combineReducers({
    test,
    reports
})

export default rootReducer;