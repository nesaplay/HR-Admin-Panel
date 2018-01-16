import {
	SEARCH_INIT,
	FETCH_REPORTS,
	DELETE_REPORT,
	FETCH_USERS,
	FETCH_COMPANIES,
	USER_SELECTED,
	COMPANY_SELECTED,
	STAGE_UP,
	STAGE_DOWN
} from './types';

// Action creators
export const searchReports = query => ({ type: SEARCH_INIT, payload: query });
export const deleteReport = id => ({ type: DELETE_REPORT, payload: id });
export const fetchReports = () => ({ type: FETCH_REPORTS });
export const fetchUsers = () => ({ type: FETCH_USERS });
export const fetchCompanies = () => ({ type: FETCH_COMPANIES });
export const userSelected = (id) => ({ type: USER_SELECTED, id });
export const companySelected = (id) => ({ type: COMPANY_SELECTED, id });
export const stageUp = () => ({ type: STAGE_UP });
export const stageDown = () => ({ type: STAGE_DOWN });
