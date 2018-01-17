import {
	SEARCH_INIT,
	FETCH_REPORTS,
	DELETE_REPORT,
	FETCH_USERS,
	FETCH_COMPANIES,
	USER_SELECTED,
	COMPANY_SELECTED,
	STAGE_UP,
	STAGE_DOWN,
	WIZZARD_RESET,
	UPLOAD_REPORT
} from './types';

// Action creators
export const deleteReport = id => ({ type: DELETE_REPORT, payload: id });
export const uploadReport = report => ({ type: UPLOAD_REPORT, report });
export const fetchReports = () => ({ type: FETCH_REPORTS });

export const fetchUsers = () => ({ type: FETCH_USERS });
export const userSelected = (id) => ({ type: USER_SELECTED, id });

export const fetchCompanies = () => ({ type: FETCH_COMPANIES });
export const companySelected = (id) => ({ type: COMPANY_SELECTED, id });

export const stageUp = () => ({ type: STAGE_UP });
export const stageDown = () => ({ type: STAGE_DOWN });
export const searching = query => ({ type: SEARCH_INIT, payload: query });
export const resetWizzard = () => ({ type: WIZZARD_RESET });
