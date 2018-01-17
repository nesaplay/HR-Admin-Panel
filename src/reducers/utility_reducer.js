import {
	DELETE_REPORT,
	DELETE_REPORT_ERROR,
	DELETE_REPORT_SUCCESS,
	UPLOAD_REPORT,
    UPLOAD_REPORT_SUCCESS,
    UPLOAD_REPORT_ERROR,
    UTIL_RESET
} from '../actions/types';

const initState = {
	delete: {
		isLoading: false,
		isLoaded: false,
		error: null
	},
	upload: {
		isLoading: false,
		isLoaded: false,
		error: null
	}
};

export default function(state = initState, action) {
	switch (action.type) {
		case DELETE_REPORT:
			return {
				...state,
				delete: {
					isLoading: true,
					isLoaded: false,
					error: null
				}
			};
		case DELETE_REPORT_SUCCESS:
			return {
				...state,
				delete: {
					isLoading: false,
					isLoaded: true,
					error: null
				}
			};
		case DELETE_REPORT_ERROR:
			return {
				...state,
				delete: {
					isLoading: false,
					isLoaded: true,
					error: action.error
				}
			};
		case UPLOAD_REPORT:
			return {
				...state,
				upload: {
					isLoading: true,
					isLoaded: false,
					error: null
				}
			};
		case UPLOAD_REPORT_SUCCESS:
			return {
				...state,
				upload: {
					isLoading: false,
					isLoaded: true,
					error: null
				}
			};
		case UPLOAD_REPORT_ERROR:
			return {
				...state,
				upload: {
					isLoading: false,
					isLoaded: true,
					error: action.error
				}
			};
		case UTIL_RESET:
			return initState;
		default:
			return state;
	}
}
