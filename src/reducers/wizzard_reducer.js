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
    COMPANY_SELECTED
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
		data: [],
		isCompleted: false,
		error: null
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
					selectedUser: action.id
				}
			};
		case COMPANY_SELECTED:
			return {
				...state,
				companies: {
					...state.companies,
					isSelected: true,
					selectedCompany: action.id
				}
			};

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
		default:
			return state;
	}
}
