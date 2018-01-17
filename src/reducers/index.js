import { combineReducers } from 'redux';
import search from './search_reducer';
import reports from './reports_reducer';
import util from './utility_reducer';
import wizzard from './wizzard_reducer';

const rootReducer = combineReducers({
	search,
	reports,
	util,
	wizzard,
});

export default rootReducer;
