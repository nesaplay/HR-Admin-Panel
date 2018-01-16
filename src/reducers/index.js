import { combineReducers } from 'redux';
import search from './search_reducer';
import reports from './reports_reducer';
import remove from './delete_reducer';
import wizzard from './wizzard_reducer';

const rootReducer = combineReducers({
	search,
	reports,
	remove,
	wizzard
});

export default rootReducer;
