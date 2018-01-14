import {
	FETCH_REPORTS,
	FETCH_REPORTS_SUCCESS,
	FETCH_REPORTS_ERROR
} from '../actions/types';

const initState = {
	data: [],
	isLoading: false,
    isLoaded: false,
    error: null
};

export default function(state = initState, action) {
	switch (action.type) {
        case FETCH_REPORTS:
            return {
                ...state,
                isLoading: true,
                error: null
            }
        case FETCH_REPORTS_SUCCESS:
            return {
                ...state,
                data: action.payload,
                isLoading: false,
                isLoaded: true
            }
        case FETCH_REPORTS_ERROR:
            return {
                ...state,
                isLoading: false,
                isLoaded: true,
                error: action.payload
            }
        default:
            return state;
	}
}
