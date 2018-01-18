import {
	FETCH_USERS,
	FETCH_USERS_SUCCESS,
	FETCH_USERS_ERROR,
	USER_SELECTED,
	STAGE_UP,
	STAGE_DOWN,
	FETCH_COMPANIES,
	FETCH_COMPANIES_SUCCESS,
	FETCH_COMPANIES_ERROR,
	COMPANY_SELECTED,
	WIZZARD_RESET,
	REPORT_DATE_ERROR,
	REPORT_NOTE_ERROR,
	REPORT_VALIDATED
} from '../actions/types';

const initState = {
	stage: 1,
	users: {
		data: [],
		isLoading: false,
		isLoaded: false,
		isSelected: false,
		selectedUser: null,
		error: null
	},
	companies: {
		data: [],
		isLoading: false,
		isLoaded: false,
		isSelected: false,
		selectedCompany: null,
		error: null
	},
	report: {
		date: null,
		note: null,
		isCompleted: false,
		error: false
	}
};

export default function(state = initState, action) {
	switch (action.type) {
		// Users sub-reducer
		case FETCH_USERS:
			return {
				...state,
				users: {
					...state.users,
					isLoading: true,
					isLoaded: false,
					isSelected: false,
					selectedUser: null,
					error: null
				}
			};
		case FETCH_USERS_SUCCESS:
			return {
				...state,
				users: {
					...state.users,
					data: action.payload,
					isLoading: false,
					isLoaded: true,
					error: null
				}
			};
		case FETCH_USERS_ERROR:
			return {
				...state,
				users: {
					...state.users,
					isLoading: false,
					isLoaded: true,
					isSelected: false,
					selectedUser: null,
					error: action.error
				}
			};

		// Companies sub-reducer
		case FETCH_COMPANIES:
			return {
				...state,
				companies: {
					...state.companies,
					isLoading: true,
					isLoaded: false,
					isSelected: false,
					selectedUser: null,
					error: null
				}
			};
		case FETCH_COMPANIES_SUCCESS:
			return {
				...state,
				companies: {
					...state.companies,
					data: action.payload,
					isLoading: false,
					isLoaded: true,
					error: null
				}
			};
		case FETCH_COMPANIES_ERROR:
			return {
				...state,
				companies: {
					...state.companies,
					isLoading: false,
					isLoaded: true,
					isSelected: false,
					selectedUser: null,
					error: action.error
				}
			};

		// selecting sub-reducer
		case USER_SELECTED:
			return {
				...state,
				users: {
					...state.users,
					isSelected: true,
					selectedUser: action.user
				}
			};
		case COMPANY_SELECTED:
			return {
				...state,
				companies: {
					...state.companies,
					isSelected: true,
					selectedCompany: action.company
				}
			};

		// report sub-reducer
		case REPORT_DATE_ERROR:
			return {
				...state,
				report: {
					date: action.error,
					note: null,
					isCompleted: false,
					error: true
				}
			};
		case REPORT_NOTE_ERROR:
			return {
				...state,
				report: {
					date: null,
					note: action.error,
					isCompleted: false,
					error: true
				}
			};
		case REPORT_VALIDATED:
			return {
				...state,
				report: {
					date: null,
					notes: null,
					isCompleted: true,
					error: false
				}
			};

		// utilities sub-reducer
		case STAGE_UP:
			return {
				...state,
				stage: state.stage + 1
			};
		case STAGE_DOWN:
			return {
				...state,
				stage: state.stage - 1
			};
		case WIZZARD_RESET:
			return initState;

		default:
			return state;
	}
}
