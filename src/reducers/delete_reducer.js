import {
    DELETE_REPORT,
    DELETE_REPORT_ERROR,
    DELETE_REPORT_SUCCESS
} from '../actions/types';

const initState = {
	isLoading: false,
    isLoaded: false,
    error: null
};

export default function(state = initState, action) {
	switch (action.type) {
        case DELETE_REPORT:
            return {
                ...state,
                isLoading: true,
                error: null
            }
        case DELETE_REPORT_SUCCESS:
            return {
                ...state,
                isLoading: false,
                isLoaded: true
            }
        case DELETE_REPORT_ERROR:
            return {
                ...state,
                isLoading: false,
                isLoaded: true,
                error: action.error
            }
        default:
            return state;
	}
}
