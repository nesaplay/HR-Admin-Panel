import { combineReducers } from 'redux';
import search from './search_reducer';
import reports from './reports_reducer';
import remove from './delete_reducer';

const rootReducer = combineReducers({
    search,
    reports,
    remove
})

export default rootReducer;