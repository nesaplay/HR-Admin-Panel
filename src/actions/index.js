import { SEARCH_INIT, FETCH_REPORTS, DELETE_REPORT } from './types';

export const searchReports = query => ({ type: SEARCH_INIT, payload: query });
export const deleteReport = id => ({ type: DELETE_REPORT, payload: id })
export const fetchReports = () => ({ type: FETCH_REPORTS });
